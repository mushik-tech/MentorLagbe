export interface TutionFormData {
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

export interface ITution {
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
  approvalStatus: "pending" | "approved" | "rejected";
}
