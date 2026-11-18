export interface MakeDifference {
  id: number;
  title: string;
  description: string;
    link: string;
}

export const makeDifferenceData: MakeDifference[] = [
  {
    id: 1,
    title: "Donate to Support",
    description:
      "Help provide education, healthcare, and essential resources.",
        link:"/donate"
  },
  {
    id: 2,
    title: "Become a Volunteer",
    description:
      "Give your time and skills to support communities.",
        link:"/volunteer"
  },
  {
    id: 3,
    title: "Join a Campaign",
    description:
      "Participate in initiatives that create positive change.",
        link:"/campaigns"
  },
];