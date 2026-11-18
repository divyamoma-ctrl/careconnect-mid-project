export interface MissionDataType {
  id: number;
  title: string;
  description: string;
   image: string;
 }

// import missionResponsibility from "../../assets/images/aboutUs/mission-responsibility.jpg";
// import missionMobilising from "../../assets/images/aboutUs/mission-mobilising.jpg";
// import missionCollective from "../../assets/images/aboutUs/mission-collective.jpg";

import missionResponsibility from "../../../assets/images/aboutUs/mission-responsibility.jpg";
import missionMobilising from "../../../assets/images/aboutUs/mission-mobilising.jpg";
import missionCollective from "../../../assets/images/aboutUs/mission-collective.jpg";

// import type { MissionDataType } from "../../types/interface/mission";

export const missions: MissionDataType[] = [
  {
    id: 1,
    title: "Taking Responsibility",
    description:
      "To inspire individuals and communities to take active ownership in protecting the fundamental rights, safety, and well-being of women and children.",
    image: missionResponsibility,
  },
  {
    id: 2,
    title: "Mobilising Potential",
    description:
      "To empower women and children with education, life skills, and resources so they can advocate for themselves and thrive independently.",
    image: missionMobilising,
  },
  {
    id: 3,
    title: "Inspiring Collective Action",
    description:
      "To unite civil society, grassroot movements, and local partners to create lasting system-level change through collaboration, legal support, and advocacy.",
    image: missionCollective,
  },
];