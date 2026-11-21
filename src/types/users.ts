export type TRole = "student" | "teacher" | "admin";

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
