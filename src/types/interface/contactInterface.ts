import type { InferType } from "yup";
import type { contactSchema } from "../../services/validation/contactSchema";

// Form data type generated from Yup schema
export type ContactFormData = InferType<typeof contactSchema>;

// JSON input configuration type
export interface ContactInputData {
  name: keyof ContactFormData;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  multiline?: boolean;
  rows?: number;
}