

import { useState } from "react";
import DonationAmount from "../components/Donation/DonationAmount";

type DonationFrequency = "once" | "monthly";

const DonateNow = () => {
  const [amount, setAmount] = useState<number>(500);
  const [frequency, setFrequency] = useState<DonationFrequency>("once");

  const handleContinue = () => {
    console.log("Donation Amount:", amount);
    console.log("Donation Frequency:", frequency);

    // Later, move to the donor details form
  };

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-10">
      <DonationAmount
        amount={amount}
        setAmount={setAmount}
        frequency={frequency}
        setFrequency={setFrequency}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default DonateNow;