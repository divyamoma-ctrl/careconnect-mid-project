export interface TeamMemberType {
  id: number;
  name: string;
  designation: string;
  image: string;
}

// Update image paths based on your assets folder structure
import team1 from "../../../assets/images/aboutUs/team1.jpg";
import team2 from "../../../assets/images/aboutUs/team2.jpg";
import team3 from "../../../assets/images/aboutUs/team3.jpg";
import team4 from "../../../assets/images/aboutUs/team4.jpg";
import team5 from "../../../assets/images/aboutUs/team5.jpg";

 const teamMembers: TeamMemberType[] = [
  {
    id: 1,
    name: "Rajesh Verma",
    designation: "Executive Director",
    image: team1,
  },
  {
    id: 2,
    name: "Ananya Sharma",
    designation: "Chief Executive Officer (CEO)",
    image: team2,
  },
  {
    id: 3,
    name: "Sidhharth Sekhar",
    designation: "Head of Child Welfare Programs",
    image: team3,
  },
  {
    id: 4,
    name: "Priya Mukherjee",
    designation: "Women Empowerment Lead",
    image: team4,
  },
  {
    id: 5,
    name: "Suman Roy",
    designation: "Women Empowerment Lead",
    image: team5,
  },
];

export default teamMembers;