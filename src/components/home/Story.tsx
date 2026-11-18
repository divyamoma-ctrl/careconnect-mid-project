// import StoryCard from "./StoryCard";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { ArrowLeft, ArrowRight } from "lucide-react";
// import {
//   Lateststories,
//   type Story as StoryType,
// } from "../../services/json/homeJson/latestStory.json";

// interface StoryProps {
//   title?: string;
//   description?: string;
//   stories?: StoryType[];
// }

// const Story = ({
//   title = "Latest Stories, We Can Create Change",
//   description = "Discover how education, empowerment, and community support can create a brighter future for women and children.",
//   stories = Lateststories,
// }: StoryProps) => {
//   return (
//     <section className="bg-white py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section heading */}
//         <div className="mb-10 text-center">
//           <p className="mb-4 inline-block rounded-full border border-yellow-500/20 bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-400">
//             Stories that inspire
//           </p>

//           <h2 className="font-[fredoka] text-3xl font-bold text-slate-900 md:text-4xl">
//             {title}
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
//             {description}
//           </p>
//         </div>

//         {/* Story slider */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             slidesPerView={1}
//             spaceBetween={24}
//             loop={stories.length > 1}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             navigation={{
//               prevEl: ".story-prev",
//               nextEl: ".story-next",
//             }}
//             // pagination={{
//             //   clickable: true,
//             //   el: ".story-pagination",
//             // }}
//           >
//             {stories.map((story) => (
//               <SwiperSlide key={story.id} className="pb-12">
//                 <StoryCard story={story} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation arrows */}
//           <button
//             type="button"
//             aria-label="Previous story"
//             className="story-prev absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition hover:bg-yellow-400 sm:-translate-x-4"
//           >
//             <ArrowLeft size={20} />
//           </button>

//           <button
//             type="button"
//             aria-label="Next story"
//             className="story-next absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition hover:bg-yellow-400 sm:translate-x-4"
//           >
//             <ArrowRight size={20} />
//           </button>

//           {/* Pagination dots */}
//           <div className="story-pagination mt-2 flex justify-center gap-2" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Story;








// import StoryCard from "./StoryCard";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { ArrowLeft, ArrowRight } from "lucide-react";
// import {
//   womenSupportStories,
//   type womenSupportStoriesType,
// } from "../../services/json/WomenChildSupportStory/womenSupportStory.json";

// interface StoryProps {
//   title?: string;
//   description?: string;
//   badgeText?: string;
//   stories?: womenSupportStoriesType[];
//   sliderId?: string;
// }

// const Story = ({
//   title = "Latest Stories, We Can Create Change",
//   description = "Discover how education, empowerment, and community support can create a brighter future for women and children.",
//   badgeText = "Stories that inspire",
//   stories = womenSupportStories,
//   sliderId = "story-slider",
// }: StoryProps) => {
//   const prevBtn = `${sliderId}-prev`;
//   const nextBtn = `${sliderId}-next`;

//   return (
//     <section className="bg-white py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section heading */}
//         <div className="mb-10 text-center">
//           <p className="mb-4 inline-block rounded-full border border-yellow-500/20 bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-400">
//             {badgeText}
//           </p>

//           <h2 className="font-[fredoka] text-3xl font-bold text-slate-900 md:text-4xl">
//             {title}
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
//             {description}
//           </p>
//         </div>

//         {/* Story slider */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             slidesPerView={1}
//             spaceBetween={24}
//             loop={stories.length > 1}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             navigation={{
//               prevEl: `.${prevBtn}`,
//               nextEl: `.${nextBtn}`,
//             }}
//           >
//             {stories.map((story) => (
//               <SwiperSlide key={story.id} className="pb-12">
//                 <StoryCard story={story} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation arrows */}
//           <button
//             type="button"
//             aria-label="Previous story"
//             className={`${prevBtn} absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition hover:bg-yellow-400 sm:-translate-x-4`}
//           >
//             <ArrowLeft size={20} />
//           </button>

//           <button
//             type="button"
//             aria-label="Next story"
//             className={`${nextBtn} absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition hover:bg-yellow-400 sm:translate-x-4`}
//           >
//             <ArrowRight size={20} />
//           </button>

//           {/* Pagination dots */}
//           <div className="story-pagination mt-2 flex justify-center gap-2" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Story;





import React from "react";
import StoryCard, { type StoryItem } from "./StoryCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Lateststories } from "../../services/json/homeJson/latestStory.json";

interface StoryProps {
  title?: string;
  titlespan?: string;
  description?: string;
  badgeText?: string;
  stories?: StoryItem[];
  sliderId?: string;
}

const Story: React.FC<StoryProps> = ({
  title = "Latest Stories",
  titlespan = "Stories of Hope",
  description = "Discover how education, empowerment, and community support can create a brighter future for women and children.",
  badgeText = "Stories that inspire",
  stories = Lateststories as StoryItem[],
  sliderId = "home-story",
}) => {
  const prevBtn = `${sliderId}-prev`;
  const nextBtn = `${sliderId}-next`;

  return (
    <section className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
           {badgeText}
          </span>
          <h2 className="font-[fredoka] text-2xl font-bold text-slate-900 md:text-3xl">
            {title} <span className="text-yellow-400">{titlespan}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            {description}
          </p>
        </div>

        {/* Story slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop={stories.length > 1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: `.${prevBtn}`,
              nextEl: `.${nextBtn}`,
            }}
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id} className="pb-12">
                <StoryCard story={story} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows */}
          <button
            type="button"
            aria-label="Previous story"
            className={`${prevBtn} absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-yellow-400 text-gray-800 shadow-md transition hover:bg-yellow-600 sm:-translate-x-4`}
          >
            <ArrowLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next story"
            className={`${nextBtn} absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-yellow-400 text-gray-800 shadow-md transition hover:bg-yellow-600 sm:translate-x-4`}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;