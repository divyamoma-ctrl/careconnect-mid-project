
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { Astroid } from 'lucide-react';

const partners = [
  "UNICEF India",
  "CRY Foundation",
  "Save The Children",
  "Goonj NGO",
  "Plan International",
  "Smile Foundation",
  "Oxfam India",
];

const PartnerSwiper = () => {
  return (
    <div className="w-full bg-black py-5 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="partner-swiper"
        >
          {partners.map((partner, idx) => (
            <SwiperSlide key={idx} className="flex justify-center items-center">
              <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap">
              <Astroid color="#FFFF00" size={18} />
                <span>{partner}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSwiper;