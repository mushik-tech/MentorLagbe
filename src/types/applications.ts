export interface IApplicationFormData {
  preferredSchedule: string;
  studentNote: string;
  studentPhone: string;
  tuitionId: string;
  tuitionTitle: string;
  subject: string;
  monthlyFee: string;
  tutorName: string;
  tutorEmail: string;
  studentName: string;
  studentEmail: string;
}

export interface IApplication {
  _id: string;
  preferredSchedule: string;
  studentNote: string;
  studentPhone: string;
  tuitionId: string;
  tuitionTitle: string;
  subject: string;
  monthlyFee: string;
  tutorName: string;
  tutorEmail: string;
  studentName: string;
  studentEmail: string;
  appliedAt: string;
  status: string;
}
