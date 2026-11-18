import volunteerBg from "../../assets/images/volunteer/volunteer-bg.jpg"

const CampaignHero = () => {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={volunteerBg}
        alt="Volunteer Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl font-[Fredoka]">
         Active Campaigns — 
         
          <span className="text-yellow-300">Transparent, Direct Impact.</span>
        </h1>
        <p className="mt-4 text-white/80 font-medium sm:text-md ">
     Every rupee is traced and published with itemized bills. Select a vetted mission below or power multiple programs through the instant donor kiosk.
        </p>
      </div>
    </section>
  )
}

export default CampaignHero;