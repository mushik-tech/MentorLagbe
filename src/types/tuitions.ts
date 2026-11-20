export type TStatus = "pending" | "approved" | "rejected";

export interface TuitionFormData {
  title: string;
  subject: string;
  classLevel: string;
  mode: "online" | "offline";
  location: string;
  monthlyFee: string;
  daysPerWeek: string;
  description: string;
  banner: string;
  tutorEmail: string;
}

export interface ITuition {
  _id: string;
  title: string;
  subject: string;
  classLevel: string;
  mode: "online" | "offline";
  location: string;
  monthlyFee: string;
  daysPerWeek: string;
  description: string;
  banner: string;
  tutorEmail: string;
  createdAt: string;
  isActive: boolean;
  approvalStatus: TStatus
}
