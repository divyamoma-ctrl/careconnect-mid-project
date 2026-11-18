// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// import award1 from "../../assets/images/aboutUs/award1.webp";
// import award2 from "../../assets/images/aboutUs/award2.webp";
// import award3 from "../../assets/images/aboutUs/award3.webp";
// import award4 from "../../assets/images/aboutUs/award4.webp";
// import award5 from "../../assets/images/aboutUs/award5.webp";
// import award6 from "../../assets/images/aboutUs/award6.webp";

// interface AwardItem {
//   id: number;
//   year: string;
//   title: string;
//   organization: string;
//   logo: string;
//   description: string;
//   category: string;
// }

// const awardsData: AwardItem[] = [
//   {
//     id: 1,
//     year: "2025",
//     title: "Best Community NGO Award",
//     organization: "National Social Impact Forum",
//     logo: award1,
//     category: "Community Impact",
//     description:
//       "Recognized for supporting child education and building stronger communities.",
//   },
//   {
//     id: 2,
//     year: "2024",
//     title: "Women Empowerment Excellence",
//     organization: "Global Future Foundation",
//     logo: award2,
//     category: "Women Empowerment",
//     description:
//       "Celebrated for promoting women's skills and financial independence.",
//   },
//   {
//     id: 3,
//     year: "2023",
//     title: "Healthcare Innovation Honor",
//     organization: "Healthcare Accessibility Council",
//     logo: award3,
//     category: "Child Healthcare",
//     description:
//       "Recognized for improving healthcare and nutritional support for children.",
//   },
//   {
//     id: 4,
//     year: "2022",
//     title: "Excellence in Child Education",
//     organization: "Education for All Foundation",
//     logo: award4,
//     category: "Education",
//     description: "Honored for encouraging learning opportunities for children.",
//   },
//   {
//     id: 5,
//     year: "2021",
//     title: "Outstanding Volunteer Initiative",
//     organization: "People First Network",
//     logo: award5,
//     category: "Volunteering",
//     description:
//       "Recognized for encouraging community participation and volunteer service.",
//   },
//   {
//     id: 6,
//     year: "2020",
//     title: "Community Welfare Recognition",
//     organization: "Social Development Council",
//     logo: award6,
//     category: "Social Welfare",
//     description: "Acknowledged for initiatives supporting vulnerable families.",
//   },
// ];

// const AboutAwardsSection = () => {
//   return (
//     <section className="relative overflow-hidden py-16 sm:py-20">
//       {/* Decorative Background */}
//       <div className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl" />
//       <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
//         {/* Section Heading */}

//         <div className="mx-auto mb-10 max-w-3xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-400">
//             Recognition & Trust
//           </span>
//           <h2 className="font-[fredoka] text-2xl font-extrabold tracking-tight text-black sm:text-3xl mt-2">
//             Celebrating Our
//             <span className="text-yellow-400"> Achievements</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
//             Every recognition celebrates the people, partnerships, and efforts
//             that help us create a brighter future for women and children.
//           </p>
//         </div>

//         {/* Awards Swiper Carousel */}
//         <div className="relative px-2">
//           {/* Custom Navigation - Left Button */}
//           <button
//             type="button"
//             aria-label="Previous awards"
//             className="awards-prev absolute -left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-white shadow-md transition-all duration-200 hover:bg-amber-500 active:scale-95 disabled:opacity-40 disabled:pointer-events-none sm:-left-6 sm:h-12 sm:w-12"
//           >
//             <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
//           </button>

//           {/* Swiper Container */}
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation={{
//               prevEl: ".awards-prev",
//               nextEl: ".awards-next",
//             }}
//             autoplay={{
//               delay: 3500,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             spaceBetween={20}
//             slidesPerView={1}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 24,
//               },
//             }}
//             className="!pb-6 !pt-2"
//           >
//             {awardsData.map((award, index) => (
//               <SwiperSlide key={award.id} className="h-auto">
//                 <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg">
//                   {/* Colorful Top Border */}
//                   <div
//                     className={`h-1.5 ${
//                       index % 3 === 0
//                         ? "bg-yellow-400"
//                         : index % 3 === 1
//                           ? "bg-blue-800"
//                           : "bg-sky-400"
//                     }`}
//                   />

//                   {/* Logo Area */}
//                   <div className="relative flex h-48 items-center justify-center border-b border-gray-100 bg-linear-to-br from-yellow-50 via-white to-blue-50 p-5">
//                     <span className="absolute right-3 top-3 rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs font-bold text-gray-800">
//                       {award.year}
//                     </span>

//                     <img
//                       src={award.logo}
//                       alt={`${award.organization} logo`}
//                       className="h-36 w-full object-contain transition-transform duration-300 group-hover:scale-105"
//                       loading="lazy"
//                     />
//                   </div>

//                   {/* Award Details */}
//                   <div className="flex flex-1 flex-col p-5">
//                     <span className="mb-3 w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-900">
//                       {award.category}
//                     </span>

//                     <h3 className="font-[Fredoka] text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-blue-900">
//                       {award.title}
//                     </h3>

//                     <p className="mt-2 text-xs font-semibold leading-5 text-amber-700">
//                       {award.organization}
//                     </p>

//                     <p className="mt-3 text-xs leading-5 text-gray-600">
//                       {award.description}
//                     </p>

//                     <div className="mt-auto flex items-center gap-2 pt-4">
//                       <span className="h-2 w-2 rounded-full bg-yellow-400" />
//                       <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
//                         Making a difference
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation - Right Button */}
//           <button
//             type="button"
//             aria-label="Next awards"
//             className="awards-next absolute -right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-white shadow-md transition-all duration-200 hover:bg-amber-500 active:scale-95 disabled:opacity-40 disabled:pointer-events-none sm:-right-6 sm:h-12 sm:w-12"
//           >
//             <ChevronRight className="h-6 w-6 stroke-[2.5]" />
//           </button>
//         </div>

//         {/* Bottom Text */}
//         <p className="mt-3 text-center text-xs leading-5 text-gray-500">
//           Every milestone inspires us to reach more lives.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutAwardsSection;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import award1 from "../../assets/images/aboutUs/award1.webp";
import award2 from "../../assets/images/aboutUs/award2.webp";
import award3 from "../../assets/images/aboutUs/award3.webp";
import award4 from "../../assets/images/aboutUs/award4.webp";
import award5 from "../../assets/images/aboutUs/award5.webp";
import award6 from "../../assets/images/aboutUs/award6.webp";

interface AwardItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  logo: string;
  description: string;
  category: string;
}

const awardsData: AwardItem[] = [
  {
    id: 1,
    year: "2025",
    title: "Best Community NGO Award",
    organization: "National Social Impact Forum",
    logo: award1,
    category: "Community Impact",
    description:
      "Recognized for supporting child education and building stronger communities.",
  },
  {
    id: 2,
    year: "2024",
    title: "Women Empowerment Excellence",
    organization: "Global Future Foundation",
    logo: award2,
    category: "Women Empowerment",
    description:
      "Celebrated for promoting women's skills and financial independence.",
  },
  {
    id: 3,
    year: "2023",
    title: "Healthcare Innovation Honor",
    organization: "Healthcare Accessibility Council",
    logo: award3,
    category: "Child Healthcare",
    description:
      "Recognized for improving healthcare and nutritional support for children.",
  },
  {
    id: 4,
    year: "2022",
    title: "Excellence in Child Education",
    organization: "Education for All Foundation",
    logo: award4,
    category: "Education",
    description: "Honored for encouraging learning opportunities for children.",
  },
  {
    id: 5,
    year: "2021",
    title: "Outstanding Volunteer Initiative",
    organization: "People First Network",
    logo: award5,
    category: "Volunteering",
    description:
      "Recognized for encouraging community participation and volunteer service.",
  },
  {
    id: 6,
    year: "2020",
    title: "Community Welfare Recognition",
    organization: "Social Development Council",
    logo: award6,
    category: "Social Welfare",
    description: "Acknowledged for initiatives supporting vulnerable families.",
  },
];

const AboutAwardsSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
           <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
         Recongintion and trust
          </span>
          <h2 className="mt-2 font-[fredoka] text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
            Celebrating Our
            <span className="text-yellow-400"> Achievements</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Every recognition celebrates the people, partnerships, and efforts
            that help us create a brighter future for women and children.
          </p>
        </div>

        {/* Awards Swiper Carousel */}
        <div className="relative px-2">
          {/* Custom Navigation - Left Button */}
          <button
            type="button"
            aria-label="Previous awards"
            className="awards-prev absolute -left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-white shadow-lg transition-all duration-200 hover:bg-amber-500 active:scale-95  sm:-left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
          </button>

          {/* Swiper Container */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".awards-prev",
              nextEl: ".awards-next",
            }}
            loop={true}
            // autoplay={{
            //   delay: 3500,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-8 !pt-4"
          >
            {awardsData.map((award, index) => (
              <SwiperSlide key={award.id} className="h-auto">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/10">
                  {/* Colorful Top Border */}
                  <div
                    className={`h-1.5 ${
                      index % 3 === 0
                        ? "bg-yellow-400"
                        : index % 3 === 1
                          ? "bg-blue-800"
                          : "bg-sky-400"
                    }`}
                  />

                  {/* Logo Area */}
                  <div className="relative flex h-48 items-center justify-center border-b border-gray-100 bg-linear-to-br from-yellow-50/60 via-white to-blue-50/60 p-5">
                    <span className="absolute right-3 top-3 rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs font-bold shadow-xs text-gray-800">
                      {award.year}
                    </span>

                    <img
                      src={award.logo}
                      alt={`${award.organization} logo`}
                      className="h-36 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Award Details */}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-3 w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-900">
                      {award.category}
                    </span>

                    <h3 className="font-[Fredoka] text-lg font-semibold leading-snug text-gray-900 transition-colors ">
                      {award.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold leading-5 text-amber-700">
                      {award.organization}
                    </p>

                    <p className="mt-3 text-xs leading-5 text-gray-600">
                      {award.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-4">
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                        Making a difference
                      </span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation - Right Button */}
          <button
            type="button"
            aria-label="Next awards"
            className="awards-next absolute -right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-white shadow-lg transition-all duration-200 hover:bg-amber-500 active:scale-95  sm:-right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-6 w-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Text */}
        <p className="mt-3 text-center text-xs leading-5 text-gray-500">
          Every milestone inspires us to reach more lives.
        </p>
      </div>
    </section>
  );
};

export default AboutAwardsSection;
