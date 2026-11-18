// export interface CampaignFormDataType {
//   name: "donorName" | "email" | "phone" | "amount";
//   label: string;
//   type: "text" | "email" | "tel" | "number";
//   placeholder: string;
// }



// export const campaignFormData: CampaignFormDataType[] = [
//   {
//     name: "donorName",
//     label: "Full Name",
//     type: "text",
//     placeholder: "Enter your full name",
//   },
//   {
//     name: "email",
//     label: "Email Address",
//     type: "email",
//     placeholder: "Enter your email",
//   },
//   {
//     name: "phone",
//     label: "Phone Number (Optional)",
//     type: "tel",
//     placeholder: "Enter your phone number",
//   },
//   {
//     name: "amount",
//     label: "Donation Amount (₹)",
//     type: "number",
//     placeholder: "Enter donation amount",
//   },
// ];


export interface CampaignFormFieldType {
  name: "donorName" | "email" | "phone" | "amount";
  label: string;
  type: "text" | "email" | "tel" | "number";
  placeholder: string;
}

export const campaignFormData: CampaignFormFieldType[] = [
  {
    name: "donorName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "phone",
    label: "Phone Number (Optional)",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    name: "amount",
    label: "Donation Amount (₹)",
    type: "number",
    placeholder: "Enter donation amount",
  },
];