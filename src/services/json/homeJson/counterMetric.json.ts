import {
  BookHeart,

  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";

export interface MetricItem {
  id: string;
  icon: React.ElementType;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

const metrics: MetricItem[] = [
  {
    id: "lives",
    icon: Users,
    value: 25000,
    suffix: "+",
    label: "Women & Children",
    description: "Impacted Overall",
  },
  {
    id: "projects",
    icon: ShieldCheck,
    value: 150,
    suffix: "+",
    label: "Active Projects",
    description:
      "Schools, Education, Protects from Child Labour, Women support",
  },
  {
    id: "volunteers",
    icon: HeartHandshake,
    value: 1200,
    suffix: "+",
    label: "Global Volunteers",
    description: "Dedicated advocates serving communities",
  },
  {
    id: "aid",
    icon: BookHeart,
    value: 500,
    suffix: "+",
    label: "Saved from child marraige",
    description:
      "of adolescent girls,between 11-18 years, protected from child marriage",
  },
];

export default metrics;
