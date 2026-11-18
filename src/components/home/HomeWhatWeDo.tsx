

import { useNavigate } from "react-router-dom";

const HomeWhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#FFFDF5] px-4 py-16 sm:px-6 md:px-12 lg:py-20">
      {/* Decorative Yellow Shapes */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            What We Do
          </span>

          {/* <h2 className="mt-5 font-[fredoka] text-2xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
            Empowering Communities,
            <br />
            <span className="relative inline-block text-amber-600">
              Transforming Lives
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-yellow-300/80" />
            </span>
          </h2> */}
          <h2 className="mt-5 font-[fredoka] text-2xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
            Helping Hands,{" "}
            <span className="relative inline-block text-yellow-400">
              Brighter Futures
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Every woman deserves support. Every child deserves a future. We
            bring people and resources together to turn compassion into
            meaningful action.
          </p>
        </div>

        {/* Support Areas */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7">
          {/* Child Welfare */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-950 p-7 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-900/10 sm:p-9">
            {/* Decorative Number */}
            <span className="pointer-events-none absolute -right-1 -top-10 select-none font-[fredoka] text-[150px] font-black leading-none text-white/[0.045]">
              01
            </span>

            <div className="relative z-10">
              <span className="inline-block rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-950">
                CHILD WELFARE
              </span>

              <h3 className="mt-6 max-w-sm font-[fredoka] text-2xl font-bold leading-snug text-white">
                A Brighter Beginning for Every Child
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-300 sm:text-base">
                Supporting children's access to education, healthcare,
                nutrition, protection, and opportunities to grow with dignity.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Education", "Healthcare", "Protection"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate("/children-welfare")}
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-neutral-950 transition duration-300 hover:bg-yellow-300"
              >
                Explore Child Welfare
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Women Support */}
          <div className="group relative overflow-hidden rounded-2xl border border-amber-200 bg-linear-to-br from-amber-100 via-yellow-50 to-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 sm:p-9">
            {/* Decorative Number */}
            <span className="pointer-events-none absolute -right-1 -top-10 select-none font-[fredoka] text-[150px] font-black leading-none text-amber-900/[0.055]">
              02
            </span>

            <div className="relative z-10">
              <span className="inline-block rounded-md bg-neutral-950 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-400">
                WOMEN SUPPORT
              </span>

              <h3 className="mt-6 max-w-sm font-[fredoka] text-2xl font-bold leading-snug text-neutral-950">
                Helping Women Build a Stronger Tomorrow
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                Connecting women with safety resources, legal guidance,
                counselling, skill development, and opportunities for greater
                independence.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Safety", "Legal Guidance", "Skills"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-300/70 bg-white/70 px-3 py-1.5 text-xs font-semibold text-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate("/women-support")}
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-neutral-950 px-5 py-3 text-sm font-bold text-yellow-400 transition duration-300 hover:bg-amber-500 hover:text-neutral-950"
              >
                Explore Women Support
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Compact Emergency Help Strip */}
        <div className="mt-7 flex flex-col gap-4 rounded-xl border border-red-200/80 bg-linear-to-r from-red-50 via-white to-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-red-500 ring-4 ring-red-100" />

            <div>
              <h3 className="text-sm font-extrabold text-neutral-950 sm:text-base">
                Need Help Right Now?
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Find nearby hospitals, police stations, blood banks, and
                emergency resources.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/emergency-help")}
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 sm:self-auto"
          >
            Get Emergency Help
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Closing Line */}
        <p className="mt-8 text-center text-sm font-semibold text-neutral-600">
          Together, we can make every connection count.
        </p>
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
