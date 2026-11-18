// import {
//   Eye,
//   HeartHandshake,

// } from "lucide-react";

// import { missions } from "../../services/json/aboutJson/mission.json";

// const VisionMission = () => {
//   return (
//     <>
//       {/* ================= OUR VISION ================= */}

//       <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">

//         <div className="mx-auto max-w-4xl text-center">

//           <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-400">
//             <Eye className="h-4 w-4" />
//             Our Vision
//           </span>

//           <h2 className="text-2xl font-extrabold sm:text-3xl font-[Fredoka]">
//             A Better Future for{" "}
//             <span className="text-yellow-400">
//               Everyone
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
//             A safe, just, and equal world where every child and woman is
//             protected, healthy, and empowered to fulfill their true potential
//             with dignity and respect.
//           </p>

//         </div>

//       </section>

//       {/* ================= OUR MISSION ================= */}

//       <section className="relative overflow-hidden bg-neutral-950 px-4 py-16 sm:px-6 lg:px-8">

//         {/* Subtle yellow glow */}

//         <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

//         <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-7xl">

//           {/* Mission Heading */}

//           <div className="mb-12 text-center">

//             <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-950">
//               <HeartHandshake className="h-4 w-4" />
//               Our Mission
//             </span>

//             <h2 className="text-2xl font-extrabold sm:text-3xl font-[Fredoka] text-white">
//               Turning{" "}
//               <span className="text-yellow-400">
//                 Compassion
//               </span>{" "}
//               into Action
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-slate-400">
//               We focus on practical support that creates meaningful and
//               lasting change for women, children, and communities.
//             </p>

//           </div>

//           {/* Mission Cards */}

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

//             {missions.map((item) => (

//               <div
//                 key={item.id}
//                 className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10 hover:shadow-2xl"
//               >

//                 {/* Image */}

//                 <div className="h-56 w-full overflow-hidden">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />

//                 </div>

//                 {/* Content */}

//                 <div className="p-6">

//                   <div className="mb-3 flex items-center justify-between">

//                     <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
//                       Our Focus
//                     </span>

//                     <span className="text-3xl font-bold text-white/10">
//                       {String(item.id).padStart(2, "0")}
//                     </span>

//                   </div>

//                   <h3 className="font-[fredoka] text-xl font-bold text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-relaxed text-slate-400">
//                     {item.description}
//                   </p>

//                   {/* <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-400">

//                     Creating meaningful change

//                     <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />

//                   </div> */}

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>
//     </>
//   );
// };

// export default VisionMission;

import {HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { missions } from "../../services/json/aboutJson/mission.json";

const VisionMission = () => {
  return (
    <>

      {/* OUR VISION */}
 

      <section className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        {/* Background glow */}

        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Vision badge */}

          <div className="mb-10 text-center">
             <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
           Our vision
          </span>
          </div>

          {/* Vision content */}

          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl font-[Fredoka]">
                A safer world where
                <span className="text-yellow-400"> everyone can thrive.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We envision a future where every woman and child has the
                opportunity to live with safety, dignity, equality, and hope. A
                future where support is accessible when it is needed most.
              </p>

              {/* Vision highlights */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {/* Point 1 */}

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Safety & Protection
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Creating safer environments for women and children.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Opportunity & Hope
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Helping people build brighter and independent futures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative">
              {/* Main yellow card */}

              <div className="relative overflow-hidden rounded-[2rem] bg-yellow-400 p-8 sm:p-10">
                {/* Decorative circle */}

                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-black/10" />

                <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10" />

                <div className="relative z-10">
                  <HeartHandshake className="h-12 w-12 text-slate-950" />

                  <p className="mt-8 font-[fredoka] text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                    Every woman.
                    <br />
                    Every child.
                    <br />
                    Every chance.
                  </p>

                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-800">
                    Together, we can connect compassion with meaningful action
                    and create opportunities for those who need support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* OUR MISSION */}
   

      <section className="relative overflow-hidden bg-neutral-950 px-4 py-16 sm:px-6 lg:px-8">
        {/* Yellow glows */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}

          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
           Our mission
          </span>

            <h2 className="text-2xl font-extrabold sm:text-3xl font-[Fredoka] text-white">
              Turning <span className="text-yellow-400">Compassion</span> into
              Action
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              We focus on practical support that creates meaningful and lasting
              change for women, children, and communities.
            </p>
          </div>

          {/* Mission cards */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {missions.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 "
              >
                {/* Image */}

                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-yellow-400">
                      Our Focus
                    </span>
                    {/* 
                    <span className="text-3xl font-bold text-white/10">
                      {String(item.id).padStart(2, "0")}
                    </span> */}
                  </div>

                  <h3 className="font-[fredoka] text-l font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
