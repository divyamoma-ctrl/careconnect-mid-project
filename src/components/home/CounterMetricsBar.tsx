




// import React, { useEffect, useState } from "react";
// import type { MetricItem } from "../../services/json/homeJson/counterMetric.json";

// ; // Imported directly from metrics file

// interface ImpactMetricsBarProps {
//   metrics: MetricItem[];
// }

// const CounterMetricsBar: React.FC<ImpactMetricsBarProps> = ({ metrics }) => {
//   return (
   
//         <section className="relative z-10 bg-black px-3 py-12 text-white shadow-lg sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Section Header */}
//         <div className="mb-8 text-center md:mb-12">
        
//           <h2 className="mt-1 text-xl font-black tracking-tight sm:text-2xl md:text-3xl font-[fredoka]">
//             Real Lives. Real Impact.
//           </h2>
//         </div>

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
//           {metrics?.map((metric) => {
//             const Icon = metric.icon;

//             return (
//               <div
//                 key={metric.id}
//                 className="group flex flex-col items-center rounded-2xl border border-slate-700/50 bg-slate-800/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50"
//               >
//                 {/* Icon Container */}
//                 <div className="mb-4 rounded-xl bg-yellow-400/10 p-3 text-yellow-400 transition-colors duration-300">
//                   <Icon className="h-7 w-7 sm:h-7 sm:w-7" />
//                 </div>

//                 {/* Counter Number */}
//                 <div className="mb-1 text-md font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
//                   {metric.prefix}
//                   <Counter target={metric.value} />
//                   {metric.suffix}
//                 </div>

//                 {/* Metric Label */}
//                 <h3 className="mb-1 text-sm font-bold text-yellow-400 sm:text-md">
//                   {metric.label}
//                 </h3>

//                 {/* Description */}
//                 <p className="max-w-[220px] text-xs leading-relaxed text-slate-300 sm:text-sm">
//                   {metric.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Counter Helper Component
// const Counter: React.FC<{ target: number }> = ({ target }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1500;
//     const increment = Math.ceil(target / (duration / 16));

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [target]);

//   return <span>{count.toLocaleString()}</span>;
// };

// export default CounterMetricsBar;





import React, { useEffect, useState } from "react";
import type { MetricItem } from "../../services/json/homeJson/counterMetric.json";

interface ImpactMetricsBarProps {
  metrics: MetricItem[];
}

const CounterMetricsBar: React.FC<ImpactMetricsBarProps> = ({ metrics }) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-neutral-950 via-zinc-900 to-neutral-950 px-4 py-12 text-white sm:px-6 lg:px-8">

      {/* Subtle Yellow Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-yellow-400/[0.07] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 text-center md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
           Making a difference
          </span>
          <h2 className="font-[fredoka] text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl">
            Real Lives.{" "}
            <span className="text-yellow-400">Real Impact.</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-yellow-400" />
        </div>

        {/* Metrics Without Cards */}
        <div className="grid grid-cols-2 gap-y-9 md:grid-cols-4 md:gap-y-0">
          {metrics?.map((metric, index) => (
            <div
              key={metric.id}
              className={`group relative flex flex-col items-center px-3 text-center sm:px-5 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              {/* Number */}
              <div className="font-[fredoka] text-2xl font-extrabold tracking-tight text-yellow-400 transition-transform duration-300 group-hover:scale-105 sm:text-3xl lg:text-4xl">
                {metric.prefix}
                <Counter target={metric.value} />
                {metric.suffix}
              </div>

              {/* Label */}
              <h3 className="mt-3 text-sm font-bold text-white sm:text-base">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-zinc-400 sm:text-sm">
                {metric.description}
              </p>

              {/* Vertical Divider */}
              {index !== metrics.length - 1 && (
                <div className="absolute -right-0 top-1/2 hidden h-16 -translate-y-1/2 border-r border-yellow-400/25 md:block" />
              )}

              {/* Mobile Divider */}
              {index % 2 === 0 && index !== metrics.length - 1 && (
                <div className="absolute -right-0 top-1/2 h-16 -translate-y-1/2 border-r border-yellow-400/20 md:hidden" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mx-auto mt-10 h-px max-w-4xl bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

      </div>
    </section>
  );
};

// Animated Counter
const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = Math.max(1, Math.ceil(target / (duration / 16)));

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

export default CounterMetricsBar;
