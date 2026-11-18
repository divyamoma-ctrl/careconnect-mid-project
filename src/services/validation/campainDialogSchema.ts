import * as yup from "yup";

export const campaignSchema = yup.object({
  title: yup.string().required("Campaign title is required"),

  description: yup.string().required("Description is required"),

  category: yup.string().required("Category is required"),

  targetAmount: yup
    .number()
    .typeError("Enter a valid amount")
    .positive("Amount must be greater than zero")
    .required("Target amount is required"),

  raisedAmount: yup
    .number()
    .typeError("Enter a valid amount")
    .min(0, "Raised amount cannot be negative")
    .required("Raised amount is required"),

  status: yup
    .string()
    .oneOf(["active", "completed"])
    .required("Status is required"),
});