export interface SignupPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
//   role: "donor" | "volunteer" | "support_seeker";
}

export interface SignupInputType {
  name: keyof SignupPayload;
  label: string;
  type: string;
  placeholder: string;
}