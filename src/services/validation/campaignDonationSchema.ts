import * as yup from "yup";

export const campaignDonationSchema = yup.object({
  donorName: yup
    .string()
    .trim()
    .required("Name is required"),

  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, {
      message: "Enter a valid 10-digit phone number",
      excludeEmptyString: true,
    })
    .default(""),

  amount: yup
    .number()
    .typeError("Please enter a valid amount")
    .positive("Amount must be greater than zero")
    .integer("Enter a whole number")
    .required("Donation amount is required"),

  message: yup
    .string()
    .max(300, "Message cannot exceed 300 characters")
    .default(""),
});

export type DonationFormData = yup.InferType<
  typeof campaignDonationSchema
>;