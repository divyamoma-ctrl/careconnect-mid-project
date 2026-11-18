// import { NavLink } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// const HomeAbout = () => {
//   return (
//     <section className="py-16 px-4  border-y border-neutral-800">
//       <div className="max-w-5xl mx-auto text-center space-y-6 bg">
//         {/* Subtitle / Badge */}
//         <span className="inline-block px-3 py-1 bg-black text-yellow-400 text-xs font-semibold uppercase tracking-wider rounded-full border border-yellow-500/20 font-[fredoka]">
//           Who We Are
//         </span>

//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight font-[fredoka]">
//           Connecting Compassion with Direct Action
//         </h2>

//         {/* Concise Paragraph */}
//         <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//           CareConnect is an interactive digital NGO platform built to bridge the gap between people seeking critical assistance and those ready to help. From emergency intervention and child welfare programs to direct donation tracking and volunteer networks, we streamline every step of the support journey to ensure safety, dignity, and real-world impact.
//         </p>

//         {/* Action Button */}
//         <div className="pt-2">
//           <NavLink
//             to="/aboutus"
//             className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-bold text-sm sm:text-base rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/10"
//           >
//             Explore More
//             <ArrowRight className="w-4 h-4" />
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeAbout;





// import homeAboutImage from "../../assets/images/homeImage/homeAbout-bg.jpg";
// import { NavLink } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const HomeAbout = () => {

//     console.log("Image path:", homeAboutImage);
//   return (
//     <section
//       className="py-16 px-4 relative  min-h-[400px]"
// //     style={{
// //   backgroundImage: `url(${homeAboutImage})`,
// //   backgroundSize: "cover",
// //   backgroundPosition: "center",
// //   backgroundRepeat: "no-repeat",
// // }}
//     >
//       <div className="max-w-5xl mx-auto text-center space-y-6">
//         {/* Subtitle / Badge */}
//         <span className="inline-block px-3 py-1 bg-black text-yellow-400 text-xs font-semibold uppercase tracking-wider rounded-full border border-yellow-500/20 font-[fredoka]">
//           Who We Are
//         </span>

//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight font-[fredoka]">
//           Connecting Compassion with Direct Action
//         </h2>

//         {/* Paragraph */}
//         <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//           CareConnect is an interactive digital NGO platform built to bridge the
//           gap between people seeking critical assistance and those ready to
//           help. From emergency intervention and child welfare programs to direct
//           donation tracking and volunteer networks, we streamline every step of
//           the support journey to ensure safety, dignity, and real-world impact.
//         </p>

//         {/* Action Button */}
//         <div className="pt-2">
//           <NavLink
//             to="/aboutus"
//             className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-bold text-sm sm:text-base rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/10"
//           >
//             Explore More
//             <ArrowRight className="w-4 h-4" />
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeAbout;



// import { NavLink } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const HomeAbout = () => {
//   return (
//     <section className="relative min-h-[420px] overflow-hidden bg-linear-to-b from-neutral-950 via-zinc-900 to-neutral-950 px-4 py-20">
//       {/* Subtle warm ambient glow in the center */}
//       <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-yellow-500/10 blur-[100px]" />

//       <div className="relative z-10 mx-auto max-w-5xl space-y-6 text-center">
//         {/* Subtitle / Badge */}
//         <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 font-[fredoka] text-xs font-semibold uppercase tracking-wider text-yellow-400 backdrop-blur-sm">
//           Who We Are
//         </span>

//         {/* Heading */}
//         <h2 className="font-[fredoka] text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
//           Connecting Compassion with{" "}
//           <span className="text-yellow-400">Direct Action</span>
//         </h2>

//         {/* Paragraph */}
//         <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
//           CareConnect is an interactive digital NGO platform built to bridge the
//           gap between people seeking critical assistance and those ready to help.
//           From emergency intervention and child welfare programs to direct
//           donation tracking and volunteer networks, we streamline every step of
//           the support journey to ensure safety, dignity, and real-world impact.
//         </p>

//         {/* Action Button */}
//         <div className="pt-3">
//           <NavLink
//             to="/aboutus"
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-neutral-950 shadow-md transition-all duration-200 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95"
//           >
//             Explore More
//             <ArrowRight className="h-4 w-4" />
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeAbout;





import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeAbout = () => {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-neutral-950 via-zinc-900 to-neutral-950 px-4 py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />

      {/* Subtle Decorative Circle */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/[0.06] sm:h-[450px] sm:w-[450px]" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-6 text-center">

        {/* Subtitle */}
       <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
           Who we are
          </span>

        {/* Heading - Original Font Sizes Maintained */}
        <h2 className="font-[fredoka] text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Connecting Compassion with{" "}
          <span className="text-yellow-400">
            Direct Action
          </span>
        </h2>

        {/* Decorative Underline */}
        <div className="mx-auto h-1 w-16 rounded-full bg-linear-to-r from-yellow-600 via-yellow-300 to-amber-500" />

        {/* Description */}
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          CareConnect is an interactive digital NGO platform built to bridge the
          gap between people seeking critical assistance and those ready to help.
          From emergency intervention and child welfare programs to donation
          support and volunteer networks, we make it easier to connect people
          with meaningful support while promoting safety, dignity, and compassion.
        </p>

        {/* Action Button */}
        <div className="flex flex-col items-center justify-center gap-4 pt-3 sm:flex-row">

          <NavLink
            to="/aboutus"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-neutral-950 shadow-md shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95"
          >
            Explore More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>

          <span className="text-sm font-medium tracking-wide text-zinc-400">
            Every woman. Every child. Every chance to shine.
          </span>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
