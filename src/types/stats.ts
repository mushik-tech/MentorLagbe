import type { TSubscriptionPlan } from "@/types/users";

export interface IStudentStats {
  totalAppliedTuitions: number;
  acceptedApplications: number;
  pendingApplications: number;
  currentPlan: TSubscriptionPlan;
}

export interface ITutorStats {
  totalTuitionsPosted: number;
  activeApprovedTuitions: number;
  totalApplicantsReceived: number;
  currentPlan: TSubscriptionPlan;
}

export interface IAdminStats {
  totalUsers: number;
  totalTutors: number;
  pendingTuitions: number;
  approvedTuitions: number;
  totalStripeRevenue: number;
}

/** Wire shape from GET /dashboard/admin/stats — an aggregation `$facet` result. */
export interface IAdminStatsResponse {
  userStats?: Array<Pick<IAdminStats, "totalUsers" | "totalTutors">>;
  tuitionStats?: Array<
    Pick<IAdminStats, "pendingTuitions" | "approvedTuitions">
  >;
  paymentStats?: Array<Pick<IAdminStats, "totalStripeRevenue">>;
}
