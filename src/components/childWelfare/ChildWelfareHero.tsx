import childrenBanner_bg from "../../assets/images/whatWeDo/childrenSupport-banner.webp";

const ChildWelfareHero = () => {
  return (
    <div>
    <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl font-[Fredoka] text-black">
          Every Child Deserves
          <br></br>
          <span className="text-yellow-300">A Happy Childhood</span>
        </h1>
        <p className="mt-4 text-black/80 font-medium sm:text-md ">
          Every child has an inherent right to safety, health, quality
          education, and joy. At CareConnect, we work to protect these
          rights—removing barriers so every child can learn without
          interruption, grow up free from harm, and experience the happy,
          fulfilling childhood they deserve.
        </p>
      </div>
    <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={childrenBanner_bg}
        alt="Volunteer Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* Content */}
      {/* <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl font-[Fredoka]">
          Every Child Deserves
          <br></br>
          <span className="text-yellow-300">A Happy Childhood</span>
        </h1>
        <p className="mt-4 text-white/80 font-medium sm:text-md ">
          Every child has an inherent right to safety, health, quality
          education, and joy. At CareConnect, we work to protect these
          rights—removing barriers so every child can learn without
          interruption, grow up free from harm, and experience the happy,
          fulfilling childhood they deserve.
        </p>
      </div> */}
    </section>
    </div>
  );
};

export default ChildWelfareHero;
