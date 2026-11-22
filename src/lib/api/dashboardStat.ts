"use server";

import { authFetch } from "@/lib/core/server";
import type {
  IAdminStats,
  IAdminStatsResponse,
  IStudentStats,
  ITutorStats,
} from "@/types/stats";

export const getStudentStats = async (): Promise<IStudentStats> => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard/student/stats`;
  const res = await authFetch(api);
  const stats: IStudentStats | undefined = await res.json();

  return {
    totalAppliedTuitions: stats?.totalAppliedTuitions ?? 0,
    acceptedApplications: stats?.acceptedApplications ?? 0,
    pendingApplications: stats?.pendingApplications ?? 0,
    currentPlan: stats?.currentPlan ?? "free",
  };
};

export const getTutorStats = async (): Promise<ITutorStats> => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard/tutor/stats`;
  const res = await authFetch(api);
  const stats: ITutorStats | undefined = await res.json();

  return {
    totalTuitionsPosted: stats?.totalTuitionsPosted ?? 0,
    activeApprovedTuitions: stats?.activeApprovedTuitions ?? 0,
    totalApplicantsReceived: stats?.totalApplicantsReceived ?? 0,
    currentPlan: stats?.currentPlan ?? "free",
  };
};

export const getAdminStats = async (): Promise<IAdminStats> => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard/admin/stats`;
  const res = await authFetch(api);
  const stats: IAdminStatsResponse = await res.json();

  // The API groups its aggregation into facet arrays; flatten them for callers.
  return {
    totalUsers: stats.userStats?.[0]?.totalUsers ?? 0,
    totalTutors: stats.userStats?.[0]?.totalTutors ?? 0,
    pendingTuitions: stats.tuitionStats?.[0]?.pendingTuitions ?? 0,
    approvedTuitions: stats.tuitionStats?.[0]?.approvedTuitions ?? 0,
    totalStripeRevenue: stats.paymentStats?.[0]?.totalStripeRevenue ?? 0,
  };
};
