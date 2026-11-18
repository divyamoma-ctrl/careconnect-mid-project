import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button } from "@mui/material";

import type { SignupPayload } from "../types/interface/signup.interface";

import DynamicInput from "./common/DynamicInput";
import { signupSchema } from "../services/validation/signupSchema";
import { SignupInputData } from "../services/json/signup.json";
import { toast } from "sonner";

const RegisterForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupPayload>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupPayload) => {
    console.log("Signup Data:", data);

    // Later we will connect Appwrite here.
   toast.success("Registered Successfully!")
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "420px",
        mx: "auto",
        pt: 2,
      }}
    >
      {SignupInputData.map((input) => (
        <DynamicInput
          key={input.name}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          register={register(input.name)}
          error={!!errors[input.name]}
          helperText={errors[input.name]?.message}
        />
      ))}

      <Button
        variant="contained"
        type="submit"
        fullWidth
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;