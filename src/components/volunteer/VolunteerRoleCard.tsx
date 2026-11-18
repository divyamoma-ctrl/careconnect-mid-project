import React from "react";
import { ArrowRight, BriefcaseBusiness, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RoleCardProps {
  role: {
    id: number;
    title: string;
    description: string;
    category: string;
    icon: LucideIcon; // Direct type
  };
}

const VolunteerRoleCard: React.FC<RoleCardProps> = ({ role }) => {
  const IconComponent = role.icon;
  const navigate = useNavigate();

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-6 shadow-xs backdrop-blur-md transition-all hover:-translate-y-1.5 hover:border-amber-300 hover:bg-white/90 hover:shadow-xl">
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/50 bg-amber-100/60 text-amber-900 backdrop-blur-xs transition-colors group-hover:bg-amber-400 group-hover:text-neutral-950">
          <IconComponent className="h-5 w-5" />
        </div>

        <h3 className="font-[Fredoka] text-base font-bold text-neutral-900 transition-colors group-hover:text-amber-700">
          {role.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-xs text-neutral-600">
          {role.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-neutral-200/60 pt-3.5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700">
          <BriefcaseBusiness className="h-3.5 w-3.5 text-amber-600" />
          <span>{role.category}</span>
        </div>

       <button
          type="button"
          onClick={() => navigate(`/apply/${role.id}`)}
          className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold text-neutral-950 transition hover:bg-amber-500 cursor-pointer"
        >
          <span>Apply</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
};

export default VolunteerRoleCard;