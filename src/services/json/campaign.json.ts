import campaignEducation from "../../assets/images/campaigns/campaign-education.jpg";
import campaignWomen from "../../assets/images/campaigns/campaign-women.jpg";
import campaignNutrition from "../../assets/images/campaigns/campaign-nutrition.jpg";
import campaignShelter from "../../assets/images/campaigns/campaign-shelter.jpg";
import campaignDoctor from "../../assets/images/campaigns/campaign-doctors.jpg";
import campaignLegal from "../../assets/images/campaigns/campaign-legal.jpg";
import campaignDigital from "../../assets/images/campaigns/campaign-digital.jpg";
import campaignMental from "../../assets/images/campaigns/campaign-mental.jpg";
import campaignDisability from "../../assets/images/campaigns/campaign-disability.png";

import type { CampaignDataType } from "../../types/interface/campaigns";

export const campaigns: CampaignDataType[] = [
  {
    $id:  "campaign-1",
    title: "Education for Every Child",
    description:
      "Help children continue their education with books, school supplies, and learning support.",
    image: campaignEducation,
    targetAmount: 100000,
    raisedAmount: 65000,
    category: "Education",
    status: "active",
  },
  {
    $id:  "campaign-2",
    title: "Support Women to Restart",
    description:
      "Support women with skill development, counselling, and opportunities for financial independence.",
    image: campaignWomen,
    targetAmount: 150000,
    raisedAmount: 90000,
    category: "Women",
    status: "active",
  },
  {
    $id:  "campaign-3",
    title: "Healthy Childhood",
    description:
      "Provide nutritious food and essential healthcare support to children in need.",
    image: campaignNutrition,
    targetAmount: 120000,
    raisedAmount: 70000,
    category: "Child Welfare",
    status: "active",
  },
  {
    $id:  "campaign-4",
    title: "Safe Shelter Initiative",
    description:
      "Help provide safe temporary accommodation and essential support for families in crisis.",
    image: campaignShelter,
    targetAmount: 200000,
    raisedAmount: 120000,
    category: "Emergency",
    status: "active",
  },
  {
     $id:  "campaign-5",
    title: "Digital Literacy for Women",
    description:
      "Help women build basic digital skills so they can access education, services, and new opportunities.",
    image: campaignDigital,
    targetAmount: 110000,
    raisedAmount: 72000,
    category: "Digital Literacy",
    status: "active",
  },
  {
    $id:  "campaign-6",
    title: "Child Mental Wellbeing",
    description:
      "Create supportive spaces where children can receive emotional guidance, counselling, and compassionate care.",
    image: campaignMental,
    targetAmount: 125000,
    raisedAmount: 78000,
    category: "Child Wellbeing",
    status: "active",
  },

  {
    $id:  "campaign-7",
    title: "Legal Support for Women",
    description:
      "Help women access legal guidance and understand their rights when facing difficult situations.",
    image: campaignLegal,
    targetAmount: 140000,
    raisedAmount: 85000,
    category: "Legal Support",
    status: "active",
  },

  {
     $id:  "campaign-8",
    title: "Support for Children with Disabilities",
    description:
      "Help children with disabilities access learning resources, assistive support, and inclusive activities.",
    image: campaignDisability,
    targetAmount: 180000,
    raisedAmount: 112000,
    category: "Inclusive Care",
    status: "active",
  },

  {
     $id:  "campaign-9",
    title: "A Doctor Within Reach",
    description:
      "Support access to doctor consultations and basic healthcare for women and children who need it most.",
    image: campaignDoctor,
    targetAmount: 160000,
    raisedAmount: 105000,
    category: "Medical Support",
    status: "active",
  },
];
