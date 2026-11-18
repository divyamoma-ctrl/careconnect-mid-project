import type { CampaignInputType } from "../../types/interface/campaignDialogForm.interface";

export const CampaignInputData: CampaignInputType[] = [
  {
    name: "title",
    label: "Campaign Title",
    type: "text",
    placeholder: "Enter Campaign Title",
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    placeholder: "Select Campaign Category",
    options: [
      "Education",
      "Women",
      "Child Welfare",
      "Emergency",
      "Digital Literacy",
      "Child Wellbeing",
      "Legal Support",
      "Inclusive Care",
      "Medical Support",
    ],
  },
  {
    name: "targetAmount",
    label: "Target Amount",
    type: "number",
    placeholder: "Enter Target Amount",
  },
  {
    name: "raisedAmount",
    label: "Raised Amount",
    type: "number",
    placeholder: "Enter Raised Amount",
  },
];