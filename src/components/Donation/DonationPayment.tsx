// import { useState } from "react";
// import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";
// import { toast } from "sonner";


// import DonationSummary from "./DonationSummery";
// import type { DonationFrequency, DonorDetailsData } from "../../types/interface/donationInterface";

// interface Props {
//   amount: number;
//   frequency: DonationFrequency;
//   donor: DonorDetailsData;
//   onBack: () => void;
// }

// interface RazorpayResponse {
//   razorpay_order_id: string;
//   razorpay_payment_id: string;
//   razorpay_signature: string;
// }

// interface RazorpayOptions {
//   key: string;
//   amount: number;
//   currency: string;
//   name: string;
//   description: string;
//   order_id: string;
//   prefill: {
//     name: string;
//     email: string;
//     contact: string;
//   };
//   theme: {
//     color: string;
//   };
//   handler: (response: RazorpayResponse) => void | Promise<void>;
//   modal?: {
//     ondismiss?: () => void;
//   };
// }

// declare global {
//   interface Window {
//     Razorpay?: new (
//       options: RazorpayOptions,
//     ) => {
//       open: () => void;
//     };
//   }
// }

// const loadRazorpay = () => {
//   return new Promise<boolean>((resolve) => {
//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };

// const DonationPayment = ({
//   amount,
//   frequency,
//   donor,
//   onBack,
// }: Props) => {
//   const [loading, setLoading] = useState(false);

//   const startPayment = async () => {
//     if (frequency === "monthly") {
//       toast.info(
//         "Monthly donations need a recurring-payment setup. Please choose a one-time donation for now.",
//       );
//       return;
//     }

//     setLoading(true);

//     try {
//       const loaded = await loadRazorpay();

//       if (!loaded || !window.Razorpay) {
//         throw new Error("Unable to load the payment checkout.");
//       }

//       // The backend creates the Razorpay order.
//       const order = await createDonationOrder({
//         amount,
//         frequency,
//         donor,
//       });

//       const checkout = new window.Razorpay({
//         key: order.keyId,
//         amount: order.amount,
//         currency: order.currency,
//         name: "CareConnect",
//         description: "Support women and children",
//         order_id: order.orderId,
//         prefill: {
//           name: donor.name,
//           email: donor.email,
//           contact: donor.mobile,
//         },
//         theme: {
//           color: "#FACC15",
//         },
//         handler: async (response) => {
//           try {
//             // The backend must verify the signature and payment status.
//             const result = await verifyDonationPayment({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (result.verified === true) {
//               toast.success("Your donation has been verified. Thank you!");
//             } else {
//               toast.error(
//                 "Payment verification is pending. Please check again later.",
//               );
//             }
//           } catch {
//             toast.error(
//               "We couldn't verify the payment yet. Please check your donation status before retrying.",
//             );
//           } finally {
//             setLoading(false);
//           }
//         },
//         modal: {
//           ondismiss: () => setLoading(false),
//         },
//       });

//       checkout.open();
//     } catch (error) {
//       toast.error(
//         error instanceof Error
//           ? error.message
//           : "Unable to start payment.",
//       );
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="rounded-3xl border border-amber-200 bg-white p-5 shadow-xl sm:p-8">
//       <div className="mb-6 flex items-center gap-3">
//         <div className="rounded-xl bg-yellow-300 p-3">
//           <CreditCard className="h-6 w-6 text-neutral-900" />
//         </div>

//         <div>
//           <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
//             Final step
//           </p>
//           <h2 className="font-[Fredoka] text-2xl font-bold text-neutral-900">
//             Complete Your Donation
//           </h2>
//         </div>
//       </div>

//       <DonationSummary amount={amount} frequency={frequency} />

//       <div className="my-6 rounded-xl border border-neutral-200 p-4">
//         <div className="flex items-start gap-3">
//           <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-green-700" />
//           <div>
//             <p className="font-semibold text-neutral-900">
//               Secure checkout
//             </p>
//             <p className="mt-1 text-sm leading-6 text-neutral-600">
//               Razorpay Checkout provides the available payment methods,
//               such as UPI, cards and net banking, based on your account
//               and checkout configuration.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col-reverse gap-3 sm:flex-row">
//         <button
//           type="button"
//           onClick={onBack}
//           disabled={loading}
//           className="rounded-xl border border-neutral-300 px-5 py-3 font-semibold hover:bg-neutral-50 disabled:opacity-50"
//         >
//           Back
//         </button>

//         <button
//           type="button"
//           onClick={startPayment}
//           disabled={loading || amount < 1}
//           className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-4 font-bold text-white transition hover:bg-amber-500 hover:text-neutral-950 disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           {loading ? "Connecting to Checkout..." : `Pay ₹${amount.toLocaleString("en-IN")}`}
//         </button>
//       </div>

//       <p className="mt-4 text-center text-xs text-neutral-500">
//         Use only the gateway's test credentials while developing.
//       </p>
//     </div>
//   );
// };

// export default DonationPayment;