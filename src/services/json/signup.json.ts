import type { SignupInputType } from "../../types/interface/signup.interface";

export const SignupInputData: SignupInputType[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter Your Name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter Phone Number",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Password",
  },
   {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm Your Password",
  },
];