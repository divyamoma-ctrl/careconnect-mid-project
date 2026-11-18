



import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Heart,
  HeartHandshake,
  Mail,
  SquareMenu,
  X,
} from "lucide-react";
import AuthDialog from "../../auth/AuthDialog";

interface MenuItem {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/aboutUs",
  },
  {
    label: "Campaigns",
    path: "/campaigns",
  },
  {
    label: "Volunteer",
    path: "/volunteer",
  },
];

const whatWeDoItems: MenuItem[] = [
  {
    label: "Women Support",
    path: "/women-support",
  },
  {
    label: "Child Welfare",
    path: "/child-welfare",
  },
  {
    label: "Our Work",
    path: "/our-work",
  },
];

const MainHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
   const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();

  const closeCanvas = () => {
    setIsCanvasOpen(false);
    setOpenMenu(false);
  };

  const handleAuthOpen = () => {
  setIsCanvasOpen(false);
  setOpenMenu(false);
  setAuthOpen(true);
};

  // Check if any "What We Do" sub-route is currently active
  const isWhatWeDoActive = whatWeDoItems.some(
    (item) => location.pathname === item.path
  );

  return (
    <>
      {/* ================= MAIN HEADER ================= */}

      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* ================= LEFT SIDE ================= */}

          <div className="flex items-center gap-3">

            {/* MOBILE HAMBURGER */}

            <button
              onClick={() => setIsCanvasOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <SquareMenu size={25} strokeWidth={1.5} />
            </button>

            {/* LOGO */}

            <NavLink to="/">
              <div className="flex items-center gap-2.5">
                <div className="rounded-xl bg-yellow-400 p-2 text-slate-900 shadow-sm">
                  <HeartHandshake className="h-6 w-6" />
                </div>

                <div className="flex flex-col leading-none font-[Fredoka]">
                  <span className="text-xl font-black tracking-tight text-slate-900">
                    Care<span className="text-yellow-500">Connect</span>
                  </span>

                  <span className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-800">
                    Support Platform
                  </span>
                </div>
              </div>
            </NavLink>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav className="hidden items-center gap-7 lg:flex">

            {/* Home + About Us */}

            {menuItems.slice(0, 2).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-black"
                    : "text-black/70 hover:text-black transition-colors"
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* ================= WHAT WE DO ================= */}

            <div className="relative">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className={`flex items-center gap-1 transition-colors duration-200 ${
                  isWhatWeDoActive
                    ? "font-bold text-black"
                    : "text-black/70 hover:text-black"
                }`}
              >
                <span>What We Do</span>

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu && (
                <div className="absolute left-0 top-full z-50 mt-3 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                  {whatWeDoItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpenMenu(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 ${
                          isActive
                            ? "bg-yellow-200 font-bold text-black"
                            : "text-black hover:bg-yellow-100"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Campaigns + Volunteer */}

            {menuItems.slice(2).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-black"
                    : "text-black/70 hover:text-black transition-colors"
                }
              >
                {item.label}
              </NavLink>
            ))}
<button
  onClick={handleAuthOpen}
  className="rounded-full border border-yellow-400 px-5 py-2 font-semibold text-gray-800 transition hover:bg-yellow-50"
>
  Login / Register
</button>
            {/* ================= DONATE ================= */}

            <NavLink
              to="/donateNow"
              className="flex items-center gap-1.5 rounded-full bg-yellow-400 px-5 py-2 font-semibold text-gray-800 transition hover:bg-yellow-500"
            >
              <Heart
                size={14}
                color="#000000"
                fill="black"
              />

              Donate Now
            </NavLink>
          </nav>

          {/* ================= MOBILE DONATE ================= */}

          <NavLink
            to="/donate"
            className="flex items-center gap-1.5 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-800 md:hidden"
          >
            <Heart
              size={13}
              color="#000000"
              fill="black"
            />

            Donate
          </NavLink>
        </div>
      </div>

      {/* ================= DARK OVERLAY ================= */}

      {isCanvasOpen && (
        <div
          onClick={closeCanvas}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        ></div>
      )}

      {/* ================= MOBILE OFFCANVAS (BLACK THEME) ================= */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col justify-between bg-black p-5 text-xs text-white shadow-xl transition-transform duration-300 md:hidden ${
          isCanvasOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div>

          {/* ================= SIDEBAR HEADER ================= */}

          <div className="flex items-center justify-between border-b border-zinc-800 pb-5">

            {/* Logo */}

            <NavLink
              to="/"
              onClick={closeCanvas}
            >
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-yellow-400 p-1.5">
                  <HeartHandshake className="h-5 w-5 text-slate-900" />
                </div>

                <span className="text-lg font-black text-white">
                  Care<span className="text-yellow-500">Connect</span>
                </span>
              </div>
            </NavLink>

            {/* Close Button */}

            <button
              onClick={closeCanvas}
              aria-label="Close menu"
              className="text-white hover:text-gray-300"
            >
              <X
                size={24}
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* ================= TOPBAR ITEMS ================= */}

          <div className="border-b border-zinc-800 py-5 text-xs">

            {/* Get Help */}

            <NavLink
              to="/help"
              onClick={closeCanvas}
              className="mb-3 flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2.5 text-xs font-semibold text-black hover:bg-yellow-500 transition"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600"></span>
              </span>

              Get Help Now
            </NavLink>

            {/* Contact */}

            <NavLink
              to="/contact"
              onClick={closeCanvas}
              className="flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-zinc-900 rounded-lg transition"
            >
              <Mail size={16} />

              Contact Us
            </NavLink>

            {/* Login */}

          <button
  onClick={handleAuthOpen}
  className="block w-full rounded-lg px-3 py-2 text-left text-xs text-white transition hover:bg-zinc-900"
>
  Login / Register
</button>
          </div>

          {/* ================= MOBILE NAVIGATION ================= */}

          <nav className="flex flex-col gap-1 py-5 text-xs">

            {/* Home + About Us */}

            {menuItems.slice(0, 2).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeCanvas}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-xs ${
                    isActive
                      ? "bg-zinc-800 font-semibold text-yellow-400"
                      : "text-white hover:bg-zinc-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* ================= WHAT WE DO ================= */}

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs transition ${
                isWhatWeDoActive
                  ? "bg-zinc-800 font-semibold text-yellow-400"
                  : "text-white hover:bg-zinc-900"
              }`}
            >
              <span>What We Do</span>

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu && (
              <div className="ml-3 flex flex-col border-l border-zinc-800 pl-3">
                {whatWeDoItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeCanvas}
                    className={({ isActive }) =>
                      `px-3 py-2 text-xs transition ${
                        isActive ? "font-bold text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}

            {/* Campaigns + Volunteer */}

            {menuItems.slice(2).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeCanvas}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-xs ${
                    isActive
                      ? "bg-zinc-800 font-semibold text-yellow-400"
                      : "text-white hover:bg-zinc-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* ================= MOBILE DONATE ================= */}

        <NavLink
          to="/donate"
          onClick={closeCanvas}
          className="flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-3 py-2 text-xs font-semibold text-black transition hover:bg-yellow-500"
        >
          <Heart
            size={16}
            color="#000000"
            fill="black"
          />

          Donate Now
        </NavLink>
      </aside>

      <AuthDialog
  open={authOpen}
  onClose={() => setAuthOpen(false)}
/>
    </>
  );
};

export default MainHeader;