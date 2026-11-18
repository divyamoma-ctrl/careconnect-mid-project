



// import { Quote } from "lucide-react";

// const HomeImpactQuote = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#faf9f6] py-16 sm:py-20">
//       {/* Background Yellow Light Bubbles */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Large Central Soft Glow */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-yellow-300/35 blur-[110px]" />

//         {/* Top-Right Ambient Bubble */}
//         <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-amber-300/30 blur-[90px]" />

//         {/* Bottom-Left Ambient Bubble */}
//         <div className="absolute -bottom-16 -left-12 h-72 w-72 rounded-full bg-yellow-400/25 blur-[100px]" />
//       </div>

//       <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
//         {/* Quote Icon */}
//         <div className="mx-auto flex items-center justify-center text-amber-500">
//           <Quote className="h-11 w-11 fill-amber-400" />
//         </div>

//         {/* The Quote */}
//         <blockquote className="mt-6">
//           <p className="text-xl font-medium leading-relaxed text-neutral-900 sm:text-2xl md:text-3xl font-[fredoka]">
//             "When women and children are safe, when their rights are protected,
//             and when they are empowered to contribute, society as a whole
//             thrives."
//           </p>
//           <footer className="mt-5">
//             <div className="text-xs sm:text-sm font-bold tracking-wider text-amber-500 uppercase">
//               — Kofi Annan
//             </div>
//             <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
//               Former Secretary-General of the United Nations
//             </div>
//           </footer>
//         </blockquote>
//       </div>
//     </section>
//   );
// };

// export default HomeImpactQuote;



import { Quote } from "lucide-react";

interface ImpactQuoteProps {
  quote?: string;
  author?: string;
  role?: string;
}

export const ImpactQuote = ({
  quote = "When women and children are safe, when their rights are protected, and when they are empowered to contribute, society as a whole thrives.",
  author = "Kofi Annan",
  role = "Former Secretary-General of the United Nations",
}: ImpactQuoteProps) => {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-16 sm:py-20">
      {/* Background Yellow Light Bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large Central Soft Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-yellow-300/35 blur-[110px]" />

        {/* Top-Right Ambient Bubble */}
        <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-amber-300/30 blur-[90px]" />

        {/* Bottom-Left Ambient Bubble */}
        <div className="absolute -bottom-16 -left-12 h-72 w-72 rounded-full bg-yellow-400/25 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Quote Icon */}
        <div className="mx-auto flex items-center justify-center text-amber-500">
          <Quote className="h-11 w-11 fill-amber-400" />
        </div>

        {/* The Quote */}
        <blockquote className="mt-6">
          <p className="text-xl font-medium leading-relaxed text-neutral-900 sm:text-2xl md:text-3xl font-[fredoka]">
            "{quote}"
          </p>
          <footer className="mt-5">
            <div className="text-xs sm:text-sm font-bold tracking-wider text-amber-500 uppercase">
              — {author}
            </div>
            {role && (
              <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
                {role}
              </div>
            )}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default ImpactQuote;