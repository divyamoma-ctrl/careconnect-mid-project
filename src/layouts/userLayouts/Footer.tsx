
// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer;



import { NavLink } from "react-router-dom";
import {
  Heart,
  HeartHandshake,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  // Instagram,
  // Facebook,
  // Twitter,
  // Linkedin,
} from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/aboutUs" },
  { label: "Campaigns", path: "/campaigns" },
  { label: "Volunteer", path: "/volunteer" },
  { label: "Contact Us", path: "/contact" },
];

const focusAreas = [
  { label: "Women Support", path: "/women-support" },
  { label: "Child Welfare", path: "/child-welfare" },
  { label: "Our Work", path: "/our-work" },
  { label: "Get Emergency Help", path: "/help" },
];

// const socialLinks = [
//   { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
//   { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
//   { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
//   { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
// ];

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* COLUMN 1: BRAND & MISSION */}
          <div className="flex flex-col gap-4">
            <NavLink to="/" className="inline-block">
              <div className="flex items-center gap-2.5">
                <div className="rounded-xl bg-yellow-400 p-2 text-slate-900 shadow-sm">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div className="flex flex-col leading-none font-['Fredoka']">
                  <span className="text-xl font-black tracking-tight text-white">
                    Care<span className="text-yellow-400">Connect</span>
                  </span>
                  <span className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Support Platform
                  </span>
                </div>
              </div>
            </NavLink>

            <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
              Dedicated to empowering women and protecting children by creating safer, healthier, and self-sustaining futures across communities.
            </p>

            {/* Social Icons */}
            {/* <div className="mt-2 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div> */}
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="font-['Fredoka'] text-base font-bold text-white tracking-wide uppercase">
              Quick Links
            </h3>
            <div className="mt-2 h-0.5 w-8 bg-yellow-400 rounded-full" />

            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1.5 transition ${
                        isActive
                          ? "font-semibold text-yellow-400"
                          : "text-zinc-400 hover:text-yellow-400"
                      }`
                    }
                  >
                    <ArrowRight className="h-3 w-3 text-yellow-400" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: WHAT WE DO / FOCUS AREAS */}
          <div>
            <h3 className="font-['Fredoka'] text-base font-bold text-white tracking-wide uppercase">
              What We Do
            </h3>
            <div className="mt-2 h-0.5 w-8 bg-yellow-400 rounded-full" />

            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm">
              {focusAreas.map((area) => (
                <li key={area.path}>
                  <NavLink
                    to={area.path}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1.5 transition ${
                        isActive
                          ? "font-semibold text-yellow-400"
                          : "text-zinc-400 hover:text-yellow-400"
                      }`
                    }
                  >
                    <ArrowRight className="h-3 w-3 text-yellow-400" />
                    {area.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT & DONATE */}
          <div className="flex flex-col">
            <h3 className="font-['Fredoka'] text-base font-bold text-white tracking-wide uppercase">
              Get in Touch
            </h3>
            <div className="mt-2 h-0.5 w-8 bg-yellow-400 rounded-full" />

            <ul className="mt-5 space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-yellow-400 mt-0.5" />
                <span>123 Hope Street, Community Center, City, Country</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-yellow-400" />
                <a href="mailto:support@careconnect.org" className="hover:text-yellow-400 transition">
                  support@careconnect.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-yellow-400" />
                <a href="tel:+1234567890" className="hover:text-yellow-400 transition">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>

            {/* Donate CTA Button */}
            <div className="mt-6 pt-2">
              <NavLink
                to="/donate"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-bold text-black shadow-md transition hover:bg-yellow-300"
              >
                <Heart size={14} fill="black" color="black" />
                Donate Now
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-zinc-900 bg-zinc-950 py-5 text-center text-xs text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} CareConnect. All rights reserved.</p>

          <div className="flex items-center gap-6 text-zinc-400">
            <NavLink to="/privacy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-yellow-400 transition">
              Terms of Service
            </NavLink>
            <NavLink to="/help" className="hover:text-yellow-400 transition">
              Get Help
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;