export interface DonationInputData {
  name: "name" | "email" | "mobile" | "dob" | "address" | "pincode" | "pan";
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  rows?: number;
}

export const donationInputData: DonationInputData[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
  },
  {
    name: "mobile",
    label: "Mobile Number",
    type: "tel",
    placeholder: "Enter your 10-digit mobile number",
    required: true,
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    placeholder: "",
    required: false,
  },
  {
    name: "address",
    label: "Address",
    type: "textarea",
    placeholder: "Enter your full address",
    required: true,
    rows: 3,
  },
  {
    name: "pincode",
    label: "PIN Code",
    type: "text",
    placeholder: "Enter your 6-digit PIN code",
    required: true,
  },
  {
    name: "pan",
    label: "PAN Number (optional)",
    type: "text",
    placeholder: "ABCDE1234F",
    required: false,
  },
];