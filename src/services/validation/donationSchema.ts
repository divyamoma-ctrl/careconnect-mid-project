import * as yup from "yup";

export const donationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .required("Name is required"),

  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  mobile: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),

  dob: yup.string().default(""),

  address: yup
    .string()
    .trim()
    .required("Address is required"),

  pincode: yup
    .string()
    .matches(/^\d{6}$/, "Enter a valid 6-digit PIN code")
    .required("PIN code is required"),

  pan: yup
    .string()
    .transform((value) => value?.trim().toUpperCase() || "")
    .matches(
      /^[A-Z]{5}[0-9]{4}[A-Z]$/,
      "Enter a valid PAN number",
    )
    .default(""),
});

export type DonorDetailsFormData = yup.InferType<
  typeof donationSchema
>;