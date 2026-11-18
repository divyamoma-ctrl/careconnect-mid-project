// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// export interface Story {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
//   description: string;
//   bgColor: string;
// }

// interface InitiativeSliderProps {
//   titlePrefix: string;
//   highlightText: string;
//   titleSuffix: string;
//   description: string;
//   stories: Story[];
// }

// export const InitiativeSlider: React.FC<InitiativeSliderProps> = ({
//   titlePrefix,
//   highlightText,
//   titleSuffix,
//   description,
//   stories,
// }) => {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <section className="w-full py-16 bg-[#faf9f6] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

//           {/* Left Column: Heading, Description, and Custom Swiper Nav Arrows */}
//           <div className="lg:col-span-4 flex flex-col justify-between pr-4">
//             <div>
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
//                 {titlePrefix}{" "}
//                 <span className="text-amber-500 decoration-amber-300 decoration-2">
//                   {highlightText}
//                 </span>{" "}
//                 {titleSuffix}
//               </h2>

//               <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
//                 {description}
//               </p>
//             </div>

//             {/* Custom Circular Arrows (stacked vertically as in the image) */}
//             <div className="flex flex-col gap-2 mt-8 w-fit">
//               <button
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 disabled={isBeginning}
//                 aria-label="Previous slide"
//                 className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-sm transition-all duration-200 ${
//                   !isBeginning
//                     ? "bg-white text-neutral-800 border-neutral-300 hover:bg-yellow-400 hover:shadow"
//                     : "bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed"
//                 }`}
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>

//               <button
//                 onClick={() => swiperRef.current?.slideNext()}
//                 disabled={isEnd}
//                 aria-label="Next slide"
//                 className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-sm transition-all duration-200 ${
//                   !isEnd
//                     ? "bg-white text-neutral-800 border-neutral-300 hover:bg-yellow-400 hover:shadow"
//                     : "bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed"
//                 }`}
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Right Column: Swiper Carousel */}
//           <div className="lg:col-span-8 overflow-hidden">
//             <Swiper
//               modules={[Navigation]}
//               onBeforeInit={(swiper) => {
//                 swiperRef.current = swiper;
//               }}
//               onSlideChange={(swiper) => {
//                 setIsBeginning(swiper.isBeginning);
//                 setIsEnd(swiper.isEnd);
//               }}
//               loop={true}
//               spaceBetween={20}
//               slidesPerView={1.2}
//               breakpoints={{
//                 640: { slidesPerView: 2.2, spaceBetween: 20 },
//                 1024: { slidesPerView: 2.5, spaceBetween: 24 },
//               }}
//               className="w-full pb-4"
//             >
//               {stories.map((story) => (
//                 <SwiperSlide key={story.id} className="h-auto">
//                   <div className="h-full flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden group hover:shadow-md transition-shadow">
//                     {/* Image */}
//                     <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
//                       <img
//                         src={story.image}
//                         alt={story.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>

//                     {/* Card Content */}
//                     <div className="p-4 flex-1 flex flex-col justify-between">
//                       <span className="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-1">
//                         {story.category}
//                       </span>
//                       <h3 className="font-bold text-neutral-900 text-base leading-snug line-clamp-2">
//                         {story.title}
//                       </h3>
//                       <p className="mt-2 text-xs text-neutral-500 line-clamp-2">
//                         {story.description}
//                       </p>
//                     </div>

//                     {/* Colored Bottom Accent Bar */}
//                     <div
//                       className="h-1.5 w-full"
//                       style={{ backgroundColor: story.bgColor || "#facc15" }}
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // export interface Story {
// //   id: number;
// //   title: string;
// //   category: string;
// //   image: string;
// //   description: string;
// //   bgColor: string;
// // }

// export interface Support {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
//   description: string;
//   bgColor: string;
// }

// interface InitiativeSliderProps {
//   titlePrefix: string;
//   highlightText: string;
//   titleSuffix: string;
//   description: string;
//   // stories: Story[];
//   supports: Support[]
// }

// export const InitiativeSlider: React.FC<InitiativeSliderProps> = ({
//   titlePrefix,
//   highlightText,
//   titleSuffix,
//   description,
//   // stories,
//    supports

// }) => {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <section className="w-full py-16 bg-[#faf9f6] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

//           {/* Left Column: Heading, Description, and Always-Active Swiper Nav Arrows */}
//           <div className="lg:col-span-4 flex flex-col justify-between pr-4">
//             <div>
//               <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-tight">
//                 {titlePrefix}{" "}
//                 <span className="text-amber-500 decoration-amber-300 decoration-2 font-[fredoka]">
//                   {highlightText}
//                 </span>{" "}
//                 {titleSuffix}
//               </h2>

//               <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
//                 {description}
//               </p>
//             </div>

//             {/* Custom Circular Arrows (Gul baggrund, hvid pil, altid aktiv) */}
//             <div className="flex flex-col gap-2.5 mt-8 w-fit">
//               <button
//                 type="button"
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 aria-label="Previous slide"
//                 className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white shadow-sm transition-colors duration-200 cursor-pointer select-none"
//               >
//                 <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
//               </button>

//               <button
//                 type="button"
//                 onClick={() => swiperRef.current?.slideNext()}
//                 aria-label="Next slide"
//                 className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white shadow-sm transition-colors duration-200 cursor-pointer select-none"
//               >
//                 <ChevronRight className="w-5 h-5 stroke-[2.5]" />
//               </button>
//             </div>
//           </div>

//           {/* Right Column: Swiper Carousel */}
//           <div className="lg:col-span-8 overflow-hidden">
//             <Swiper
//               modules={[Navigation]}
//               onBeforeInit={(swiper) => {
//                 swiperRef.current = swiper;
//               }}
//               loop={true}
//               spaceBetween={20}
//               slidesPerView={1.2}
//               breakpoints={{
//                 640: { slidesPerView: 2.2, spaceBetween: 20 },
//                 1024: { slidesPerView: 2.5, spaceBetween: 24 },
//               }}
//               className="w-full pb-4"
//             >
//               {/* {stories.map((story) => ( */}
//               {supports.map((support) => (
//                 <SwiperSlide key={support.id} className="h-auto">
//                   <div className="h-full flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden group hover:shadow-md transition-shadow">
//                     {/* Image */}
//                     <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
//                       <img
//                         src={support.image}
//                         alt={support.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>

//                     {/* Card Content */}
//                     <div className="p-4 flex-1 flex flex-col justify-between">
//                       <span className="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-1">
//                         {support.category}
//                       </span>
//                       <h3 className="font-bold text-neutral-900 text-base leading-snug line-clamp-2">
//                         {support.title}
//                       </h3>
//                       <p className="mt-2 text-xs text-neutral-500 line-clamp-2">
//                         {support.description}
//                       </p>
//                     </div>

//                     {/* Colored Bottom Accent Bar */}
//                     <div
//                       className="h-1.5 w-full"
//                       style={{ backgroundColor:support.bgColor || "#facc15" }}
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// export interface Support {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
//   description: string;
//   bgColor: string;
// }

// interface InitiativeSliderProps {
//   titlePrefix: string;
//   highlightText: string;
//   titleSuffix: string;
//   description: string;
//   supports: Support[];
// }

// export const InitiativeSlider: React.FC<InitiativeSliderProps> = ({
//   titlePrefix,
//   highlightText,
//   titleSuffix,
//   description,
//   supports,
// }) => {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <section className="w-full py-16  overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* Left Column: Heading, Description, and Navigation */}
//           <div className="lg:col-span-4 flex flex-col justify-between pr-4">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight font-[fredoka]">
//                 {titlePrefix}{" "}
//                 <span className="text-amber-400 decoration-amber-300 decoration-2 font-[fredoka]">
//                   {highlightText}
//                 </span>{" "}
//                 {titleSuffix}
//               </h2>

//               <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
//                 {description}
//               </p>
//             </div>

//             {/* Custom Circular Arrows */}
//             <div className="flex flex-col gap-2.5 mt-8 w-fit">
//               <button
//                 type="button"
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 aria-label="Previous slide"
//                 className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white shadow-sm transition-colors duration-200 cursor-pointer select-none"
//               >
//                 <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
//               </button>

//               <button
//                 type="button"
//                 onClick={() => swiperRef.current?.slideNext()}
//                 aria-label="Next slide"
//                 className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white shadow-sm transition-colors duration-200 cursor-pointer select-none"
//               >
//                 <ChevronRight className="w-5 h-5 stroke-[2.5]" />
//               </button>
//             </div>
//           </div>

//           {/* Right Column: Swiper Carousel */}
//           <div className="lg:col-span-8 overflow-hidden">
//             <Swiper
//               modules={[Navigation]}
//               onBeforeInit={(swiper) => {
//                 swiperRef.current = swiper;
//               }}
//               loop={true}
//               spaceBetween={20}
//               slidesPerView={1.2}
//               breakpoints={{
//                 640: { slidesPerView: 2.2, spaceBetween: 20 },
//                 1024: { slidesPerView: 2.5, spaceBetween: 24 },
//               }}
//               className="w-full pb-4"
//             >
//               {supports.map((support) => (
//                 <SwiperSlide key={support.id} className="h-auto">
//                   <div className="h-full flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden group hover:shadow-md transition-shadow">
//                     {/* Image */}
//                     <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
//                       <img
//                         src={support.image}
//                         alt={support.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>

//                     {/* Card Content */}
//                     <div className="p-4 flex-1 flex flex-col justify-between">
//                       <div>
//                         <span className="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-1 block">
//                           {support.category}
//                         </span>
//                         <h3 className="font-bold text-neutral-900 text-base leading-snug line-clamp-2">
//                           {support.title}
//                         </h3>
//                         <p className="mt-2 text-xs text-neutral-500 line-clamp-2">
//                           {support.description}
//                         </p>
//                       </div>

//                     </div>

//                     {/* Colored Bottom Accent Bar */}
//                     <div
//                       className="h-1.5 w-full"
//                       style={{ backgroundColor: support.bgColor || "#facc15" }}
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//              {/* Donate Now Button */}
//                       <button
//                         type="button"
//                         className="mt-4 w-full flex items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs  text-neutral-900 transition-colors hover:bg-amber-500 active:bg-amber-600 shadow-sm"
//                       >
//                         <span>Donate Now</span>
//                         <Heart className="w-3.5 h-3.5 fill-black text-black" />
//                       </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export interface Support {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  bgColor: string;
}

interface InitiativeSliderProps {
  titlePrefix: string;
  highlightText: string;
  titleSuffix: string;
  description: string;
  supports: Support[];
  onDonateClick?: () => void;
}

export const InitiativeSlider: React.FC<InitiativeSliderProps> = ({
  titlePrefix,
  highlightText,
  titleSuffix,
  description,
  supports,
  onDonateClick,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Description, and Controls Row */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight font-[fredoka]">
                {titlePrefix}{" "}
                <span className="text-amber-400 decoration-amber-300 decoration-2 font-[fredoka]">
                  {highlightText}
                </span>{" "}
                {titleSuffix}
              </h2>

              <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Navigation Arrows & Donate Button in the Same Line */}

            <div className="flex items-center justify-between gap-3 mt-8">
              {/* Donate Now Button (Left aligned) */}
              <button
                type="button"
                onClick={onDonateClick}
                className="flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 h-10 text-xs font-bold tracking-wider text-neutral-900 transition-colors hover:bg-amber-500 active:bg-amber-600 shadow-sm cursor-pointer select-none whitespace-nowrap"
              >
                <span>Donate Now</span>
                <Heart className="w-3.5 h-3.5 fill-black text-black" />
              </button>

              {/* Slider Arrow Controls (Right aligned) */}
              <div className="flex items-center gap-2.5">
                {/* Previous Arrow */}
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous slide"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white shadow-sm transition-colors duration-200 cursor-pointer select-none shrink-0"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>

                {/* Next Arrow */}
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Next slide"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white shadow-sm transition-colors duration-200 cursor-pointer select-none shrink-0"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Swiper Carousel */}
          <div className="lg:col-span-8 overflow-hidden">
            <Swiper
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2, spaceBetween: 20 },
                1024: { slidesPerView: 2.5, spaceBetween: 24 },
              }}
              className="w-full pb-4"
            >
              {supports.map((support) => (
                <SwiperSlide key={support.id} className="h-auto">
                  <div className="h-full flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden group hover:shadow-md transition-shadow">
                    {/* Image */}
                    <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                      <img
                        src={support.image}
                        alt={support.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-1 block">
                          {support.category}
                        </span>
                        <h3 className="font-bold text-neutral-900 text-base leading-snug line-clamp-2">
                          {support.title}
                        </h3>
                        <p className="mt-2 text-xs text-neutral-500 line-clamp-2">
                          {support.description}
                        </p>
                      </div>
                    </div>

                    {/* Colored Bottom Accent Bar (Hover: Left to Right) */}
                    <div className="h-1.5 w-full bg-neutral-100 overflow-hidden">
                      <div
                        className="h-full w-0 group-hover:w-full transition-all duration-500 ease-out"
                        style={{
                          backgroundColor: support.bgColor || "#facc15",
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
