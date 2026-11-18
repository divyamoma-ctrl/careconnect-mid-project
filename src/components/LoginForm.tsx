
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// import {
//   Box,
//   Button,
//   Card,
//   Typography,
//   Link,
// } from "@mui/material";

// import type { LoginPayload } from "../types/interface/login.interface";

// import DynamicInput from "./common/DynamicInput";
// import { loginSchema } from "../services/validation/loginSchema";
// import { LoginInputData } from "../services/json/login.json";

// interface LoginFormProps {
//   onRegisterClick: () => void;
// }

// const LoginForm = ({ onRegisterClick }: LoginFormProps) => {
//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginPayload>({
//     resolver: yupResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data: LoginPayload) => {
//     console.log("Login Data:", data);

//     // Later we will connect Appwrite here.

//     reset();
//   };

//   return (
//     <Card
//       elevation={0}
//       sx={{
//         width: "100%",
//         maxWidth: "420px",
//         mx: "auto",
//         borderRadius: "16px",
//         p: { xs: 2, sm: 3 },
//         backgroundColor: "#ffffff",
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{ textAlign: "center", mb: 1 }}
//       >
//         Welcome Back!
//       </Typography>

//       <Typography
//         variant="body2"
//         sx={{
//           textAlign: "center",
//           color: "text.secondary",
//           mb: 3,
//         }}
//       >
//         Login to continue your journey with CareConnect.
//       </Typography>

//       <Box
//         component="form"
//         onSubmit={handleSubmit(onSubmit)}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//         }}
//       >
//         {LoginInputData.map((input) => (
//           <DynamicInput
//             key={input.name}
//             label={input.label}
//             type={input.type}
//             placeholder={input.placeholder}
//             register={register(input.name)}
//             error={!!errors[input.name]}
//             helperText={errors[input.name]?.message}
//           />
//         ))}

//         <Button
//           variant="contained"
//           type="submit"
//           fullWidth
//         >
//           Login
//         </Button>

//         <Typography
//           variant="body2"
         
//           sx={{  textAlign:"center",mt: 1 }}
//         >
//           New user?{" "}
//           <Link
//             component="button"
//             type="button"
//             underline="hover"
//             onClick={onRegisterClick}
//             sx={{ fontWeight: 600 }}
//           >
//             Register
//           </Link>
//         </Typography>
//       </Box>
//     </Card>
//   );
// };

// export default LoginForm;


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
} from "@mui/material";

import type { LoginPayload } from "../types/interface/login.interface";

import DynamicInput from "./common/DynamicInput";
import { loginSchema } from "../services/validation/loginSchema";
import { LoginInputData } from "../services/json/login.json";
import { toast } from "sonner";

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginPayload) => {
    console.log("Login Data:", data);

    // Later we will connect Appwrite here.
 toast.success("Logged in Successfully!")
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
      {LoginInputData.map((input) => (
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
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;