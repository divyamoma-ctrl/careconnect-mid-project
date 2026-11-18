// export interface CampaignDataType {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   targetAmount: number;
//   raisedAmount: number;
//   category: string;
//   status: "active" | "completed";
// }


export interface CampaignDataType {
  $id: string;
  title: string;
  description: string;
  image: string;
  targetAmount: number;
  raisedAmount: number;
  category: string;
    status: "active" | "completed";
  createdAt?: string;
  updatedAt?: string;
}