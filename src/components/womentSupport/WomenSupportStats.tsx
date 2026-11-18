import {
  ShieldCheck,
  GraduationCap,
  HeartPulse,
  Briefcase,
} from "lucide-react";

interface Props {
  womenEmpowered?: string | number;
  skillTrainings?: string | number;
  healthcareServices?: string | number;
  legalAssistanceRate?: string | number;
}

export const WomenSupportStats = ({
  womenEmpowered = "4,500+",
  skillTrainings = "2,200+",
  healthcareServices = "6,100+",
  legalAssistanceRate = "100%",
}: Props) => {
  const items = [
    {
      icon: Briefcase,
      label: "Women Empowered",
      val: womenEmpowered,
      sub: "Livelihood & jobs",
    },
    {
      icon: GraduationCap,
      label: "Skill Trainings",
      val: skillTrainings,
      sub: "Vocational courses",
      highlight: true,
    },
    {
      icon: HeartPulse,
      label: "Health & Care",
      val: healthcareServices,
      sub: "Medical aid & wellness",
    },
    {
      icon: ShieldCheck,
      label: "Legal Support",
      val: legalAssistanceRate,
      sub: "Rights & protection",
      highlight: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-yellow-100 to-[#fffbe1] py-12 px-4 sm:py-16">
      {/* Subtle Warm Ambient Glows */}
      <div className="pointer-events-none absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 h-72 w-72 rounded-full bg-amber-100/35 blur-3xl" />

      {/* Header */}
      <div className="relative mx-auto mb-8 max-w-5xl px-4 text-center sm:mb-10">
         <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          
          verified data & impact
          </span>

        <h2 className="mt-3 font-[Fredoka] text-2xl font-bold text-neutral-900 sm:text-3xl">
          Statistics on{" "}
          <span className="text-yellow-400">
            Women Empowerment
          </span>
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-neutral-600 sm:text-sm">
          Measurable community outcomes across economic self-reliance,
          vocational training, health initiatives, and legal advocacy.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-between rounded-2xl border border-neutral-200/80 bg-white/90 p-4 text-center shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.18)] sm:p-5"
            >
              {/* Icon */}
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 text-amber-600 shadow-xs transition-transform duration-300 group-hover:scale-105">
                <item.icon size={20} className="stroke-[2.2]" />
              </div>

              {/* Number */}
              <span
                className={`font-[Fredoka] text-2xl font-black tracking-tight sm:text-3xl ${
                  item.highlight ? "text-amber-600" : "text-neutral-900"
                }`}
              >
                {item.val}
              </span>

              {/* Label */}
              <span className="mt-1 text-xs font-bold leading-tight text-neutral-800">
                {item.label}
              </span>

              <span className="mt-1 text-[11px] font-medium text-neutral-500">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenSupportStats;
