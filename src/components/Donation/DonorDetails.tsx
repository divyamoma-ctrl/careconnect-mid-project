
import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  donationSchema,
  type DonorDetailsFormData,
} from "../../services/validation/donationSchema";

interface Props {
  initialData: DonorDetailsFormData;
  onContinue: (data: DonorDetailsFormData) => void;
  onBack: () => void;
}

const DonorDetails = ({
  initialData,
  onContinue,
  onBack,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DonorDetailsFormData>({
    resolver: yupResolver(donationSchema),
    defaultValues: initialData,
  });

  const inputClass =
    "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100";

  return (
    <form
      onSubmit={handleSubmit(onContinue)}
      className="rounded-3xl border border-amber-200 bg-white p-5 shadow-xl sm:p-8"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-yellow-300 p-3">
          <UserRound className="h-6 w-6 text-neutral-900" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            Almost there
          </p>
          <h2 className="font-[Fredoka] text-2xl font-bold text-neutral-900">
            Your Details
          </h2>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Full Name *
          </label>
          <input
            {...register("name")}
            className={inputClass}
            placeholder="Enter your full name"
            autoComplete="name"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.name?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            autoComplete="email"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Mobile Number *
          </label>
          <input
            {...register("mobile")}
            type="tel"
            className={inputClass}
            placeholder="10-digit mobile number"
            autoComplete="tel"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.mobile?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Date of Birth
          </label>
          <input
            {...register("dob")}
            type="date"
            className={inputClass}
            autoComplete="bday"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.dob?.message}
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-semibold">
            Address *
          </label>
          <textarea
            {...register("address")}
            className={inputClass}
            rows={3}
            placeholder="Enter your address"
            autoComplete="street-address"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.address?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            PIN Code *
          </label>
          <input
            {...register("pincode")}
            inputMode="numeric"
            maxLength={6}
            className={inputClass}
            placeholder="6-digit PIN code"
            autoComplete="postal-code"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.pincode?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            PAN Number (optional)
          </label>
          <input
            {...register("pan")}
            className={inputClass}
            placeholder="ABCDE1234F"
            maxLength={10}
            autoCapitalize="characters"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.pan?.message}
          </p>
        </div>
      </div>

      <p className="mt-5 text-xs leading-5 text-neutral-500">
        Only provide personal information needed for the donation.
        A real deployment should explain how donor information is used
        and protected.
      </p>

      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center justify-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 font-semibold hover:bg-neutral-50"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 font-bold text-white transition hover:bg-amber-500 hover:text-neutral-950"
        >
          Continue to Payment
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
};

export default DonorDetails;