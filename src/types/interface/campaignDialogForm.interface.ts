export interface CampaignFormDataType {
  title: string;
  description: string;
  category: string;
  targetAmount: number;
  raisedAmount: number;
  status: "active" | "completed";
}


export interface CampaignInputType {
  name: "title" | "targetAmount" | "raisedAmount" | "category";
  label: string;
  type: string;
  placeholder: string;
  options?: string[];
}