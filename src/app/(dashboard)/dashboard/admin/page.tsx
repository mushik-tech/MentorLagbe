import { CircleDollar, GraduationCap, ListCheck, Persons } from "@gravity-ui/icons";
import DashboardWelcome from "@/components/Dashboard/DashboardWelcome";
import StatCard from "@/components/Dashboard/StatCard";
import StatsBreakdown from "@/components/Dashboard/StatsBreakdown";
import StatsGrid from "@/components/Dashboard/StatsGrid";
import { getAdminStats } from "@/lib/api/dashboardStat";
import { getSession } from "@/lib/core/server";

const AdminDashboardHome = async () => {
  const [stats, session] = await Promise.all([getAdminStats(), getSession()]);

  const reviewedTuitions = stats.approvedTuitions + stats.pendingTuitions;

  return (
    <div className="space-y-6">
      <DashboardWelcome role="admin" name={session?.user.name} />

      <StatsGrid>
        <StatCard
          label="Total users"
          value={stats.totalUsers}
          icon={Persons}
          tone="emerald"
          hint="Registered accounts across the marketplace."
          href="/dashboard/admin/users"
          hrefLabel="Manage users"
        />
        <StatCard
          label="Total tutors"
          value={stats.totalTutors}
          icon={GraduationCap}
          tone="sky"
          hint="Tutors teaching on the platform."
          progress={{
            value: stats.totalTutors,
            total: stats.totalUsers,
            caption: "Of all users",
          }}
          href="/dashboard/admin/users"
          hrefLabel="View tutors"
        />
        <StatCard
          label="Approved / pending tuitions"
          value={`${stats.approvedTuitions} / ${stats.pendingTuitions}`}
          icon={ListCheck}
          tone="amber"
          hint="Live listings versus ones awaiting review."
          progress={{
            value: stats.approvedTuitions,
            total: reviewedTuitions,
            caption: "Approval share",
          }}
          href="/dashboard/admin/tuitions"
          hrefLabel="Review tuitions"
        />
        <StatCard
          label="Total Stripe revenue"
          value={`৳${stats.totalStripeRevenue.toLocaleString("en-US")}`}
          icon={CircleDollar}
          tone="violet"
          hint="Collected from completed Pro payments."
          href="/dashboard/admin/transactions"
          hrefLabel="View transactions"
        />
      </StatsGrid>

      <StatsBreakdown
        title="Tuition moderation"
        description="Review queue for tuitions submitted by tutors."
        segments={[
          {
            label: "Approved",
            value: stats.approvedTuitions,
            tone: "emerald",
          },
          { label: "Pending", value: stats.pendingTuitions, tone: "amber" },
        ]}
      />
    </div>
  );
};

export default AdminDashboardHome;
