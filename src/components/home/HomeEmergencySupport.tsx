




import {
  // Siren,
  MapPinned,
  Hospital,
  Droplet,
  Ambulance,
  // HeartHandshake,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";



const HomeEmergencySupport = () => {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
         We are here for you
          </span>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl font-[fredoka]">
            Need Help?{" "}
            <span className="text-[#FACC15]">You Are Not Alone.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-gray-300 sm:text-sm">
            Whether you need urgent assistance or guidance for yourself or
            your child, CareConnect can help you find the right next step.
          </p>
        </div>

        {/* Two Main Cards */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Emergency Help Card */}
          <div className="relative overflow-hidden rounded-2xl border border-red-400/20 bg-linear-to-br from-red-950 via-[#271923] to-[#171923] p-5 sm:p-6">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-2xl" />

            <div className="relative">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-300">
                <Siren size={22} />
              </div> */}

              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-red-300">
                Urgent Assistance
              </p>

              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Emergency Help
              </h3>

              <p className="mt-1.5 text-xs leading-relaxed text-gray-300 sm:text-sm">
                Find nearby emergency services and essential contacts when
                you or someone else needs urgent assistance.
              </p>

              {/* Service Categories */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 sm:p-2.5">
                  <Hospital size={17} className="shrink-0 text-red-300" />
                  <span className="text-xs text-gray-200">Hospitals</span>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 sm:p-2.5">
                  <ShieldCheck size={17} className="shrink-0 text-red-300" />
                  <span className="text-xs text-gray-200">Police Stations</span>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 sm:p-2.5">
                  <Droplet size={17} className="shrink-0 text-red-300" />
                  <span className="text-xs text-gray-200">Blood Banks</span>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 sm:p-2.5">
                  <Ambulance size={17} className="shrink-0 text-red-300" />
                  <span className="text-xs text-gray-200">Ambulance</span>
                </div>
              </div>

              <Link
                to="/emergency-help"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:w-auto"
              >
                Find Emergency Services
                <MapPinned size={16} />
                <ArrowRight size={16} />
              </Link>

              <p className="mt-3 text-[11px] leading-4 text-gray-400">
                In immediate danger in India, call 112. Do not wait for a
                website or online form to respond.
              </p>
            </div>
          </div>

          {/* Request Support Card */}
          <div className="relative overflow-hidden rounded-2xl border border-yellow-300/20 bg-linear-to-br from-[#252719] via-[#20231E] to-[#171923] p-5 sm:p-6">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-400/10 blur-2xl" />

            <div className="relative">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/15 text-[#FACC15]">
                <HeartHandshake size={22} />
              </div> */}

              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#FACC15]">
                Guidance & Support
              </p>

              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Request Support
              </h3>

              <p className="mt-1.5 text-xs leading-relaxed text-gray-300 sm:text-sm">
                Every situation is different. Choose the support area that
                best matches your needs and find the appropriate resources.
              </p>

              {/* Support Options */}
              <div className="mt-4 space-y-2">
                <Link
                  to="/women-support"
                  className="group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-yellow-300/40 hover:bg-white/10"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Women Support
                    </h4>
                    <p className="text-xs text-gray-400">
                      Guidance for women facing difficult situations
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="shrink-0 text-[#FACC15] transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/child-welfare"
                  className="group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-yellow-300/40 hover:bg-white/10"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Child Welfare
                    </h4>
                    <p className="text-xs text-gray-400">
                      Support related to children's safety and education
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="shrink-0 text-[#FACC15] transition group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <p className="mt-4 text-[11px] leading-4 text-gray-400">
                Please use emergency services directly if someone is in
                immediate danger.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <p className="mt-5 text-center text-xs text-gray-400">
          Every person deserves safety, dignity, and a chance to thrive.
        </p>
      </div>
    </section>
  );
};

export default HomeEmergencySupport;










