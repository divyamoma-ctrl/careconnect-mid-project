
// interface StatItem {
//   value: string | number;
//   label: string;
//   description: string;
// }

// interface Props {
//   title: string;
//   highlight: string;
//   subtitle: string;
//   badge?: string;
//   stats: StatItem[];
// }

// const SupportImpactStats = ({
//   title,
//   highlight,
//   subtitle,
//   badge = "Our Commitment",
//   stats,
// }: Props) => {
//   return (
//     <section className="bg-white px-4 py-12 sm:py-16">
//       {/* Heading */}
//       <div className="mx-auto mb-8 max-w-5xl text-center sm:mb-10">
//         <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-800">
//           <span className="h-2 w-2 rounded-full bg-amber-500" />
//           {badge}
//         </span>

//         <h2 className="mt-3 font-[Fredoka] text-2xl font-bold text-neutral-900 sm:text-3xl">
//           {title}{" "}
//           <span className="bg-linear-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
//             {highlight}
//           </span>
//         </h2>

//         <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-neutral-600 sm:text-sm">
//           {subtitle}
//         </p>
//       </div>

//       {/* Impact Statistics */}
//       <div className="mx-auto max-w-5xl border-y border-amber-200/80 py-5 sm:py-7">
//         <div className="grid grid-cols-2 md:grid-cols-4">
//           {stats.map((stat, index) => (
//             <div
//               key={`${stat.label}-${index}`}
//               className={`flex flex-col items-center justify-center px-3 py-5 text-center sm:px-5 sm:py-6 ${
//                 index % 2 === 0
//                   ? "border-r border-amber-200/80"
//                   : ""
//               } ${
//                 index < 2
//                   ? "border-b border-amber-200/80 md:border-b-0"
//                   : ""
//               } ${
//                 index < stats.length - 1
//                   ? "md:border-r md:border-amber-200/80"
//                   : "md:border-r-0"
//               }`}
//             >
//               <span className="font-[Fredoka] text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl">
//                 {stat.value}
//               </span>

//               <span className="mt-2 h-1 w-8 rounded-full bg-amber-400" />

//               <h3 className="mt-3 text-xs font-bold leading-tight text-amber-700 sm:text-sm">
//                 {stat.label}
//               </h3>

//               <p className="mt-1 text-[11px] font-medium text-neutral-500 sm:text-xs">
//                 {stat.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SupportImpactStats;



interface StatItem {
  value: string | number;
  label: string;
  description: string;
}

interface Props {
  title: string;
  highlight: string;
  subtitle: string;
  badge?: string;
  stats: StatItem[];
}

const SupportImpactStats = ({
  title,
  highlight,
  subtitle,
  badge = "Our Commitment",
  stats,
}: Props) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-amber-50 via-white to-yellow-50/70 px-4 py-14 sm:py-18">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-20 top-16 h-48 w-48 rounded-full bg-yellow-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        {/* <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-white/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-neutral-800 shadow-sm sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            {badge}
          </span>

          <h2 className="mt-5 font-[Fredoka] text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="bg-linear-to-r from-amber-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            {subtitle}
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-amber-500 to-yellow-300" />
        </div> */}

        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
  <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-800 shadow-sm">
    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
    {badge}
  </span>

  <h2 className="mt-3 font-[Fredoka] text-3xl font-bold leading-snug text-neutral-900 sm:text-4xl">
    {title}{" "}
    <span className="bg-linear-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
      {highlight}
    </span>
  </h2>

  <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-neutral-600 sm:text-sm">
    {subtitle}
  </p>

  <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-linear-to-r from-amber-500 to-yellow-300" />
</div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={`${stat.label}-${index}`}
              className="group relative flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-2xl border border-amber-200/80 bg-white/90 px-3 py-6 text-center shadow-[0_5px_20px_-10px_rgba(120,80,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_12px_28px_-12px_rgba(180,120,0,0.28)] sm:min-h-48 sm:px-5 sm:py-8"
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <span className="font-[Fredoka] text-3xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-amber-700 sm:text-4xl lg:text-[2.75rem]">
                {stat.value}
              </span>

              {/* Accent */}
              <div className="mt-3 h-1 w-9 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-14 group-hover:bg-yellow-500" />

              {/* Label */}
              <h3 className="mt-4 text-xs font-extrabold leading-snug text-neutral-800 sm:text-sm">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-48 text-[11px] leading-relaxed text-neutral-500 sm:text-xs sm:leading-5">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-7 text-center text-xs font-medium text-neutral-500 sm:mt-9 sm:text-sm">
          Every number represents a step toward a safer, stronger community.
        </p>
      </div>
    </section>
  );
};

export default SupportImpactStats;

