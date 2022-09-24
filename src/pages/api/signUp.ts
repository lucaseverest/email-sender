import { NextApiRequest, NextApiResponse } from "next";
import { AppError } from "../../utils/AppError";
import prisma from "../../prisma";
import { NodemailerMailAdapter } from "./lib/mail/nodemailer/nodemailerMailAdapter";
import { v4 as uuidV4 } from "uuid";
import path from "path";

interface ISignUpInRequest extends NextApiRequest {
  body: {
    name: string;
    email: string;
  };
}

const signUp = async (req: ISignUpInRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, email } = req.body;

      // verificar se não está vazio
      if (!name) {
        throw new AppError("name not found on request body", 422);
      } else if (!email) {
        throw new AppError("email not found on request body", 422);
      }

      // verificar se já tem usuário com o email
      const userAlreadyExists = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (userAlreadyExists) {
        throw new AppError("user already exists", 403);
      }

      // salvar usuário no banco
      const user = await prisma.user.create({
        data: {
          email,
          name,
        },
      });

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

      return res.status(200).json({ user });
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

export default signUp;
