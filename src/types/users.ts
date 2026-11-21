export type TRole = "student" | "tutor" | "admin";
export type TSubscriptionPlan = "free" | "pro";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  role: TRole;
  subscriptionPlan: "free" | "pro";
  bio?: string;
  image?: string;
  phone?: string;
}
