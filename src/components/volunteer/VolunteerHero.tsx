




import { ArrowRight, BriefcaseBusiness, HeartHandshake } from "lucide-react";
// import volunteerBg from "../../assets/images/volunteer/volunteer-bg.jpg";
import volunteerBg from "../../assets/images/volunteer/vol-bg2.jpg";


const VolunteerHero = () => {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={volunteerBg}
        alt="Volunteer Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center text-white">
        <h1 className="font-[Fredoka] text-3xl font-extrabold sm:text-4xl">
          Be the Hope.
          <br />
          <span className="text-yellow-300">Shape a Life.</span>
        </h1>

        <p className="mt-4 font-medium text-white/80 sm:text-md">
          Whether dedicating your weekend hours as a compassionate mentor or
          stepping into a full-time purpose-driven career with CareConnect,
          every contribution shelters, heals, and reclaims a future.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#volunteer-form"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            <HeartHandshake size={17} />
            Become a Volunteer
            <ArrowRight size={15} />
          </a>

          <a
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-yellow-300 hover:bg-white/10"
          >
            <BriefcaseBusiness size={17} />
            Explore Careers
          </a>
        </div>
      </div>
    </section>
  );
};

export default VolunteerHero;

