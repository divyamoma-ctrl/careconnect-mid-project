import { Heart, ShieldCheck } from "lucide-react";
import type { DonationFrequency } from "../../types/interface/donationInterface";


interface Props {
  amount: number;
  frequency: DonationFrequency;
}

const DonationSummary = ({ amount, frequency }: Props) => {
  return (
    <aside className="rounded-2xl border border-amber-200 bg-linear-to-br from-yellow-100 via-amber-50 to-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <Heart className="h-5 w-5 text-amber-700" />
        <h3 className="font-[Fredoka] text-lg font-bold text-neutral-900">
          Your Donation
        </h3>
      </div>

      <p className="text-sm text-neutral-600">
        Your selected contribution
      </p>

      <p className="my-2 text-3xl font-extrabold text-neutral-900">
        ₹{amount.toLocaleString("en-IN")}
      </p>

      <p className="mb-4 text-sm font-medium text-amber-800">
        {frequency === "once" ? "One-time donation" : "Monthly donation"}
      </p>

      <div className="border-t border-amber-200 pt-4">
        <div className="flex items-start gap-2 text-sm text-neutral-600">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
          <p>
            Payment will be processed securely through the configured
            payment provider.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default DonationSummary;