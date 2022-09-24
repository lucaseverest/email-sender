import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "./api/lib/api";

export default function ColorMode() {
  const router = useRouter();

  const [message, setMessage] = useState("Email não confirmado");
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const token = router.query.token as string;
    const confirmEmail = async () => {
      console.log(token);

      try {
        await api.patch(`/emailConfirm?token=${token}`);

        setMessage("Email confirmado!");
      } catch (error) {
        console.log(error);
        setMessage("Erro ao confirmar email");
      }
    };

    confirmEmail();
  }, []);

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Button onClick={toggleColorMode}>
        {message ? <div> {message}</div> : <></>}
      </Button>
    </Flex>
  );
}
