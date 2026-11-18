import * as yup from "yup";

export const signupSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(32, "Name must be at most 32 characters")
    .required("Name is required"),

  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number")
    .required("Phone number is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

    confirmPassword: yup
  .string()
  .oneOf([yup.ref("password")], "Passwords must match")
  .required("Confirm password is required"),

//   role: yup
//   .string()
//   .oneOf(
//     ["donor", "volunteer", "support_seeker"],
//     "Please select a valid role"
//   )
//   .required("Please select your role"),
});