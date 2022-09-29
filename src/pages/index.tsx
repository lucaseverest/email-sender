import { Button, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/form/input";
import { api } from "./api/lib/api";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

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
  email: yup.string().required("Email obrigatório").email("Email inválido!"),
  name: yup.string().required("Nome obrigatório"),
});

export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    name,
  }) => {
    try {
      await api.post<{
        user: User;
      }>("/signUp", {
        email,
        name,
      });

      router.push("/success");
    } catch (err) {
      const error = err as AxiosError<signUpAxiosError>;
      if (axios.isAxiosError(error) && error.response) {
        toast(error.response.data.message, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      } else {
        toast("Unknown Error", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
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
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            name="Name"
            type="name"
            label="Name"
            error={errors.name?.message}
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
