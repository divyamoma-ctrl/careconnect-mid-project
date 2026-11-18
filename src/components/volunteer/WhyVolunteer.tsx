import React from "react";
import { Heart, CheckCircle2} from "lucide-react";
import whyVolunteerImage from "../../assets/images/volunteer/whyVolunteer.avif";

interface WhyVolunteerProps {
  imageSrc?: string;
  onJoinClick?: () => void;
}

export const WhyVolunteer: React.FC<WhyVolunteerProps> = ({
  imageSrc = whyVolunteerImage,
  onJoinClick,
}) => {
  const points = [
    "Your work, whether on the field or behind the scenes, will help us make India a better place for our children.",
    "Your volunteering experience will help you develop invaluable professional skills and build your leadership capabilities.",
    "No matter who you are or what you do, we have a wide range of volunteering options for you.",
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag */}
            <span className="w-fit inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Make An Impact
            </span>

            {/* Heading */}
            <h2 className="mt-4 font-[Fredoka] text-2xl sm:text-3xl lg:text-3xl font-extrabold text-neutral-900 leading-tight">
              Why Volunteer With{" "}
              <span className="bg-linear-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                CARECONNECT?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Volunteering is such a simple, yet rewarding, way to support a
              cause you care about. While there are a million reasons why you
              should volunteer with CRY, here are our top 3 ones!
            </p>

            {/* Bullet Points */}
            <ul className="mt-6 space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <CheckCircle2 className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm leading-relaxed text-neutral-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <div className="mt-8">
              <button
                type="button"
                onClick={onJoinClick}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:bg-amber-500 active:bg-amber-600 shadow-sm cursor-pointer select-none"
              >
                <span>Join Our Movement</span>
                <Heart className="w-4 h-4 fill-black text-black" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual (Image / Video Wrapper) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-amber-400 to-amber-200 opacity-30 blur-xl" />

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-lg aspect-4/3">
                <img
                  src={imageSrc}
                  alt="Volunteers making an impact"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Floating Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto rounded-2xl bg-white/90 backdrop-blur-md p-4 border border-neutral-100 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-neutral-900 font-black font-[Fredoka] text-lg shadow-xs">
                      3+
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-900">
                        Decades of Change
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        Empowering children across India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVolunteer;
