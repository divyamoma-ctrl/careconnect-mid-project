import { ArrowUpRight } from "lucide-react";
import type { MakeDifference } from "../../services/json/homeJson/makeDiffeence.json";
import { Link } from "react-router-dom";

interface MakeDifferenceCardProps {
  item: MakeDifference;
}

const MakeDifferenceCard = ({ item }: MakeDifferenceCardProps) => {
  // const icons = [Heart, HandHeart, Users];
  // const Icon = icons[(item.id - 1) % icons.length];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#222222] p-7 transition-all duration-300 hover:-translate-y-2 sm:p-8">

      {/* Decorative Accent */}
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-yellow-400/5 transition-colors duration-300 group-hover:bg-yellow-400/10" />

      {/* Icon */}
      {/* <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-[#171717] transition-transform duration-300 group-hover:scale-110">
        <Icon size={27} strokeWidth={2} />
      </div> */}

      {/* Content */}
      <h3 className="mb-3 font-[Fredoka] text-2xl font-semibold text-white transition-colors group-hover:text-yellow-400">
        {item.title}
      </h3>

      <p className="min-h-20 leading-7 text-gray-400">
        {item.description}
      </p>

      {/* Button */}
      <Link  to={item.link}
      
        className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-400 transition-all hover:gap-3"
       
      >
        Know More
          <ArrowUpRight size={18} />
      </Link>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
    </div>
  );
};

export default MakeDifferenceCard;