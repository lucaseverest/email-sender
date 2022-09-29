import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "./api/lib/api";

interface signUpAxiosError {
  message: string;
}

export default function ColorMode() {
  const router = useRouter();

  const [message, setMessage] = useState("Email não confirmado");

  const toHome = () => router.push("/");

  useEffect(() => {
    const token = router.query.token as string;

    const confirmEmail = async () => {
      try {
        await api.patch(`/emailConfirm?token=${token}`);

        setMessage("Email confirmado!");

        toast("Email Confirmado!", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      } catch (err) {
        const error = err as AxiosError<signUpAxiosError>;

        if (axios.isAxiosError(error) && error.response) {
          const errorMessage = error.response.data.message;

          if (errorMessage === "Token Invalid!") {
            setMessage(
              "Token inválido ou indefinido, clique aqui e envie o email novamente."
            );

            toast("Token Inválido!", {
              hideProgressBar: true,
              autoClose: 2000,
              type: "error",
            });
          } else {
            toast(errorMessage, {
              hideProgressBar: true,
              autoClose: 2000,
              type: "error",
            });
          }
        } else {
          toast("Unknown Error", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
          });
        }
      }
    };

    if (token) {
      confirmEmail();
    }
  }, [router]);

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Button onClick={toHome}>{<Text fontSize="xl">{message}</Text>}</Button>
    </Flex>
  );
}
