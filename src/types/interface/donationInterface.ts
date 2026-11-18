export type DonationFrequency = "once" | "monthly";

export interface DonationFormData {
  amount: number;
  frequency: DonationFrequency;
}

export interface DonorDetailsData {
  name: string;
  email: string;
  mobile: string;
  dob: string;
  address: string;
  pincode: string;
  pan: string;
}

export interface DonationOrderResponse {
  orderId: string;
  keyId: string;
  amount: number;
  currency: string;
}

export interface DonationVerificationData {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export const donationAmounts = [500, 1000, 2000, 5000];