// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, Navigation } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import teamMembers from "../../services/json/aboutJson/ourTeam.json";

// // const OurTeam = () => {
// //   return (
// //     <section className="py-16 bg-white relative">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
// //             Meet Our Team
// //           </h2>
// //           <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full" />
// //           <p className="text-gray-600 max-w-2xl mx-auto">
// //             The dedicated individuals driving our mission forward to protect,
// //             empower, and support women and children.
// //           </p>
// //         </div>

// //         {/* Swiper Slider */}
// //         <Swiper
// //           modules={[Pagination, Autoplay, Navigation]}
// //           spaceBetween={30}
// //           slidesPerView={1}
// //           navigation={true} // <-- Enables Next / Prev buttons
// //           // autoplay={{ delay: 3500, disableOnInteraction: false }}
// //           pagination={{ clickable: true }}
// //           breakpoints={{
// //             640: { slidesPerView: 2 },
// //             1024: { slidesPerView: 3 },
// //             1280: { slidesPerView: 4 },
// //           }}
// //           className="pb-14 team-swiper"
// //         >
// //           {teamMembers.map((member) => (
// //             <SwiperSlide key={member.id}>
// //               <div className="bg-amber-50/50 rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col items-center">
// //                 <div className="w-36 h-36 mb-4 rounded-full overflow-hidden border-4 border-amber-500/20 shadow-inner">
// //                   <img
// //                     src={member.image}
// //                     alt={member.name}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-gray-800 mb-1">
// //                   {member.name}
// //                 </h3>
// //                 <p className="text-sm font-medium text-amber-600">
// //                   {member.designation}
// //                 </p>
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>

// //       {/* Optional CSS override to style Swiper buttons matching the amber theme */}
// //       {/* <style>{`
// //         .team-swiper .swiper-button-next,
// //         .team-swiper .swiper-button-prev {
// //           color: #f59e0b;
// //           background: rgba(255, 255, 255, 0.9);
// //           width: 40px;
// //           height: 40px;
// //           border-radius: 50%;
// //           box-shadow: 0 2px 8px rgba(0,0,0,0.15);
// //         }
// //         .team-swiper .swiper-button-next::after,
// //         .team-swiper .swiper-button-prev::after {
// //           font-size: 18px;
// //           font-weight: bold;
// //         }
// //         .team-swiper .swiper-pagination-bullet-active {
// //           background-color: #f59e0b;
// //         }
// //       `}</style> */}
// //     </section>
// //   );
// // };

// // export default OurTeam;

// const OurTeam = () => {
//   return (
//     <section className="relative overflow-hidden py-16">
//       {/* Soft yellow decorative glow */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">

//           {/* Badge */}
//           <span className="mb-4 inline-flex items-center rounded-full border border-yellow-500/20 bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-400">
//             Our Team
//           </span>

//           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-black tracking-tight font-[fredoka]">
//             Meet the People
//             <span className="text-yellow-400"> Behind CareConnect</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
//             The dedicated individuals working together to protect, empower,
//             and support women and children in our communities.
//           </p>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Pagination, Autoplay, Navigation]}
//           spaceBetween={24}
//           slidesPerView={1}
//           navigation={true}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//             1280: {
//               slidesPerView: 4,
//             },
//           }}
//           className="pb-14 team-swiper"
//         >
//           {teamMembers.map((member) => (
//             <SwiperSlide key={member.id}>
//               <div className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-slate-100 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-xl">

//                 {/* Image */}
//                 <div className="mb-5 h-36 w-36 overflow-hidden rounded-full shadow-md">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="h-full w-full object-cover transition-transform duration-500"
//                   />
//                 </div>

//                 {/* Name */}
//                 <h3 className="font-[fredoka] text-xl font-bold text-slate-900">
//                   {member.name}
//                 </h3>

//                 {/* Designation */}
//                 <p className="mt-1 text-sm font-semibold">
//                   {member.designation}
//                 </p>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default OurTeam;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import teamMembers from "../../services/json/aboutJson/ourTeam.json";

const OurTeam = () => {
 

  return (
    <section className="relative overflow-hidden py-16">
      {/* Soft yellow decorative glow */}
      <div className="pointer-events-none absolute -left-30 top-10 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-30 bottom-0 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
           <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
           Our Team
          </span>

          <h2 className="font-[fredoka] text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
            Meet the People
            <span className="text-yellow-400"> Behind CareConnect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            The dedicated individuals working together to protect, empower, and
            support women and children in our communities.
          </p>
        </div>

        {/* Slider wrapper (arrows positioned relative to this) */}
        <div className="relative px-0 sm:px-12">
          {/* Prev button */}
          <button
            type="button"
            aria-label="Previous"
            className="team-prev absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition hover:scale-110 hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-40 max-sm:hidden"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>

          {/* Next button */}
          <button
            type="button"
            aria-label="Next"
            className="team-next absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition hover:scale-110 hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-40 max-sm:hidden"
          >
            <ChevronRight size={22} strokeWidth={3} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={teamMembers.length > 4}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{
              prevEl: ".team-prev",
              nextEl: ".team-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-4"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="h-auto">
                <div className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-slate-100 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-xl">
                  <div className="mb-5 h-36 w-36 overflow-hidden rounded-full shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-[fredoka] text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {member.designation}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
