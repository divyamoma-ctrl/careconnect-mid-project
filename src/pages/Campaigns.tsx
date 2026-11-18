import CampaignHero from "../components/campains/CampaignHero"
import CampaignList from "../components/campains/CampainList"
import DonateBanner from "../components/campains/DonateBanner"
import ImpactQuote from "../components/home/ImpactQuote"
import MakeDifference from "../components/home/MakeDifference"


const Campaigns = () => {
  return (
<>
<CampaignHero/>
<CampaignList/>
<MakeDifference compact />

<ImpactQuote
  quote="When you give a mother peace of mind and a child the freedom to learn, you aren't just helping two people—you're changing the course of an entire community."
  author="Ananya Sharma"
  role="Community Volunteer & Supporter"
/>
<DonateBanner/>
</>
  )
}

export default Campaigns


















































// import { useState } from "react";
// import CampaignCard from "../components/campains/CampaignCard";
// import { campaigns } from "../services/json/campaign.json";

// const Campaigns = () => {
//   const [savedCampaigns, setSavedCampaigns] = useState<number[]>([]);

//   const handleSave = (id: number) => {
//     setSavedCampaigns((previous) => {
//       if (previous.includes(id)) {
//         return previous.filter((campaignId) => campaignId !== id);
//       }

//       return [...previous, id];
//     });
//   };

//   return (
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {campaigns
//         .filter((campaign) => campaign.status === "active")
//         .map((campaign) => (
//           <CampaignCard
//             key={campaign.id}
//             campaign={campaign}
//             onSave={handleSave}
//             isSaved={savedCampaigns.includes(campaign.id)}
//           />
//         ))}
//     </div>
//   );
// };

// export default Campaigns;


// import { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Eye,
//   Heart,
//   Receipt,
//   Search,
//   ShieldCheck,
//   Sparkles,
//   X,
// } from "lucide-react";
// import CampaignCard from "../components/campains/CampaignCard";
// import { campaigns } from "../services/json/campaign.json";

// type SortOption = "featured" | "mostFunded" | "needsSupport" | "biggestGoal";

// const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
// const fundedRatio = (raised: number, target: number) => raised / target;

// const trustPoints = [
//   {
//     icon: ShieldCheck,
//     title: "100% reaches the field",
//     text: "Every rupee goes directly to the cause you choose, with zero admin deduction.",
//   },
//   {
//     icon: Eye,
//     title: "Transparent progress",
//     text: "Track how much has been raised and what it is being used for, at any time.",
//   },
//   {
//     icon: Receipt,
//     title: "Instant receipts",
//     text: "Get a donation receipt right after you give, for your records and tax filing.",
//   },
// ];

// const Campaigns = () => {
//   const navigate = useNavigate();

//   const [savedCampaigns, setSavedCampaigns] = useState<number[]>([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sortBy, setSortBy] = useState<SortOption>("featured");

//   // Later: replace this with data fetched from your API
//   const activeCampaigns = useMemo(
//     () => campaigns.filter((campaign) => campaign.status === "active"),
//     [],
//   );

//   const categories = useMemo(
//     () => ["All", ...Array.from(new Set(activeCampaigns.map((c) => c.category)))],
//     [activeCampaigns],
//   );

//   // Numbers for the stats strip are calculated, not hard-coded
//   const stats = useMemo(() => {
//     const raised = activeCampaigns.reduce((sum, c) => sum + c.raisedAmount, 0);
//     const target = activeCampaigns.reduce((sum, c) => sum + c.targetAmount, 0);
//     return {
//       raised,
//       count: activeCampaigns.length,
//       funded: target ? Math.round((raised / target) * 100) : 0,
//     };
//   }, [activeCampaigns]);

//   // Spotlight: the campaign that needs support the most
//   const spotlight = useMemo(
//     () =>
//       [...activeCampaigns].sort(
//         (a, b) =>
//           fundedRatio(a.raisedAmount, a.targetAmount) -
//           fundedRatio(b.raisedAmount, b.targetAmount),
//       )[0],
//     [activeCampaigns],
//   );

//   const handleSave = (id: number) => {
//     const alreadySaved = savedCampaigns.includes(id);

//     setSavedCampaigns((previous) =>
//       alreadySaved ? previous.filter((item) => item !== id) : [...previous, id],
//     );

//     // 🔔 Toast goes here later
//   };

//   const visibleCampaigns = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     const filtered = activeCampaigns.filter((campaign) => {
//       const matchesCategory = category === "All" || campaign.category === category;
//       const matchesSearch =
//         query === "" ||
//         campaign.title.toLowerCase().includes(query) ||
//         campaign.description.toLowerCase().includes(query);
//       return matchesCategory && matchesSearch;
//     });

//     const sorted = [...filtered];

//     switch (sortBy) {
//       case "mostFunded":
//         sorted.sort(
//           (a, b) =>
//             fundedRatio(b.raisedAmount, b.targetAmount) -
//             fundedRatio(a.raisedAmount, a.targetAmount),
//         );
//         break;
//       case "needsSupport":
//         sorted.sort(
//           (a, b) =>
//             fundedRatio(a.raisedAmount, a.targetAmount) -
//             fundedRatio(b.raisedAmount, b.targetAmount),
//         );
//         break;
//       case "biggestGoal":
//         sorted.sort((a, b) => b.targetAmount - a.targetAmount);
//         break;
//       default:
//         break;
//     }

//     return sorted;
//   }, [activeCampaigns, search, category, sortBy]);

//   const hasActiveFilters = search !== "" || category !== "All" || sortBy !== "featured";

//   const clearFilters = () => {
//     setSearch("");
//     setCategory("All");
//     setSortBy("featured");
//   };

//   // Show the spotlight only when the visitor is not filtering
//   const showSpotlight = !!spotlight && !hasActiveFilters;
//   const gridCampaigns = showSpotlight
//     ? visibleCampaigns.filter((c) => c.id !== spotlight.id)
//     : visibleCampaigns;

//   const spotlightProgress = spotlight
//     ? Math.min((spotlight.raisedAmount / spotlight.targetAmount) * 100, 100)
//     : 0;

//   return (
//     <div className="bg-slate-50">
//       {/* ================= HERO ================= */}
//       <section className="relative isolate overflow-hidden px-6 pb-24 pt-16 text-center">
//         <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//           <div className="absolute -left-24 -top-24 h-96 w-96 animate-pulse rounded-full bg-yellow-300/60 blur-3xl [animation-duration:7s]" />
//           <div className="absolute -right-28 top-0 h-[28rem] w-[28rem] animate-pulse rounded-full bg-sky-300/50 blur-3xl [animation-duration:9s]" />
//           <div className="absolute left-1/2 top-24 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
//           <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:22px_22px]" />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />
//         </div>

//         <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-400">
//           <Sparkles className="h-3.5 w-3.5" />
//           Our Campaigns
//         </p>

//         <h1 className="font-[fredoka] text-4xl font-bold text-slate-900 md:text-6xl">
//           Campaigns That <span className="text-yellow-400">Change Lives</span>
//         </h1>

//         <p className="mx-auto mt-4 max-w-2xl text-slate-600 md:text-lg">
//           Choose a cause close to your heart. Every contribution brings care,
//           education, and safety to women and children in need.
//         </p>
//       </section>

//       {/* ================= STATS STRIP ================= */}
//       <div className="relative z-10 mx-auto -mt-14 max-w-5xl px-6">
//         <div className="grid grid-cols-3 divide-x divide-slate-100 rounded-3xl bg-white py-6 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/70">
//           {[
//             { value: formatINR(stats.raised), label: "Raised so far" },
//             { value: String(stats.count), label: "Active campaigns" },
//             { value: `${stats.funded}%`, label: "Average funded" },
//           ].map((item) => (
//             <div key={item.label} className="px-3 text-center">
//               <p className="font-[fredoka] text-xl font-semibold text-slate-900 sm:text-3xl">
//                 {item.value}
//               </p>
//               <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-sm">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mx-auto max-w-7xl px-6 pb-20 pt-14">
//         {/* ================= SPOTLIGHT ================= */}
//         {showSpotlight && (
//           <section className="mb-14">
//             <p className="mb-4 text-xs font-bold uppercase tracking-widest text-amber-600">
//               Needs your support most
//             </p>

//             <article
//               onClick={() => navigate(`/campaign/${spotlight.id}`)}
//               className="group grid cursor-pointer overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70 shadow-[0_14px_40px_-16px_rgba(15,23,42,0.25)] transition-all duration-300 hover:shadow-[0_34px_70px_-24px_rgba(234,179,8,0.5)] md:grid-cols-2"
//             >
//               <div className="relative h-64 overflow-hidden md:h-full md:min-h-[22rem]">
//                 <img
//                   src={spotlight.image}
//                   alt={spotlight.title}
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
//                 <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
//                   {spotlight.category}
//                 </span>
//               </div>

//               <div className="flex flex-col justify-center p-7 md:p-10">
//                 <h2 className="font-[fredoka] text-2xl font-medium text-slate-900 md:text-3xl">
//                   {spotlight.title}
//                 </h2>
//                 <p className="mt-3 leading-7 text-slate-600">{spotlight.description}</p>

//                 <div className="mt-6">
//                   <div className="mb-2 flex items-baseline justify-between">
//                     <span className="text-lg font-bold text-green-800">
//                       {formatINR(spotlight.raisedAmount)}
//                       <span className="ml-1 text-xs font-medium text-slate-500">raised</span>
//                     </span>
//                     <span className="text-xs font-medium text-slate-500">
//                       Goal {formatINR(spotlight.targetAmount)}
//                     </span>
//                   </div>
//                   <div className="h-3 overflow-hidden rounded-full bg-slate-100 ring-1 ring-inset ring-slate-200/60">
//                     <div
//                       className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-amber-500"
//                       style={{ width: `${spotlightProgress}%` }}
//                     />
//                   </div>
//                   <p className="mt-2 text-xs font-medium text-slate-500">
//                     {Math.round(spotlightProgress)}% of goal reached
//                   </p>
//                 </div>

//                 <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-neutral-950 transition group-hover:bg-yellow-500">
//                   Support this campaign
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </span>
//               </div>
//             </article>
//           </section>
//         )}

//         {/* ================= SEARCH + SORT ================= */}
//         <div className="mb-5 flex flex-col gap-3 md:flex-row">
//           <div className="relative flex-1">
//             <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <input
//               type="text"
//               value={search}
//               onChange={(event) => setSearch(event.target.value)}
//               placeholder="Search campaigns..."
//               aria-label="Search campaigns"
//               className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-10 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300/50"
//             />
//             {search && (
//               <button
//                 type="button"
//                 aria-label="Clear search"
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             )}
//           </div>

//           <select
//             value={sortBy}
//             onChange={(event) => setSortBy(event.target.value as SortOption)}
//             aria-label="Sort campaigns"
//             className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300/50"
//           >
//             <option value="featured">Featured</option>
//             <option value="mostFunded">Most funded</option>
//             <option value="needsSupport">Needs support most</option>
//             <option value="biggestGoal">Biggest goal</option>
//           </select>
//         </div>

//         {/* ================= CATEGORY CHIPS ================= */}
//         <div className="mb-8 flex flex-wrap items-center gap-2">
//           {categories.map((item) => {
//             const isActive = category === item;
//             return (
//               <button
//                 key={item}
//                 type="button"
//                 onClick={() => setCategory(item)}
//                 aria-pressed={isActive}
//                 className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
//                   isActive
//                     ? "bg-slate-900 text-yellow-400 shadow-md"
//                     : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-yellow-50 hover:ring-yellow-300"
//                 }`}
//               >
//                 {item}
//               </button>
//             );
//           })}

//           <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
//             <Heart className="h-4 w-4 fill-red-500 text-red-500" />
//             {savedCampaigns.length} saved
//           </span>
//         </div>

//         {hasActiveFilters && (
//           <p className="mb-5 text-sm text-slate-500" aria-live="polite">
//             Showing <strong className="text-slate-800">{visibleCampaigns.length}</strong> of{" "}
//             {activeCampaigns.length} campaigns
//           </p>
//         )}

//         {/* ================= GRID / EMPTY STATE ================= */}
//         {gridCampaigns.length > 0 ? (
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {gridCampaigns.map((campaign) => (
//               <CampaignCard
//                 key={campaign.id}
//                 campaign={campaign}
//                 onSave={handleSave}
//                 isSaved={savedCampaigns.includes(campaign.id)}
//               />
//             ))}
//           </div>
//         ) : (
//           !showSpotlight && (
//             <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200">
//               <p className="font-[fredoka] text-xl font-medium text-slate-900">
//                 No campaigns match your search
//               </p>
//               <p className="mt-2 text-sm text-slate-500">Try a different keyword or category.</p>
//               <button
//                 type="button"
//                 onClick={clearFilters}
//                 className="mt-6 rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-bold text-neutral-950 transition hover:bg-yellow-500"
//               >
//                 Clear filters
//               </button>
//             </div>
//           )
//         )}

//         {/* ================= TRUST BLOCK ================= */}
//         <section className="mt-20 grid gap-5 md:grid-cols-3">
//           {trustPoints.map(({ icon: Icon, title, text }) => (
//             <div
//               key={title}
//               className="rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 shadow-[0_10px_30px_-14px_rgba(15,23,42,0.15)]"
//             >
//               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-amber-600">
//                 <Icon className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 font-[fredoka] text-lg font-medium text-slate-900">{title}</h3>
//               <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
//             </div>
//           ))}
//         </section>

//         {/* ================= CLOSING CTA ================= */}
//         <section className="relative isolate mt-16 overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center">
//           <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//             <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-yellow-400/30 blur-3xl" />
//             <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
//           </div>

//           <h2 className="font-[fredoka] text-2xl font-semibold text-white md:text-4xl">
//             Can&apos;t choose just one?
//           </h2>
//           <p className="mx-auto mt-3 max-w-xl text-slate-300">
//             Make a general donation and we will direct it to where help is needed most.
//           </p>

//           <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <button
//               type="button"
//               onClick={() => navigate("/donate")}
//               className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-neutral-950 transition hover:bg-yellow-500"
//             >
//               Donate Now
//               <ArrowRight className="h-4 w-4" />
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate("/volunteer")}
//               className="rounded-xl px-6 py-3 text-sm font-bold text-white ring-1 ring-white/30 transition hover:bg-white/10"
//             >
//               Become a Volunteer
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Campaigns;