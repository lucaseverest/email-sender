import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { AppError } from "../../utils/AppError";
import { v4 as uuidV4 } from "uuid";
import { NodemailerMailAdapter } from "./lib/mail/nodemailer/nodemailerMailAdapter";
import prisma from "../../prisma";

interface ISendEmailConfirmRequest extends NextApiRequest {
  body: {
    email: string;
  };
}

const sendEmailConfirmMail = async (
  req: ISendEmailConfirmRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      // verificar se o email foi enviado no body
      if (!email) {
        throw new AppError("Email not found on request body", 422);
      }

      // verificar se o usuário existe
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (!user) {
        throw new AppError("User does not exists", 400);
      }

      // verificar se o email já foi confirmado
      if (user.hasEmailConfirmed) {
        throw new AppError("Email already confirmed", 409);
      }

      // buscar template do email
      const templatePath = path.join(
        process.cwd(),
        "/src", // src
        "/lib", // lib
        "/mail", // lib/mail
        "/views", // lib/mail/views
        "/emailConfirmation.hbs" // lib/mail/views/emailConfirmation.hbs
      );

      const token = uuidV4();

      // Criar um token na tabela de tokens já existente
      await prisma.token.create({
        data: {
          token: token,
          userId: user.id,
        },
      });

      // criar variáveis do template
      const variables = {
        name: user.name,
        link: `${process.env.EMAIL_CONFIRM_URL}${token}`,
      };

      const nodemailerMailAdapter = new NodemailerMailAdapter();

      await nodemailerMailAdapter.send({
        mail: {
          to: email,
          subject: "Confirmação de email",
          variables,
          path: templatePath,
        },
        userId: user.id,
      });

      res.status(200).json({ message: "Confirmation email sent successfylly" });
    } catch (error) {
      console.log(error);
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).send("Method not allowed");
  }
};

export default sendEmailConfirmMail;
