

// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   ArrowLeft,
//   Heart,
//   ShieldCheck,
//   HandHeart,
//   IndianRupee,
// } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { toast } from "sonner";

// import { campaigns } from "../services/json/campaign.json";
// import { campaignDonationSchema } from "../services/validation/campaignDonationSchema";
// import {
//   campaignFormData,

// } from "../services/json/campaignDonationForm.json";

// const CampaignDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSaved, setIsSaved] = useState(false); // Saved / Favorite State

//   // Find the selected campaign using the URL ID
//   const campaign = campaigns.find((item) => String(item.id) === id);

//   // React Hook Form
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<CampaignFormData>({
//     resolver: yupResolver(campaignDonationSchema) as any,
//     defaultValues: {
//       donorName: "",
//       email: "",
//       phone: "",
//       amount: undefined,
//       message: "",
//     },
//   });

//   // Toggle Save / Favorite Handler
//   const handleToggleSave = () => {
//     setIsSaved((prev) => {
//       const nextState = !prev;
//       toast.success(
//         nextState ? "Campaign saved to your favorites!" : "Campaign removed from favorites."
//       );
//       return nextState;
//     });
//   };

//   // Handle donation form submission
//   const onSubmit = async (data: CampaignFormData) => {
//     try {
//       setIsSubmitting(true);

//       const donationDetails = {
//         campaignId: campaign?.id,
//         campaignTitle: campaign?.title,
//         ...data,
//       };

//       console.log("Donation Details:", donationDetails);

//       toast.info(
//         "Form validated successfully. Donation integration is pending."
//       );

//       reset();
//     } catch (error) {
//       console.error("Donation submission error:", error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Handle an invalid campaign ID
//   if (!campaign) {
//     return (
//       <section className="flex min-h-[60vh] flex-col items-center justify-center bg-amber-50 px-4 text-center">
//         <Heart className="mb-4 h-12 w-12 text-amber-500" />
//         <h2 className="text-2xl font-bold text-gray-950">Campaign Not Found</h2>
//         <p className="mt-2 text-gray-600">
//           The campaign you are looking for does not exist.
//         </p>
//         <button
//           type="button"
//           onClick={() => navigate("/campaigns")}
//           className="mt-6 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
//         >
//           Back to Campaigns
//         </button>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-amber-50/60 px-4 py-10 sm:px-6 lg:px-10">
//       <div className="mx-auto max-w-7xl">
//         {/* Back Button */}
//         <button
//           type="button"
//           onClick={() => navigate("/campaigns")}
//           className="mb-8 inline-flex items-center gap-2 font-medium text-gray-700 transition hover:text-amber-700"
//         >
//           <ArrowLeft size={18} />
//           Back to Campaigns
//         </button>

//         <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
//           {/* Campaign Information */}
//           <div className="space-y-6 lg:col-span-3">
//             <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">
              
//               {/* Image & Heart Save Action */}
//               <div className="relative">
//                 <img
//                   src={campaign.image}
//                   alt={campaign.title}
//                   className="h-64 w-full object-cover sm:h-80"
//                 />

//                 <span className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-gray-950 shadow-sm">
//                   {campaign.category}
//                 </span>

//                 {/* Red Love / Save Button */}
//                 <button
//                   type="button"
//                   aria-label={isSaved ? "Remove from saved" : "Save campaign"}
//                   onClick={handleToggleSave}
//                   className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition hover:scale-110 hover:bg-white"
//                 >
//                   <Heart
//                     className={`h-5 w-5 transition-colors ${
//                       isSaved ? "fill-red-500 text-red-500" : "text-slate-600"
//                     }`}
//                   />
//                 </button>
//               </div>

//               <div className="p-6 sm:p-8">
//                 <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-700">
//                   Be the reason for change
//                 </p>

//                 <h1 className="text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl">
//                   {campaign.title}
//                 </h1>

//                 <p className="mt-5 leading-7 text-gray-600">
//                   {campaign.description}
//                 </p>

//                 <div className="mt-7 rounded-xl bg-linear-to-r from-amber-100 via-yellow-50 to-white p-5">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-gray-950">
//                       <HandHeart size={23} />
//                     </div>

//                     <div>
//                       <p className="text-sm text-gray-600">
//                         Campaign fundraising target
//                       </p>
//                       <p className="text-2xl font-extrabold text-gray-950">
//                         ₹{Number(campaign.targetAmount).toLocaleString("en-IN")}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Why Your Donation Matters */}
//             <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
//               <h2 className="text-xl font-bold text-gray-950">
//                 Your Support Makes a Difference
//               </h2>
//               <p className="mt-3 leading-7 text-gray-600">
//                 Every contribution helps CareConnect support women, protect
//                 children, and create opportunities for a better future.
//                 Together, we can turn compassion into meaningful action.
//               </p>

//               <div className="mt-5 flex items-start gap-3">
//                 <ShieldCheck
//                   size={22}
//                   className="mt-1 shrink-0 text-amber-600"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-gray-900">
//                     Give with confidence
//                   </h3>
//                   <p className="mt-1 text-sm leading-6 text-gray-600">
//                     Please verify your details before submitting your donation
//                     information.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ================ Donation Form ==============*/}
//           <div className="lg:col-span-2">
//             <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-lg shadow-amber-900/5">
//               <div className="bg-linear-to-br from-gray-950 via-gray-900 to-gray-800 px-6 py-7 text-white">
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-gray-950">
//                   <Heart size={25} fill="currentColor" />
//                 </div>
//                 <h2 className="text-2xl font-extrabold">
//                   Support This Campaign
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-gray-300">
//                   Your kindness can help create a brighter tomorrow.
//                 </p>
//               </div>

//               <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="space-y-5 p-6"
//               >
//                 {campaignFormData.map((field) => {
//                   const fieldName = field.name as keyof campaignFormData;

//                   return (
//                     <div key={field.name}>
//                       <label
//                         htmlFor={field.name}
//                         className="mb-2 block text-sm font-semibold text-gray-800"
//                       >
//                         {field.label}
//                         {field.name === "phone" && (
//                           <span className="ml-1 font-normal text-gray-400">
//                             (Optional)
//                           </span>
//                         )}
//                       </label>

//                       <div className="relative">
//                         {field.name === "amount" && (
//                           <IndianRupee
//                             size={17}
//                             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                           />
//                         )}

//                         <input
//                           id={field.name}
//                           type={field.type}
//                           placeholder={field.placeholder}
//                           min={field.name === "amount" ? 1 : undefined}
//                           step={field.name === "amount" ? 1 : undefined}
//                           {...register(fieldName)}
//                           className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 ${
//                             field.name === "amount" ? "pl-9" : ""
//                           } ${
//                             errors[fieldName]
//                               ? "border-red-400"
//                               : "border-gray-200"
//                           }`}
//                         />
//                       </div>

//                       {errors[fieldName] && (
//                         <p className="mt-1.5 text-sm text-red-600">
//                           {errors[fieldName]?.message}
//                         </p>
//                       )}
//                     </div>
//                   );
//                 })}

//                 {/* Optional Message */}
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="mb-2 block text-sm font-semibold text-gray-800"
//                   >
//                     Message{" "}
//                     <span className="font-normal text-gray-400">(Optional)</span>
//                   </label>

//                   <textarea
//                     id="message"
//                     rows={3}
//                     placeholder="Write a message of support..."
//                     {...register("message" as keyof CampaignFormDataType)}
//                     className={`w-full resize-y rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 ${
//                       errors.message ? "border-red-400" : "border-gray-200"
//                     }`}
//                   />

//                   {errors.message && (
//                     <p className="mt-1.5 text-sm text-red-600">
//                       {errors.message.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-amber-400 to-yellow-400 px-5 py-3.5 font-bold text-gray-950 shadow-sm transition hover:from-amber-300 hover:to-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <Heart size={19} />
//                   {isSubmitting ? "Submitting..." : "Continue with Donation"}
//                 </button>

//                 <p className="text-center text-xs leading-5 text-gray-500">
//                   Your contribution can help make a meaningful difference.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CampaignDetails;






import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  ShieldCheck,
  HandHeart,
  IndianRupee,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";

import { campaigns } from "../services/json/campaign.json";
import {
  campaignFormData,
} from "../services/json/campaignDonationForm.json";

import {
  campaignDonationSchema,
  type DonationFormData,
} from "../services/validation/campaignDonationSchema";

const CampaignDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Find the selected campaign using the URL ID
  const campaign = campaigns.find((item) => String(item.$id) === id);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DonationFormData>({
    resolver: yupResolver(campaignDonationSchema),
    defaultValues: {
      donorName: "",
      email: "",
      phone: "",
      amount: undefined,
      message: "",
    },
  });

  // Toggle Save / Favorite Handler
  const handleToggleSave = () => {
    setIsSaved((prev) => {
      const nextState = !prev;

      toast.success(
        nextState
          ? "Campaign saved to your favorites!"
          : "Campaign removed from favorites."
      );

      return nextState;
    });
  };

  // Handle donation form submission
  const onSubmit = async (data: DonationFormData) => {
    try {
      setIsSubmitting(true);

      const donationDetails = {
        campaignId: campaign?.$id,
        campaignTitle: campaign?.title,
        ...data,
      };

      console.log("Donation Details:", donationDetails);

      toast.info(
        "Form validated successfully. Donation integration is pending."
      );

      reset();
    } catch (error) {
      console.error("Donation submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle an invalid campaign ID
  if (!campaign) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center bg-amber-50 px-4 text-center">
        <Heart className="mb-4 h-12 w-12 text-amber-500" />

        <h2 className="text-2xl font-bold text-gray-950">
          Campaign Not Found
        </h2>

        <p className="mt-2 text-gray-600">
          The campaign you are looking for does not exist.
        </p>

        <button
          type="button"
          onClick={() => navigate("/campaigns")}
          className="mt-6 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
        >
          Back to Campaigns
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-amber-50/60 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/campaigns")}
          className="mb-8 inline-flex items-center gap-2 font-medium text-gray-700 transition hover:text-amber-700"
        >
          <ArrowLeft size={18} />
          Back to Campaigns
        </button>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">

          {/* Campaign Information */}
          <div className="space-y-6 lg:col-span-3">

            <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">

              {/* Image & Heart Save Action */}
              <div className="relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="h-64 w-full object-cover sm:h-80"
                />

                <span className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-gray-950 shadow-sm">
                  {campaign.category}
                </span>

                {/* Save Button */}
                <button
                  type="button"
                  aria-label={isSaved ? "Remove from saved" : "Save campaign"}
                  onClick={handleToggleSave}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition hover:scale-110 hover:bg-white"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      isSaved
                        ? "fill-red-500 text-red-500"
                        : "text-slate-600"
                    }`}
                  />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-700">
                  Be the reason for change
                </p>

                <h1 className="text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl">
                  {campaign.title}
                </h1>

                <p className="mt-5 leading-7 text-gray-600">
                  {campaign.description}
                </p>

                <div className="mt-7 rounded-xl bg-linear-to-r from-amber-100 via-yellow-50 to-white p-5">
                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-gray-950">
                      <HandHeart size={23} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">
                        Campaign fundraising target
                      </p>

                      <p className="text-2xl font-extrabold text-gray-950">
                        ₹{Number(campaign.targetAmount).toLocaleString("en-IN")}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Why Your Donation Matters */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-gray-950">
                Your Support Makes a Difference
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Every contribution helps CareConnect support women, protect
                children, and create opportunities for a better future.
                Together, we can turn compassion into meaningful action.
              </p>

              <div className="mt-5 flex items-start gap-3">
                <ShieldCheck
                  size={22}
                  className="mt-1 shrink-0 text-amber-600"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Give with confidence
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Please verify your details before submitting your donation
                    information.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ================ Donation Form ============== */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-lg shadow-amber-900/5">

              <div className="bg-linear-to-br from-gray-950 via-gray-900 to-gray-800 px-6 py-7 text-white">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-gray-950">
                  <Heart size={25} fill="currentColor" />
                </div>

                <h2 className="text-2xl font-extrabold">
                  Support This Campaign
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Your kindness can help create a brighter tomorrow.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 p-6"
              >

                {/* Dynamic Form Fields */}
                {campaignFormData.map((field) => {
                  const fieldName =
                    field.name as keyof DonationFormData;

                  return (
                    <div key={field.name}>

                      <label
                        htmlFor={field.name}
                        className="mb-2 block text-sm font-semibold text-gray-800"
                      >
                        {field.label}

                        {field.name === "phone" && (
                          <span className="ml-1 font-normal text-gray-400">
                            (Optional)
                          </span>
                        )}
                      </label>

                      <div className="relative">

                        {field.name === "amount" && (
                          <IndianRupee
                            size={17}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                          />
                        )}

                        <input
                          id={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          min={field.name === "amount" ? 1 : undefined}
                          step={field.name === "amount" ? 1 : undefined}
                          {...register(
                            fieldName,
                            field.name === "amount"
                              ? { valueAsNumber: true }
                              : {}
                          )}
                          className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 ${
                            field.name === "amount" ? "pl-9" : ""
                          } ${
                            errors[fieldName]
                              ? "border-red-400"
                              : "border-gray-200"
                          }`}
                        />

                      </div>

                      {errors[fieldName] && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors[fieldName]?.message}
                        </p>
                      )}

                    </div>
                  );
                })}

                {/* Optional Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Message{" "}
                    <span className="font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Write a message of support..."
                    {...register("message")}
                    className={`w-full resize-y rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 ${
                      errors.message
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-amber-400 to-yellow-400 px-5 py-3.5 font-bold text-gray-950 shadow-sm transition hover:from-amber-300 hover:to-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Heart size={19} />

                  {isSubmitting
                    ? "Submitting..."
                    : "Continue with Donation"}
                </button>

                <p className="text-center text-xs leading-5 text-gray-500">
                  Your contribution can help make a meaningful difference.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampaignDetails;
