import {
  BookOpen,
  Scale,
  Shield,
  Megaphone,
  Users,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Building2,
} from "lucide-react";


export interface RoleItem {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
}

export const volunteerRoles: RoleItem[] = [
  {
    id: 1,
    title: "Weekend Child Tutor & Mentor",
    description:
      "Support elementary children in remedial math, reading, and self-confidence through scheduled virtual & local sessions.",
    category: "Teaching Pod",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Pro-Bono Legal Counsel",
    description:
      "Assist domestic abuse survivors and marginalized guardians in child custody, civil mediation, and legal filing.",
    category: "Advocacy",
    icon: Scale,
  },
  {
    id: 3,
    title: "Emergency Shelter Caretaker",
    description:
      "Provide compassionate intake companionship, night logistics support, and food-care distribution in local shelters.",
    category: "Sanctuary",
    icon: Shield,
  },
  {
    id: 4,
    title: "Digital Storyteller & Campaigner",
    description:
      "Write short case profiles, design ethical social posts, and organize grassroots digital drives to mobilize awareness.",
    category: "Awareness",
    icon: Megaphone,
  },
];





export const careerRoles: RoleItem[] = [
  {
    id: 101,
    title: "Program Coordinator",
    description:
      "Help plan community initiatives and coordinate support programs across regional centers.",
    category: "Program Management",
    icon: Users,
  },
  {
    id: 102,
    title: "Education Specialist",
    description:
      "Support learning programs, curriculum building, and educational activities for children.",
    category: "Education",
    icon: GraduationCap,
  },
  {
    id: 103,
    title: "Community Outreach Lead",
    description:
      "Connect directly with local communities and help families access essential welfare support.",
    category: "Field Operations",
    icon: HeartHandshake,
  },
  {
    id: 104,
    title: "Fundraising & Partnerships",
    description:
      "Build strategic partnerships, manage donor relations, and organize social cause drives.",
    category: "Fundraising",
    icon: Megaphone,
  },
  {
    id: 105,
    title: "Digital & IT Support",
    description:
      "Maintain digital platforms, websites, database systems, and tech tools for field teams.",
    category: "Technology",
    icon: Laptop,
  },
  {
    id: 106,
    title: "Administration & HR",
    description:
      "Help manage daily operations, team onboarding, compliance, and organizational workflows.",
    category: "Administration",
    icon: Building2,
  },
];