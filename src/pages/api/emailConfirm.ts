import { NextApiRequest, NextApiResponse } from "next";
import { DayjsDateProvider } from "../../shared/dateProvider/DayjsDateProvider";
import { AppError } from "../../utils/AppError";
import prisma from "../../prisma";

interface IEmailConfirmRequest extends NextApiRequest {
  query: {
    token: string;
  };
}

const emailConfirm = async (
  req: IEmailConfirmRequest,
  res: NextApiResponse
) => {
  if (req.method === "PATCH") {
    try {
      return await prisma.$transaction(async (prisma) => {
        const { token } = req.query;

        // verificar se o token está vazio
        if (!token) {
          throw new AppError("token not found on request query", 422);
        }

        // buscar token no banco
        const userToken = await prisma.token.findFirst({
          where: {
            token: token,
          },
        });

        // se userToken n existir lançar um erro
        if (!userToken) {
          throw new AppError("Token Invalid!", 401);
        }

        // verificar se o token está expirado
        const dateProvider = new DayjsDateProvider();

        if (
          dateProvider.compareIfBefore(
            userToken.expiresAt,
            dateProvider.dateNow()
          )
        ) {
          throw new AppError("Token expired!", 401);
        }

        // buscar dados do usuário
        const user = await prisma.user.findFirst({
          where: {
            id: userToken.userId,
          },
        });

        // se não tiver user associado com esse token apagar o token
        if (!user) {
          await prisma.token.delete({
            where: {
              token: token,
            },
          });

          throw new AppError(
            "Token Invalid, please request email confirmation again",
            401
          );
        }

        // prisma update
        await prisma.user.update({
          where: {
            email: user.email,
          },
          data: {
            hasEmailConfirmed: true,
          },
        });

        // deletar token
        await prisma.token.delete({
          where: {
            token: token,
          },
        });

        return res.status(200).json({ message: "email confirmed succesfully" });
      });
    } catch (error) {
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

export default emailConfirm;
