import type { ContactInputData } from "../../types/interface/contactInterface";


export const contactInputData: ContactInputData[] = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Enter your email address",
    type: "email",
    required: true,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "tel",
    required: false,
  },
  {
    name: "location",
    label: "Location",
    placeholder: "Enter your city or district",
    type: "text",
    required: false,
  },
  {
    name: "message",
    label: "Your Message",
    placeholder: "Tell us how we can help you",
    type: "text",
    required: true,
    multiline: true,
    rows: 4,
  },
];
