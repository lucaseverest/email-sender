import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="green.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
