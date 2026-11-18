

import { Heart, ArrowRight } from "lucide-react";
import { donationAmounts, type DonationFrequency } from "../../types/interface/donationInterface";


interface Props {
  amount: number;
  setAmount: (amount: number) => void;
  frequency: DonationFrequency;
  setFrequency: (frequency: DonationFrequency) => void;
  onContinue: () => void;
}

const DonationAmount = ({
  amount,
  setAmount,
  frequency,
  setFrequency,
  onContinue,
}: Props) => {
  return (
    <div className="rounded-3xl border border-amber-200 bg-white p-5 shadow-xl sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-yellow-300 p-3">
          <Heart className="h-6 w-6 text-neutral-900" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            Your kindness matters
          </p>
          <h2 className="font-[Fredoka] text-2xl font-bold text-neutral-900">
            Make a Difference
          </h2>
        </div>
      </div>

      <p className="mb-5 text-sm leading-6 text-neutral-600">
        Your contribution can help women and children access the
        support, care and opportunities they deserve.
      </p>

      <h3 className="mb-3 font-semibold text-neutral-900">
        How would you like to donate?
      </h3>

      <div className="mb-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setFrequency("once")}
          className={`rounded-xl border-2 px-4 py-4 font-semibold transition ${
            frequency === "once"
              ? "border-amber-500 bg-yellow-100 text-neutral-900"
              : "border-neutral-200 bg-white text-neutral-600 hover:border-amber-300"
          }`}
        >
          Give Once
        </button>

        <button
          type="button"
          onClick={() => setFrequency("monthly")}
          className={`rounded-xl border-2 px-4 py-4 font-semibold transition ${
            frequency === "monthly"
              ? "border-amber-500 bg-yellow-100 text-neutral-900"
              : "border-neutral-200 bg-white text-neutral-600 hover:border-amber-300"
          }`}
        >
          Give Monthly
        </button>
      </div>

      <h3 className="mb-3 font-semibold text-neutral-900">
        Choose your amount
      </h3>

      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {donationAmounts.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setAmount(item)}
            className={`rounded-xl border-2 px-3 py-4 font-bold transition ${
              amount === item
                ? "border-amber-500 bg-yellow-300 text-neutral-900"
                : "border-neutral-200 text-neutral-800 hover:border-amber-400"
            }`}
          >
            ₹{item.toLocaleString("en-IN")}
          </button>
        ))}
      </div>

      <label
        htmlFor="customAmount"
        className="mb-2 block text-sm font-semibold text-neutral-800"
      >
        Or enter your own amount
      </label>

      <div className="mb-6 flex items-center rounded-xl border border-neutral-300 px-4 focus-within:border-amber-500">
        <span className="mr-2 text-lg font-bold text-neutral-500">
          ₹
        </span>

        {/* <input
          id="customAmount"
          type="number"
          min="1"
          max="1000000"
          value={amount}
          onChange={(event) => {
            const value = Number(event.target.value);
            setAmount(value);
          }}
          className="w-full bg-transparent py-3 outline-none"
          placeholder="Enter amount"
        /> */}

        <input
  id="customAmount"
  type="number"
  min="1"
  max="1000000"
  value={amount === 0 ? "" : amount}
  onChange={(event) => {
    const value = event.target.value;

    if (value === "") {
      setAmount(0);
    } else {
      setAmount(Number(value));
    }
  }}
  className="w-full bg-transparent py-3 outline-none"
  placeholder="Enter amount"
/>
      </div>

      <button
        type="button"
        disabled={!Number.isFinite(amount) || amount < 1 || amount > 1000000}
        onClick={onContinue}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-4 font-bold text-white transition hover:bg-amber-500 hover:text-neutral-950 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue to Donor Details
        <ArrowRight size={18} />
      </button>

      <p className="mt-4 text-center text-xs text-neutral-500">
        Your donation checkout will use a secure payment provider.
      </p>
    </div>
  );
};

export default DonationAmount;