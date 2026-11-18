
// Women support
import mothersCare from "../../../assets/images/whatWeDo/mothers-care.png";
import microtask from "../../../assets/images/whatWeDo/microtask.jpg";
import womenStudy from "../../../assets/images/whatWeDo/womenStudy.jpg";
import secondChance from "../../../assets/images/whatWeDo/literacy.webp";


// Child support
import nutrition from "../../../assets/images/whatWeDo/ensure-nutrition-for-children.jpg";
import vaccination from "../../../assets/images/whatWeDo/ensure-vaccination-for-children.jpg";
import sendBacktoSchool from "../../../assets/images/whatWeDo/send-children-back-to-school.webp";
import stopChildMarraige from "../../../assets/images/whatWeDo/stop-child-marraige.jpg";
import childLabour from "../../../assets/images/whatWeDo/connecting-to-parents-with-job-opportunities.jpg";
import restartSchool from "../../../assets/images/whatWeDo/restart-school.jpg";

export interface Support {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  bgColor: string;
}

export const womenSupports = [
  {
    id: 1,
    title: "Nurturing Mothers & Ensuring Safe Motherhood",
    category: "Maternal Health & Care",
    image: mothersCare,
    description:
      "We provide expectant and new mothers with comprehensive prenatal checkups, nutritional supplements, safe delivery support, and post-natal care to ensure the health and well-being of both mother and child.",
    bgColor: "#fce7f3",
  },

  {
    id: 2,
    title: "Bridging the Gap: Functional Literacy for Financial Independence",
    category: "Basic & Financial Literacy",
    image: secondChance,
    description:
      "After giving up her education early to work, Sarita joined adult learning circles to master reading, writing, and digital payments, allowing her to confidently run her own small business.",
    bgColor: "#fef9c3",
  },
  {
    id: 3,
    title: "Earning Through Digital Micro-Tasks & Remote Work",
    category: "Digital Micro-Jobs",
    image:  microtask,
    description:
      "Equipped with smartphone-based data entry and content moderation training, Lakshmi now completes micro-tasks online from home, earning a steady income while managing her household.",
    bgColor: "#f1f5f9",
  },
  
  
  {
    id: 4,
    title: "Data Entry and Office Automation Certification",
    category: "IT & Office Administration",
    image: womenStudy,
    description:
      "Through structured computer courses focusing on advanced spreadsheets, database management, and professional typing, participants qualify for administrative and corporate data roles.",
    bgColor: "#ede9fe",
  },

  
  //   {
  //     id: 2,
  //     title: "Bridging the Digital Divide in Rural Healthcare",
  //     category: "Digital Literacy",
  //     image: "/images/stories/women-digital-health.jpg",
  //     description:
  //       "Equipped with basic tablet training and telemedicine tools, community health worker Fatima brings prenatal consultations and preventive care directly to remote households.",
  //     bgColor: "#e0f2fe",
  //   },
  //   {
  //     id: 3,
  //     title: "Leading Climate-Resilient Agriculture",
  //     category: "Sustainable Farming",
  //     image: "/images/stories/women-farming.jpg",
  //     description:
  //       "By adopting drip irrigation and seed preservation techniques, Meera revitalized her village's arid farmland and now mentors over 40 women in drought-resistant farming.",
  //     bgColor: "#dcfce7",
  //   },
  //   {
  //     id: 4,
  //     title: "Breaking Ground in Vocational Trades",
  //     category: "Skill Development",
  //     image: "/images/stories/women-trades.jpg",
  //     description:
  //       "Challenging traditional barriers, Priya completed a certified solar technician course and now installs rooftop solar grids for residential and community clinics.",
  //     bgColor: "#fef3c7",
  //   },
  //   {
  //   id: 5,
  //   title: "Reclaiming Freedom & Rebuilding Lives After Trafficking",
  //   category: "Women Empowerment & Safety",
  //   image: "/images/stories/women-anti-trafficking-rehabilitation.jpg",
  //   description:
  //     "Rescued from human trafficking, Sunita received trauma counseling, safe shelter, and vocational skill training, enabling her to secure sustainable employment and rebuild a dignified life.",
  //   bgColor: "#fbcfe8",
  // }
];

export const childSupports = [
  {
    id: 1,
    title: "Rescued and Shielded From Child Trafficking",
    category: "Child Protection",
    image: sendBacktoSchool,
    description:
      "We operate active community surveillance networks at transit hubs, intercepting vulnerable children, providing immediate shelter, and ensuring safe family reunification.",
    bgColor: "#fef08a",
  },
  {
    id: 2,
    title: "Bringing Out-of-School Children Back to Classrooms",
    category: "Quality Education",
    image: restartSchool,
    description:
      "We identify dropouts, conduct bridge remedial learning courses, supply school kits, and facilitate direct formal enrollment in government schools.",
    bgColor: "#bae6fd",
  },
  {
    id: 3,
    title: "Intervening to Halt Early Child Marriages",
    category: "Child Rights & Safety",
    image: stopChildMarraige,
    description:
      "Through grassroots adolescent vigilance groups and local authority tie-ups, we counsel families, stop illegal underage unions, and protect girls' right to complete their education.",
    bgColor: "#fbcfe8",
  },
  {
    id: 4,
    title: "Delivering Critical Healthcare & Nutrition Support",
    category: "Health & Nutrition",
    image: nutrition,
    description:
      "We conduct regular health checkups, distribute supplementary nutrition kits, combat severe malnutrition, and administer essential routine vaccinations in underserved pockets.",
    bgColor: "#bbf7d0",
  },
  {
    id: 5,
    title: "Eradicating Child Labour & Empowering Families",
    category: "Child Protection & Livelihood",
    image: childLabour,
    description:
      "We rescue children from hazardous child labour, enroll them in formal schooling, and provide stable employment opportunities and vocational training to their parents to secure family livelihoods.",
    bgColor: "#fed7aa",
  },
  {
    id: 6,
    title: "Essential Immunization & vaccination",
    category: "Child Health & Vaccination",
    image: vaccination,
    description:
      "We conduct routine vaccination drives in remote communities, protecting children against life-threatening diseases, monitoring growth, and delivering vital pediatric healthcare support.",
    bgColor: "#fed7aa",
  },
];
