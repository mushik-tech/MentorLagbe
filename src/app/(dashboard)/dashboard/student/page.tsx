import { CircleCheck, Clock, CrownDiamond, PaperPlane } from "@gravity-ui/icons";
import DashboardWelcome from "@/components/Dashboard/DashboardWelcome";
import StatCard from "@/components/Dashboard/StatCard";
import StatsBreakdown from "@/components/Dashboard/StatsBreakdown";
import StatsGrid from "@/components/Dashboard/StatsGrid";
import { getStudentStats } from "@/lib/api/dashboardStat";
import { getSession } from "@/lib/core/server";

const StudentDashboardHome = async () => {
  const [stats, session] = await Promise.all([getStudentStats(), getSession()]);

  const isPro = stats.currentPlan === "pro";
  const otherApplications = Math.max(
    0,
    stats.totalAppliedTuitions -
      stats.acceptedApplications -
      stats.pendingApplications,
  );

  return (
    <div className="space-y-6">
      <DashboardWelcome
        role="student"
        name={session?.user.name}
        plan={stats.currentPlan}
      />

      <StatsGrid>
        <StatCard
          label="Total applied tuitions"
          value={stats.totalAppliedTuitions}
          icon={PaperPlane}
          tone="emerald"
          hint="Every tuition request you have submitted so far."
          href="/dashboard/student/my-applications"
          hrefLabel="View applications"
        />
        <StatCard
          label="Accepted applications"
          value={stats.acceptedApplications}
          icon={CircleCheck}
          tone="sky"
          hint="Requests a tutor has confirmed."
          progress={{
            value: stats.acceptedApplications,
            total: stats.totalAppliedTuitions,
            caption: "Acceptance rate",
          }}
        />
        <StatCard
          label="Pending applications"
          value={stats.pendingApplications}
          icon={Clock}
          tone="amber"
          hint="Still waiting for a tutor's response."
          progress={{
            value: stats.pendingApplications,
            total: stats.totalAppliedTuitions,
            caption: "Awaiting response",
          }}
          href="/dashboard/student/my-applications"
          hrefLabel="Check status"
        />
        <StatCard
          label="Current plan"
          value={isPro ? "Pro" : "Free"}
          icon={CrownDiamond}
          tone="violet"
          badge={isPro ? "Pro member" : "Free member"}
          hint={
            isPro
              ? "You have full access to Pro features."
              : "Upgrade to Pro for more tuition access."
          }
          href="/pricing"
          hrefLabel={isPro ? "Manage plan" : "Upgrade plan"}
        />
      </StatsGrid>

      <StatsBreakdown
        title="Application pipeline"
        description="Where your tuition applications stand right now."
        segments={[
          {
            label: "Accepted",
            value: stats.acceptedApplications,
            tone: "sky",
          },
          {
            label: "Pending",
            value: stats.pendingApplications,
            tone: "amber",
          },
          { label: "Other", value: otherApplications, tone: "rose" },
        ]}
      />
    </div>
  );
};

export default StudentDashboardHome;
