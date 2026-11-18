
import dropOutToSoftware from "../../../assets/images/whatWeDo/dropouttosoftware.jpg"
import digitallySkilled from "../../../assets/images/whatWeDo/digitallySkilled.jpg"
import rescued from "../../../assets/images/whatWeDo/rescued.jpg"
// import dropOutToSoftware from "../../../assets/images/whatWeDo/"


export interface womenSupportStoriesType {
"id": number,
    "title": string,
    "description":string,
    "category": string,
    "image": string,
    "bgColor": string
}

export const womenSupportStories = [
  {
    "id": 1,
    "title": "Meet Nandini: From School Dropout to Software Engineer at Google",
    "description": "Forced to leave school early due to financial hardship, Nandini joined our digital bridge fellowship. Today, she writes code at Google and mentors young girls in tech.",
    "category": "Education & Career",
    "image": dropOutToSoftware ,
    "bgColor": "#FFF8E7"
  },
  {
    "id": 2,
    "title": "40 Women Upskilled in Digital Literacy Launch Their Own Ventures",
    "description": "Equipped with smartphone commerce, marketing, and accounting skills, a cohort of 40 rural women launched independent micro-enterprises—earning sustainable monthly incomes.",
    "category": "Economic Empowerment",
    "image": digitallySkilled,
    "bgColor": "#F0FDF4"
  },
  {
    "id": 3,
    "title": "Meet Barnali: Reclaiming Hope and Independence Beyond Trauma",
    "description": "Rescued from human trafficking, Barnali underwent extensive trauma counseling and vocational rehabilitation. She now leads a self-reliant life running her own tailoring boutique.",
    "category": "Rehabilitation & Healing",
    "image": rescued,
    "bgColor": "#FDF2F8"
  }
]