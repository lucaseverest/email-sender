import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function success() {
  useEffect(() => {
    toast("Email enviado!", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });
  }, []);

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Text fontSize="2xl">Email enviado com sucesso!</Text>
      <Text fontSize="2xl">Acesse sua conta de email para confirmá-lo.</Text>
    </Flex>
  );
}
