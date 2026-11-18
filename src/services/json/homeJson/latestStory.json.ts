export interface Story {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  bgColor: string;
}

export const Lateststories: Story[] = [
  {
    id: 1,
    title: "150 Underprivileged Children Rejoin School This Year",
    category: "Child Education",
    image: "../../src/assets/images/homeImage/story-edu.jpg",
    description:
      "Through our bridge learning program, children from low-income families are stepping back into classrooms with free books, uniforms, and newfound confidence.",
    bgColor: "#f2e35c",

  },
  {
    id: 2,
    title: "Over 200 Women Achieve Financial Independence",
    category: "Women Empowerment",
    image: "../../src/assets/images/homeImage/story-womenEmpower.webp",
    description:
     "By mastering tailoring and handicrafts through our skill workshops, hundreds of local women are now running small businesses and earning their own livelihood.",
    // bgColor: "#9ce61296",
    bgColor: "#e6aa6a96"
  },
  {
    id: 3,
    title: "Free Healthcare & Nutrition Reach 500+ Children",
    category: "Healthcare",
    image: "../../src/assets/images/homeImage/story-healthierChildhood.png",
    description:
      "By providing daily nutritious meals, essential vitamins, and regular health checkups, we are helping children overcome malnutrition and build healthier futures.",
    bgColor: "#f2e35c",
  },
  {
    id: 4,
    title: "Empowering Local Neighbors to Drive Sustainable Change",
    category: "Community Support",
    image: "../../src/assets/images/homeImage/story-communityHelp.png",
    description:
      "When communities come together, they can create meaningful and lasting change. When families lead the effort in fixing schools, roads, and sanitation, entire villages gain the tools and unity needed to build a brighter future together.",
    bgColor: "#e6aa6a96",
  },
  {
    id: 5,
    title: "Meet Pallavi: From School Dropout to Software Engineer at Google",
    category: "Child Education",
    image: "../../src/assets/images/homeImage/dropoutToGoogle.jpg",
    description:
      "Forced to leave school due to financial crisis, Pallavi discovered coding through our tech initiative and turned her dream into a reality.",
    bgColor: "#b2eb8d",
  },
];
