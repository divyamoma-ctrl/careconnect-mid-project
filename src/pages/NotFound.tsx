


import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffdf7] text-[#171d26] flex flex-col">
      {/* Main Content */}
      <main className="relative flex flex-1 items-center justify-center px-5 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            <div className="mb-4 flex items-center justify-center gap-1 lg:justify-start">
              <span className="text-7xl font-black tracking-tight sm:text-9xl">
                4
              </span>

              <span className="relative flex items-center justify-center text-7xl font-black text-amber-400 sm:text-9xl">
                0
                <Heart
                  className="absolute h-8 w-8 fill-amber-400 text-amber-400 sm:h-11 sm:w-11"
                  strokeWidth={1.5}
                />
              </span>

              <span className="text-7xl font-black tracking-tight sm:text-9xl">
                4
              </span>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Lost your way?
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Oops! Page
              <span className="block">Not Found</span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              The page you are looking for might have been moved,
              deleted, or never existed. Don't worry — we're here
              to help you find your way back.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-bold text-slate-950 shadow-md shadow-amber-200/60 transition hover:-translate-y-1 hover:bg-amber-300"
              >
                <Home size={20} />
                Go Back Home
                <ArrowRight size={19} />
              </Link>

              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-800 px-7 py-4 font-bold transition hover:bg-slate-900 hover:text-white"
              >
                <ArrowLeft size={19} />
                Previous Page
              </button>
            </div>

            <p className="mt-7 text-sm text-slate-500">
              Need help?{" "}
              <Link
                to="/women-support"
                className="font-bold text-blue-700 underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-blue-900"
              >
                Explore our support services
              </Link>
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-amber-100/70 blur-3xl" />

            <div className="relative flex min-h-[320px] flex-col items-center justify-center rounded-[2.5rem] border border-amber-100 bg-linear-to-br from-amber-50 via-white to-yellow-100 p-8 sm:min-h-[430px]">
              {/* Decorative Shapes */}
              <div className="absolute right-10 top-8 h-16 w-16 rounded-full border-[10px] border-amber-200/60" />

              <div className="absolute left-10 top-16 h-4 w-4 rounded-full bg-blue-200" />

              {/* Main Illustration */}
              <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-amber-200 sm:h-44 sm:w-44">
                <Heart
                  className="h-20 w-20 fill-amber-400 text-slate-900 sm:h-24 sm:w-24"
                  strokeWidth={1.5}
                />
              </div>

              <div className="relative z-10 mt-7 max-w-xs rounded-2xl border border-amber-200 bg-white/90 px-6 py-4 text-center shadow-lg shadow-amber-900/5">
                <p className="text-xl font-extrabold">
                  Better days are ahead!
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Every woman and every child deserves care,
                  hope, and a brighter tomorrow.
                </p>
              </div>

              <span className="absolute bottom-7 left-8 h-3 w-3 rounded-full bg-amber-400" />
              <span className="absolute bottom-14 right-10 h-5 w-5 rounded-full bg-blue-200" />
            </div>
          </div>
        </div>
      </main>

      {/* Yellow Footer */}
      <footer className="relative bg-linear-to-r from-amber-300 via-yellow-300 to-amber-300 px-5 py-7 text-center">
        <p className="font-semibold text-slate-900 sm:text-lg">
          Together, we can create a safer, kinder, brighter future.
        </p>
        <p className="mt-2 text-sm font-medium text-slate-800">
          CareConnect — Every Woman. Every Child. Every Chance to Shine.
        </p>
      </footer>
    </div>
  );
};

export default NotFound;
