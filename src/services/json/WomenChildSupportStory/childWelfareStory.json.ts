import childLaborToClassTop from "../../../assets/images/whatWeDo/labourToClassTopper.jpg"
import nutritionAndHealth from "../../../assets/images/whatWeDo/nutrition.jpg"
import  reunitedFamily from "../../../assets/images/whatWeDo/meerasBack.jpg"
// import nutritionAndHealth from "../../../assets/images/whatWeDo/"


export interface childWelfareStoriesType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  bgColor: string;
}

export const childWelfareStories: childWelfareStoriesType[] = [
  {
    id: 1,
    title: "Aarav’s Journey: From Child Labor to Top of His Class",
    description: "Forced to work at a local tea stall to support his family, Aarav was enrolled in our evening learning center. Today, he ranks first in his 8th-grade exams and dreams of becoming a doctor.",
    category: "Education & Child Rights",
    image: childLaborToClassTop,
    bgColor: "#EFF6FF"
  },
  {
    id: 2,
    title: "Nutrition Program Revitalizes Health for 150+ Rural Children",
    description: "Through regular healthcare checkups and daily fortified meals, over 150 children in remote villages overcame severe malnutrition and returned to active school life.",
    category: "Health & Nutrition",
    image: nutritionAndHealth,
    bgColor: "#F0FDF4"
  },
  {
    id: 3,
    title: "Reuniting Lost Children: Meera’s Path Back Home",
    description: "Separated from her family at a busy railway station, 7-year-old Meera was rescued by our shelter team and safely reunited with her parents after weeks of tracing.",
    category: "Protection & Rehabilitation",
    image: reunitedFamily,
    bgColor: "#FFF8E7"
  }
];