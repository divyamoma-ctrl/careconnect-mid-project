import type { VolunteerApplicationInputType } from "../../types/interface/volunteerApplication.interface";


export const VolunteerApplicationInputData: VolunteerApplicationInputType[] = [
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
    label: "Phone",
    type: "text",
    placeholder: "Enter Phone Number",
  },
];


export const availabilityOptions = [
  { label: "Weekdays", value: "Weekdays" },
  { label: "Weekends", value: "Weekends" },
  { label: "Both Weekdays and Weekends", value: "Both" },
  { label: "Flexible", value: "Flexible" },
];