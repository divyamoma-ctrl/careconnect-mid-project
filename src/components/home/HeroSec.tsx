import { Heart} from "lucide-react";
import heroVideo from "../../assets/videos/heroVideo.mp4";
import { NavLink } from "react-router-dom";

const HeroSec = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover absolute inset-0"
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* HERO CONTENT */}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl text-white">
          
            <h1 className=" font-[Fredoka] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Every Woman.
              <br />
              Every Child.
              <br />
              <span className="text-yellow-400 flex ">
                Every Chance to Shine.
                {/* <Sun color="#d4bd25" size={74} /> */}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
              Together, we create safer, stronger and brighter futures.
            </p>
          </div>
             <div className="mt-8 flex items-center gap-4">
              <NavLink
                to="/emergency-help"
                className="rounded-full bg-yellow-400 px-6 py-3 text-xs font-semibold text-gray-900 transition hover:bg-yellow-300 md:text-base"
              >
                Get Help Now
              </NavLink>

              <NavLink
                to="/donate"
                className="group rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900 flex items-center gap-1 text-xs md:text-base"
              >
                <Heart strokeWidth={1.25} size={17} fill="white" className=" text-[#fffce5] transition-colors group-hover:text-black" />
                Yes! I want to help!
              </NavLink>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
