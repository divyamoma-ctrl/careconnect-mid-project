// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CampaignCard from "../campains/CampaignCard";
// import { campaigns } from "../../services/json/campaign.json";
// import { ArrowRight } from "lucide-react";

// const HomeCampaign = () => {
//   const navigate = useNavigate();

//   const [savedCampaigns, setSavedCampaigns] = useState<number[]>([]);

//   const handleSave = (id: number) => {
//     setSavedCampaigns((previous) => {
//       if (previous.includes(id)) {
//         return previous.filter((campaignId) => campaignId !== id);
//       }

//       return [...previous, id];
//     });
//   };

//   const homeCampaigns = campaigns
//     .filter((campaign) => campaign.status === "active")
//     .slice(0, 3);

//   return (
//     // <section className="bg-slate-50 px-6 py-16">
//     //   <div className="mx-auto max-w-7xl">

//     //     {/* Section Heading */}
//     //     <div className=" mb-10 text-center">
//     //       <p className ="inline-block px-3 py-1 bg-black text-yellow-400 text-xs font-semibold uppercase tracking-wider rounded-full border border-yellow-500/20 mb-4">
//     //         Our Campaigns
//     //       </p>

//     //       <h2 className="text-3xl font-bold text-slate-900 md:text-4xl font-[fredoka]">
//     //         <span className="text-yellow-400">Together</span>, We Can Create Change
//     //       </h2>

//     //       <p className="mx-auto mt-3 max-w-2xl text-slate-600 ">
//     //         Support a campaign and help provide meaningful opportunities,
//     //         care, and support for women and children.
//     //       </p>
//     //     </div>

//     //     {/* Campaign Cards */}
//     //     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//     //       {homeCampaigns.map((campaign) => (
//     //         <CampaignCard
//     //           key={campaign.id}
//     //           campaign={campaign}
//     //           onSave={handleSave}
//     //           isSaved={savedCampaigns.includes(campaign.id)}
//     //         />
//     //       ))}
//     //     </div>

//     //     {/* View All Button */}
//     //     <div className="mt-10 text-center">
//     //       <button
//     //         type="button"
//     //         onClick={() => navigate("/campaigns")}
//     //         className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-bold text-sm sm:text-base rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/10"
//     //       >
//     //         View All Campaigns
//     //             <ArrowRight className="w-4 h-4" />
//     //       </button>
//     //     </div>
//     //   </div>
//     // </section>
//    <section className="relative overflow-hidden bg-slate-50 px-6 py-16">

//   {/* TEST YELLOW BUBBLE */}
//   <div className="absolute left-10 top-10 z-0 h-64 w-64 rounded-full bg-yellow-400/50" />

//   {/* CONTENT */}
//   <div className="relative z-10 mx-auto max-w-7xl">

//     <div className="mb-10 text-center">
//       <p className="mb-4 inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-400">
//         Our Campaigns
//       </p>

//       <h2 className="font-[fredoka] text-3xl font-bold text-slate-900 md:text-4xl">
//         <span className="text-yellow-400">Together</span>, We Can Create Change
//       </h2>

//       <p className="mx-auto mt-3 max-w-2xl text-slate-600">
//         Support a campaign and help provide meaningful opportunities,
//         care, and support for women and children.
//       </p>
//     </div>

//     {/* Campaign cards */}
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {homeCampaigns.map((campaign) => (
//         <CampaignCard
//           key={campaign.id}
//           campaign={campaign}
//           onSave={handleSave}
//           isSaved={savedCampaigns.includes(campaign.id)}
//         />
//       ))}
//     </div>

//   </div>
// </section>
//   );
// };

// export default HomeCampaign;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import CampaignCard from "../campains/CampaignCard";
import { campaigns } from "../../services/json/campaign.json";

const HomeCampaign = () => {
  const navigate = useNavigate();

  const [savedCampaigns, setSavedCampaigns] = useState<string[]>([]);

  const handleSave = (id: string) => {
    setSavedCampaigns((previous) => {
      if (previous.includes(id)) {
        return previous.filter((campaignId) => campaignId !== id);
      }

      return [...previous, id];
    });
  };

  // Show only 3 active campaigns on landing page
  const homeCampaigns = campaigns
    .filter((campaign) => campaign.status === "active")
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden  px-6 py-16">

      {/* ================= YELLOW BACKGROUND BUBBLES ================= */}

      {/* Left yellow glow */}
      <div className="pointer-events-none absolute -left-32 top-0 z-0 h-96 w-96 rounded-full bg-yellow-300/50 blur-3xl" />

      {/* Right yellow glow */}
      <div className="pointer-events-none absolute -right-32 bottom-0 z-0 h-[450px] w-[450px] rounded-full bg-yellow-400/40 blur-3xl" />

      {/* Small middle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}

        <div className="mb-10 text-center">

         <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
           Our Campaigns
          </span>

          <h2 className="font-[fredoka] text-3xl font-bold text-slate-900 md:text-4xl">
            <span className="text-yellow-400">Together</span>, We Can Create
            Change
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Support a campaign and help provide meaningful opportunities,
            care, and support for women and children.
          </p>

        </div>

        {/* ================= CAMPAIGN CARDS ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {homeCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.$id}
              campaign={campaign}
              onSave={handleSave}
              isSaved={savedCampaigns.includes(campaign.$id)}
            />
          ))}

        </div>

        {/* ================= VIEW ALL BUTTON ================= */}

        <div className="mt-10 text-center">

          <button
            type="button"
            onClick={() => navigate("/campaigns")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-neutral-950 transition-all duration-200 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/20 sm:text-base"
          >
            View All Campaigns

            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default HomeCampaign;




