import aboutBg from '../../assets/images/aboutUs/aboutBg.png';

const AboutHero = () => {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={aboutBg}
        alt="About CareConnect Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl font-[Fredoka]">
          Empowering <span className='text-yellow-400'>Women & Children</span>
        </h1>
        <p className="mt-4 text-white/80 font-medium sm:text-xl">
          Building stronger communities together.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;