import WomenSupport_bg from "../../assets/images/whatWeDo/womenSupport-banner.jpg";

const WomenSupportHero = () => {
  return (
    <div>
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-10 text-center text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl font-[Fredoka] text-black">
          Every Woman Deserves a Chance to Thrive.
          <br></br>
          <span className="text-yellow-300">a Chance to Thrive.</span>
        </h1>
        <p className="mt-4 text-black/60 font-medium sm:text-md ">
          Empowerment begins with equal access to healthcare, safety, and
          learning. We equip women with the skills, digital literacy, and health
          resources they need to gain financial independence, uplift their
          families, and lead change in their communities.
        </p>
      </div>
      <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={WomenSupport_bg}
          alt="Volunteer Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}

        {/* Content */}
        {/* <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl font-[Fredoka]">
          Be the Hope.
          <br></br>
          <span className="text-yellow-300">Shape a Life.</span>
        </h1>
        <p className="mt-4 text-white/80 font-medium sm:text-md ">
     Whether dedicating your weekend hours as a compassionate mentor or stepping into a full-time purpose-driven career with CareConnect, every contribution shelters, heals, and reclaims a future.
        </p>
      </div> */}
      </section>
    </div>
  );
};

export default WomenSupportHero;
