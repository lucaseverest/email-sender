import { Button, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/form/input";
import { api } from "./api/lib/api";
import axios, { AxiosError } from "axios";

type SignInFormData = {
  email: string;
  name: string;
};

interface User {
  id: string;
  email: string;
  name: string;
  hasEmailConfirmed: boolean;
}

interface signUpAxiosError {
  message: string;
}

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido!"),
  name: yup.string().required("Nome obrigatório"),
});

export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    name,
  }) => {
    try {
      const signUpResponse = await api.post<{
        user: User;
      }>("/signUp", {
        email,
        name,
      });

      const { user } = signUpResponse.data;
      console.log(user);

      router.push("/dashboard");
    } catch (err) {
      const error = err as AxiosError<signUpAxiosError>;
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="Email"
            type="email"
            label="E-mail"
            {...errors["email"]}
            {...register("email")}
          />
          <Input
            name="Name"
            type="name"
            label="Name"
            {...errors["password"]}
            {...register("name")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="green"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
