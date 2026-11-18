// import { useState } from "react";
// import { campaigns } from "../../services/json/campaign.json";
// import CampaignCard from "./CampaignCard";

// const CampaignList = () => {
//   const [savedCampaigns, setSavedCampaigns] = useState<number[]>([]);

//   const handleSave = (id: number) => {
//     setSavedCampaigns((previous) => {
//       if (previous.includes(id)) {
//         return previous.filter((campaignId) => campaignId !== id);
//       }

//       return [...previous, id];
//     });
//   };

//   const activeCampaigns = campaigns.filter(
//     (campaign) => campaign.status === "active"
//   );

//   return (
//     <section className="relative overflow-hidden py-10 sm:py-20 lg:py-14">
//       {/* Yellow Gradient Bubbles */}
//       <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
//       <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-yellow-300/25 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-amber-200/20 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section Heading */}
//         <div className="mx-auto mb-7 max-w-5xl px-4 text-center sm:mb-12">
//           <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 bg-amber-50 px-3.5 py-3 text-[11px] font-bold uppercase tracking-wider text-amber-700">
//             Make a Difference
//           </span>

//           <h2 className="mt-3 font-[Fredoka] text-2xl font-bold text-neutral-900 sm:text-3xl">
//             Explore Our{" "}
//             <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//               Campaigns
//             </span>
//           </h2>

//           <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-neutral-600 sm:text-sm">
//             Every small act of kindness creates a lasting impact.
//             Discover our campaigns and help build a brighter future
//             for women and children.
//           </p>
//         </div>

//         {/* Campaign Cards */}
//         <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
//           {activeCampaigns.map((campaign) => (
//             <CampaignCard
//               key={campaign.id}
//               campaign={campaign}
//               onSave={handleSave}
//               isSaved={savedCampaigns.includes(campaign.id)}
//             />
//           ))}
//         </div>

//         {/* Empty State */}
//         {activeCampaigns.length === 0 && (
//           <p className="py-12 text-center text-sm text-neutral-600">
//             No active campaigns are available right now. Please check back soon.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CampaignList;

import { useState } from "react";
import { campaigns } from "../../services/json/campaign.json";
import CampaignCard from "./CampaignCard";

// const categories = ["All Campaigns", "Education", "Women", "Child Welfare"];
const categories = [
  "All Campaigns",
  ...new Set(campaigns.map((campaign) => campaign.category)),
];
const CampaignList = () => {
  const [savedCampaigns, setSavedCampaigns] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Campaigns");

  const handleSave = (id: string) => {
    setSavedCampaigns((previous) => {
      if (previous.includes(id)) {
        return previous.filter((campaignId) => campaignId !== id);
      }
      return [...previous, id];
    });
  };

  // First filter by active status, then by category
  const filteredCampaigns = campaigns.filter((campaign) => {
    const isActive = campaign.status === "active";

    const matchesCategory =
      selectedCategory === "All Campaigns" ||
      campaign.category === selectedCategory;

    return isActive && matchesCategory;
  });

  return (
    <section className="relative overflow-hidden  py-10 sm:py-8 lg:py-10">
      {/* Yellow Gradient Bubbles */}

      <div className="pointer-events-none absolute -right-10 bottom-0 h-350 w-350 rounded-full bg-yellow-300/50 blur-2xl mix-blend-multiply" />
      {/* <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-yellow-300/80 via-amber-200/20 to-yellow-400/30 blur-3xl mix-blend-multiply" /> */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-7 max-w-5xl px-4 text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
          Make a difference
          </span>

          <h2 className="mt-3 font-[Fredoka] text-2xl font-bold text-neutral-900 sm:text-3xl">
            Explore Our{" "}
            <span className="bg-linear-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Campaigns
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-neutral-600 sm:text-sm">
            Every small act of kindness creates a lasting impact. Discover our
            campaigns and help build a brighter future for women and children.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-9 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 sm:px-5 ${
                selectedCategory === category
                  ? "border-[#D99A00] bg-yellow-400 text-white shadow-md"
                  : "border-amber-200 bg-white/80 text-neutral-700 hover:border-amber-400 hover:bg-amber-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.$id}
              campaign={campaign}
              onSave={handleSave}
              isSaved={savedCampaigns.includes(campaign.$id)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <p className="py-12 text-center text-sm text-neutral-600">
            No active campaigns found in this category. Please select another
            category.
          </p>
        )}
      </div>
    </section>
  );
};

export default CampaignList;
