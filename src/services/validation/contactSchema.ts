
import * as yup from "yup";

export const contactSchema = yup.object({
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

  phoneNumber: yup
    .string()
    .trim()
    .matches(/^[6-9]\d{9}$/, {
      message: "Enter a valid 10-digit Indian phone number",
      excludeEmptyString: true,
    })
    .default(""),

  location: yup
    .string()
    .trim()
    .max(100, "Location must not exceed 100 characters")
    .default(""),

subject: yup
  .string()
  .oneOf(
    [
      "",
      "General Enquiry",
      "Women Support",
      "Child Welfare",
      "Volunteering",
      "Partnership",
      "Donation",
      "Other",
    ],
    "Please select a valid subject"
  )
  .required("Please select a subject"),

  message: yup
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters")
    .max(2000, "Message must not exceed 2000 characters")
    .required("Message is required"),
});
