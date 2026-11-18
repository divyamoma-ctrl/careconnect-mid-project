
export type EmergencyCategory =
  | "hospital"
  | "police"
  | "blood_bank"
  | "ambulance";

export interface EmergencyServiceType {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  category: EmergencyCategory;
  phone?: string;
  address?: string;
}

export interface UserLocationType {
  latitude: number;
  longitude: number;
}
