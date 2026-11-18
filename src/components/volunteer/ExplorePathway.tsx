


import React, { useState, type ElementType } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock,
  CheckCircle2,
  Sparkles,
  HelpCircle,

} from "lucide-react";

import {
  careerRoles,
  volunteerRoles,
} from "../../services/json/volunteeerRole.json";

interface RoleItem {
  id: number | string;
  title: string;
  description: string;
  category: string;
  iconName?: string;
  icon?: ElementType;
}

export const ExplorePathway: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"volunteer" | "career">(
    "volunteer"
  );
  const navigate = useNavigate();

  const currentRoles: RoleItem[] =
    activeTab === "volunteer" ? volunteerRoles : careerRoles;

  // // Helper function to resolve icon from string name
  // const getIcon = (iconName?: string): LucideIcon => {
  //   if (!iconName) return HelpCircle;
  //   const IconComponent = (Icons as Record<string, LucideIcon>)[iconName];
  //   return IconComponent || HelpCircle;
  // };

  return (
    <section
      id="career-opportunities"
      className="relative overflow-hidden bg-linear-to-b from-amber-100/70 via-amber-50/50 to-orange-100/40 px-4 py-16 sm:px-6 sm:py-20"
    >
      {/* Background Glass Ambient Glow Orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading & Pathway Switcher */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/80 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-xs backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              Grow With Us
            </span>

            <h2 className="font-[Fredoka] text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Explore Your <span className="text-yellow-500">Pathway</span>
            </h2>
{/* 
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-700">
              Switch pathways to view immediate flexible volunteer openings or
              structured career contracts.
            </p> */}

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-700">
  {activeTab === "volunteer"
    ? "Explore flexible volunteering opportunities and make a meaningful difference in your community."
    : "Explore career opportunities and grow professionally while creating lasting social impact. Career applications are coming soon."}
</p>
          </div>

          {/* Volunteer / Career Glass Toggle Button */}
          <div className="inline-flex self-start rounded-2xl border border-white/60 bg-white/60 p-1.5 shadow-xs backdrop-blur-md md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("volunteer")}
              className={`cursor-pointer rounded-xl px-5 py-2 text-xs font-bold transition-all duration-300 ${
                activeTab === "volunteer"
                  ? "bg-amber-400 text-neutral-950 shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Volunteer Opportunities
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("career")}
              className={`cursor-pointer rounded-xl px-5 py-2 text-xs font-bold transition-all duration-300 ${
                activeTab === "career"
                  ? "bg-amber-400 text-neutral-950 shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Careers & Fellowships
            </button>
          </div>
        </div>

        {/* 70% Glass Cards Grid + 30% Right Information Panel */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-10">
          {/* Left: Role Cards with Frosted Glass Styling */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            {currentRoles.map((role) => {
              const RoleIcon =  role.icon || HelpCircle;

              return (
                <article
                  key={role.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:bg-white/90 hover:shadow-xl"
                >
                  <div>
                    {/* Glass Icon Badge */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/50 bg-amber-100/60 text-amber-900 shadow-xs backdrop-blur-xs transition-colors group-hover:bg-amber-400 group-hover:text-neutral-950">
                      <RoleIcon className="h-5 w-5" />
                    </div>

                    {/* Title */}
                    <h3 className="font-[Fredoka] text-base font-bold leading-snug text-neutral-900 transition-colors group-hover:text-amber-700">
                      {role.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-neutral-600">
                      {role.description}
                    </p>
                  </div>

                {/* Card Action Row */}
<div className="mt-6 flex items-center justify-between border-t border-neutral-200/60 pt-3.5">
  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700">
    <BriefcaseBusiness className="h-3.5 w-3.5 text-amber-600" />
    <span>{role.category}</span>
  </div>

  {activeTab === "volunteer" ? (
    <button
      type="button"
      onClick={() => navigate(`/volunteerapplication/${role.id}`)}
      className="inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold text-neutral-950 transition-all hover:bg-amber-500 hover:shadow-xs active:scale-95"
    >
      <span>Apply</span>
      <ArrowRight className="h-3.5 w-3.5" />
    </button>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
      Coming Soon
    </span>
  )}
</div>

                  {/* Dynamic Hover Line */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-full overflow-hidden bg-amber-100/50">
                    <div className="h-full w-0 bg-amber-500 transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right: Glass Dark Information Panel */}
          <aside className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950/90 p-6 text-white shadow-xl backdrop-blur-xl lg:col-span-3">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lineart-to-br from-amber-400/30 via-amber-500/10 to-transparent blur-2xl" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-neutral-950 shadow-md">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Your Next Chapter
              </span>

              <h3 className="mt-2 font-[Fredoka] text-xl font-bold leading-snug">
                Make Your Work Matter.
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                Bring your knowledge, experience, and passion to work that
                creates lasting social impact across communities.
              </p>

              <div className="mt-6 space-y-3.5">
                {[
                  "Purpose-driven work",
                  "Opportunities to learn",
                  "Collaborative teams",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2.5 text-xs font-medium text-neutral-200"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 border-t border-white/10 pt-5">
              <div className="mb-4 flex items-center gap-2 text-xs text-neutral-300">
                <Clock className="h-4 w-4 shrink-0 text-amber-400" />
                <span>Roles vary by experience and location.</span>
              </div>

              <p className="mt-3 text-center text-[11px] leading-relaxed text-neutral-400">
                Check eligibility criteria before submitting your application.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ExplorePathway;