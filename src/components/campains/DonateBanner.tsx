import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const DonateBanner = () => {
  return (
    <section className="bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-200 via-amber-100 to-white p-6 sm:p-8 md:flex-row md:items-center shadow-sm"> */}
       <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-yellow-500/40 bg-linear-to-br from-[#171717] via-[#26220f] to-[#443500] p-6 shadow-[0_8px_30px_-8px_rgba(234,179,8,0.25)] sm:p-8 md:flex-row md:items-center">
          {/* Left Content */}
          <div className="flex items-start gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                Make an Impact
              </p>

              <h2 className="mt-1.5 font-[Fredoka] text-xl font-bold text-white sm:text-2xl md:text-3xl">
                Your Donation,{" "}
                <span className="text-amber-600">Someone’s Smile.</span>
              </h2>

              <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/60 sm:text-sm">
                Every contribution provides nourishing meals, essential education kits,
                and safe crisis shelters for vulnerable women and children in need.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <Link
            to="/donate"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-neutral-950 shadow-sm transition hover:bg-amber-300 active:scale-95"
          >
            <span>Donate Now</span>
            <Heart className="h-4 w-4 fill-black text-black" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateBanner;