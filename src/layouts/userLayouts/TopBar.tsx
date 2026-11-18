



// import { Mail } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const TopBar = () => {
//   return (
//     <div className="hidden bg-black text-white md:block">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-sm">
        
//         {/* Left Side */}

//         <div className="flex items-center">
//           <NavLink
//             to="/emergency-help"
//             className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-1.5 font-semibold text-black transition hover:bg-yellow-300"
//           >
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>

//               <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600"></span>
//             </span>

//             Get Help Now
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className="ml-6 flex items-center gap-1.5 hover:text-blue-400"
//           >
//             Contact Us
//             <Mail size={15} strokeWidth={1.5} />
//           </NavLink>
//         </div>

//         {/* Right Side */}

//         <div className="flex items-center gap-3">
//           {/* Login */}

//           <NavLink
//             to="/login"
//             className="rounded-full border-2 border-white/30 px-5 py-1 font-inter text-sm font-semibold text-white transition-all duration-200 hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-400"
//           >
//             Login
//           </NavLink>

//           {/* Register */}

//           <NavLink
//             to="/register"
//             className="rounded-full border-2 border-transparent px-5 py-1 font-inter text-sm font-bold text-yellow-400 transition-all duration-200 hover:border-yellow-400 hover:text-yellow-300"
//           >
//             Register
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;



import { useState } from "react";
import { Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import AuthDialog from "../../auth/AuthDialog";


const TopBar = () => {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <div className="hidden bg-black text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-sm">

          {/* Left Side */}

          <div className="flex items-center">
            <NavLink
              to="/emergency-help"
              className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-1.5 font-semibold text-black transition hover:bg-yellow-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600"></span>
              </span>

              Get Help Now
            </NavLink>

            <NavLink
              to="/contact"
              className="ml-6 flex items-center gap-1.5 hover:text-blue-400"
            >
              Contact Us
              <Mail size={15} strokeWidth={1.5} />
            </NavLink>
          </div>

          {/* Right Side *---login-register */}
{/* 
          <div className="flex items-center gap-3">

        
            <button
              onClick={() => setAuthOpen(true)}
              className="rounded-full border-2 border-white/30 px-5 py-1 font-inter text-sm font-semibold text-white transition-all duration-200 hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-400"
            >
              Login
            </button>

       

            <button
              onClick={() => setAuthOpen(true)}
              className="rounded-full border-2 border-transparent px-5 py-1 font-inter text-sm font-bold text-yellow-400 transition-all duration-200 hover:border-yellow-400 hover:text-yellow-300"
            >
              Register
            </button>

          </div> */}
        </div>
      </div>

      {/* Authentication Dialog */}

      <AuthDialog
        open={authOpen}
        onClose={() => setAuthOpen(false)}
      />
    </>
  );
};

export default TopBar;
