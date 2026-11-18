
// import {
//   Heart,
//   ClipboardCheck,
//   FileText,
//   ShieldCheck,
//   ExternalLink,
//   ArrowRight,
// } from "lucide-react";

// const AdoptionInfo = () => {
//   return (
//     <section className="bg-amber-50 px-4 py-16 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
//             <Heart size={17} />
//             Every Child Deserves a Family
//           </span>

//           <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
//             Adoption Information
//           </h2>

//           <p className="mt-4 text-base leading-7 text-gray-600">
//             Learn about the adoption process, important requirements,
//             and official resources to help you take an informed next step.
//           </p>
//         </div>

//         {/* Information Cards */}
//         <div className="grid gap-6 md:grid-cols-3">
//           <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
//               <ClipboardCheck size={25} />
//             </div>

//             <h3 className="mt-5 text-xl font-bold text-gray-900">
//               Adoption Process
//             </h3>

//             <p className="mt-3 text-sm leading-7 text-gray-600">
//               Adoption involves official registration, assessment,
//               referral and matching, followed by the required legal
//               procedure. The process varies by adoption type.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
//               <FileText size={25} />
//             </div>

//             <h3 className="mt-5 text-xl font-bold text-gray-900">
//               Documents & Eligibility
//             </h3>

//             <p className="mt-3 text-sm leading-7 text-gray-600">
//               Applicants may need identity and address proof, photographs,
//               financial information, medical certificates and other
//               documents specified by the official guidelines.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
//               <ShieldCheck size={25} />
//             </div>

//             <h3 className="mt-5 text-xl font-bold text-gray-900">
//               Child Safety & Rights
//             </h3>

//             <p className="mt-3 text-sm leading-7 text-gray-600">
//               Adoption must follow the applicable legal process.
//               A child's safety, privacy, identity and best interests
//               should remain the priority throughout.
//             </p>
//           </div>
//         </div>

//         {/* Official Resource */}
//         <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gray-900 p-6 sm:p-8 md:flex-row md:items-center">
//           <div className="flex gap-4">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
//               <ShieldCheck size={26} />
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-white">
//                 Start with Official Guidance
//               </h3>

//               <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
//                 Visit the Central Adoption Resource Authority (CARA)
//                 website for official adoption information, eligibility
//                 rules and registration guidance.
//               </p>
//             </div>
//           </div>

//           <a
//             href="https://cara.wcd.gov.in/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-300"
//           >
//             Visit CARA Website
//             <ExternalLink size={17} />
//             <ArrowRight size={17} />
//           </a>
//         </div>

//         <p className="mt-5 text-center text-xs leading-5 text-gray-500">
//           CareConnect provides general information. Adoption eligibility,
//           registration and legal procedures must be confirmed through
//           the official authorities.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AdoptionInfo;





import { ExternalLink} from "lucide-react";

const AdoptionInfo = () => {
  return (
    <section className="bg-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-black p-6 sm:p-8 md:flex-row md:items-center"> */}

          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-linear-to-br from-[#1c1912] via-[#12110c] to-yellow-800 p-6 sm:p-8 md:flex-row md:items-center border border-yellow-500/">
          {/* Left Content */}
          <div className="flex items-start gap-4">
            {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
              <HeartHandshake size={26} />
            </div> */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
               Want to Adopt ?
              </p>

              <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Every Child Deserves a Loving Home.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                Learn about the adoption process and take your first step
                towards building a family through India's official adoption
                authority, CARA.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <a
            href="https://cara.wcd.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-300"
          >
            Official Website
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdoptionInfo;
