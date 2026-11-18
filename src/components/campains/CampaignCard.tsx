

// import { useNavigate } from "react-router-dom";
// import type { CampaignDataType } from "../../types/interface/campaigns";
// import { ArrowRight, Heart } from "lucide-react";

// interface CampaignCardProps {
//   campaign: CampaignDataType;
//   onSave: (id: number) => void;
//   isSaved: boolean;
// }

// const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

// const CampaignCard: React.FC<CampaignCardProps> = ({
//   campaign,
//   onSave,
//   isSaved,
// }) => {
//   const navigate = useNavigate();

//   const progress = Math.min(
//     (campaign.raisedAmount / campaign.targetAmount) * 100,
//     100,
//   );

//   return (
//     <article
//       onClick={() => navigate(`/campaign/${campaign.id}`)}
//       className="group cursor-pointer overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70
//         shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18),0_4px_10px_-4px_rgba(15,23,42,0.08)]
//         transition-all duration-300 ease-out
//         hover:-translate-y-2
//         hover:shadow-[0_30px_60px_-20px_rgba(234,179,8,0.45),0_14px_28px_-12px_rgba(15,23,42,0.18)]"
//     >
//       {/* ================= IMAGE ================= */}
//       <div className="relative h-52 overflow-hidden">
//         <img
//           src={campaign.image}
//           alt={campaign.title}
//           loading="lazy"
//           className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
//         />

//         {/* Bottom gradient for depth */}
//         <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />

//         {/* Category */}
//         {/* <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
//           {campaign.category}
//         </span> */}

//         <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white px-3.5 py-1 text-xs font-semibold text-black shadow-lg backdrop-blur-lg transition-all hover:bg-white/30">
//   {campaign.category}
// </span>

//         {/* Save Button */}
//         <button
//           type="button"
//           aria-label={isSaved ? "Remove from saved" : "Save campaign"}
//           aria-pressed={isSaved}
//           onClick={(event) => {
//             event.stopPropagation();
//             onSave(campaign.id);
//           }}
//           className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-110 hover:bg-white"
//         >
//           <Heart
//             className={`h-5 w-5 transition ${
//               isSaved ? "fill-red-500 text-red-500" : "text-slate-600"
//             }`}
//           />
//         </button>

//         {/* Funded badge on image */}
//         <span className="absolute bottom-4 left-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-neutral-950 shadow-md">
//           {Math.round(progress)}% funded
//         </span>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="p-6">
//         <h3 className="font-[fredoka] text-xl font-medium leading-snug text-slate-900 transition-colors">
//           {campaign.title}
//         </h3>

//         <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
//           {campaign.description}
//         </p>

//         {/* Progress */}
//         <div className="mt-5">
//           <div className="mb-2 flex items-baseline justify-between">
//             <span className="text-base font-bold text-green-800">
//               {formatINR(campaign.raisedAmount)}
//               <span className="ml-1 text-xs font-medium text-slate-500">
//                 raised
//               </span>
//             </span>

//             <span className="text-xs font-medium text-slate-500">
//               Goal {formatINR(campaign.targetAmount)}
//             </span>
//           </div>
//           {/* 
//           <div
//             className="h-2.5 overflow-hidden rounded-full bg-slate-100 ring-1 ring-inset ring-slate-200/60"
//             role="progressbar"
//             aria-valuenow={Math.round(progress)}
//             aria-valuemin={0}
//             aria-valuemax={100}
//           >
//             <div
//               className="h-full rounded-full bg-linear-to-r from-yellow-300 to-amber-500 transition-all duration-700"
//               style={{ width: `${progress}%` }}
//             />
//           </div> */}
//         </div>

//         {/* Footer */}
//         <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
//           <p className="text-xs font-medium text-slate-500">
//             {Math.round(progress)}% of goal reached
//           </p>

//           <span className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 transition-colors group-hover:text-yellow-400">
//             Support now
//             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </span>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default CampaignCard;



import { useNavigate } from "react-router-dom";
import type { CampaignDataType } from "../../types/interface/campaigns";
import { ArrowRight, Heart } from "lucide-react";

interface CampaignCardProps {
  campaign: CampaignDataType;
  onSave: (id: string) => void;
  isSaved: boolean;
}

const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

const CampaignCard: React.FC<CampaignCardProps> = ({
  campaign,
  onSave,
  isSaved,
}) => {
  const navigate = useNavigate();

  const progress = Math.min(
    (campaign.raisedAmount / campaign.targetAmount) * 100,
    100,
  );

  return (
    <article
      onClick={() => navigate(`/campaign/${campaign.$id}`)}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70
        shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18),0_4px_10px_-4px_rgba(15,23,42,0.08)]
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-[0_30px_60px_-20px_rgba(234,179,8,0.45),0_14px_28px_-12px_rgba(15,23,42,0.18)]"
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Bottom gradient for depth */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white px-3.5 py-1 text-xs font-semibold text-black shadow-lg backdrop-blur-lg transition-all hover:bg-white/30">
          {campaign.category}
        </span>

        {/* Save Button */}
        <button
          type="button"
          aria-label={isSaved ? "Remove from saved" : "Save campaign"}
          aria-pressed={isSaved}
          onClick={(event) => {
            event.stopPropagation();
            onSave(campaign.$id);
          }}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-110 hover:bg-white"
        >
          <Heart
            className={`h-5 w-5 transition ${
              isSaved ? "fill-red-500 text-red-500" : "text-slate-600"
            }`}
          />
        </button>

        {/* Funded badge on image */}
        <span className="absolute bottom-4 left-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-neutral-950 shadow-md">
          {Math.round(progress)}% funded
        </span>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-6">
        <h3 className="font-[fredoka] text-xl font-medium leading-snug text-slate-900 transition-colors">
          {campaign.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {campaign.description}
        </p>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-base font-bold text-green-800">
              {formatINR(campaign.raisedAmount)}
              <span className="ml-1 text-xs font-medium text-slate-500">
                raised
              </span>
            </span>

            <span className="text-xs font-medium text-slate-500">
              Goal {formatINR(campaign.targetAmount)}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <p className="text-xs font-medium text-slate-500">
            {Math.round(progress)}% of goal reached
          </p>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/campaigns/${campaign.$id}`);
            }}
            className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 transition-colors group-hover:text-yellow-500 focus:outline-none"
          >
            Support now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CampaignCard;