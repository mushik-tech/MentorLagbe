import { Books, CircleCheck, CrownDiamond, Persons } from "@gravity-ui/icons";
import DashboardWelcome from "@/components/Dashboard/DashboardWelcome";
import StatCard from "@/components/Dashboard/StatCard";
import StatsBreakdown from "@/components/Dashboard/StatsBreakdown";
import StatsGrid from "@/components/Dashboard/StatsGrid";
import { getTutorStats } from "@/lib/api/dashboardStat";
import { getSession } from "@/lib/core/server";

const TutorDashboardHome = async () => {
  const [stats, session] = await Promise.all([getTutorStats(), getSession()]);

  const isPro = stats.currentPlan === "pro";
  const needsAttention = Math.max(
    0,
    stats.totalTuitionsPosted - stats.activeApprovedTuitions,
  );

  return (
    <div className="space-y-6">
      <DashboardWelcome
        role="tutor"
        name={session?.user.name}
        plan={stats.currentPlan}
      />

      <StatsGrid>
        <StatCard
          label="Total tuitions posted"
          value={stats.totalTuitionsPosted}
          icon={Books}
          tone="emerald"
          hint="All tuition listings you have created."
          href="/dashboard/tutor/my-tuitions"
          hrefLabel="Manage tuitions"
        />
        <StatCard
          label="Active & approved"
          value={stats.activeApprovedTuitions}
          icon={CircleCheck}
          tone="sky"
          hint="Live listings students can see and apply to."
          progress={{
            value: stats.activeApprovedTuitions,
            total: stats.totalTuitionsPosted,
            caption: "Of your listings",
          }}
          href="/dashboard/tutor/my-tuitions"
          hrefLabel="View listings"
        />
        <StatCard
          label="Applicants received"
          value={stats.totalApplicantsReceived}
          icon={Persons}
          tone="amber"
          hint="Students who applied to your tuitions."
          href="/dashboard/tutor/applicants"
          hrefLabel="Review applicants"
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
              : "Upgrade to Pro to unlock more tuition posts."
          }
          href="/pricing"
          hrefLabel={isPro ? "Manage plan" : "Upgrade plan"}
        />
      </StatsGrid>

      <StatsBreakdown
        title="Tuition visibility"
        description="How many of your listings are live for students."
        segments={[
          {
            label: "Active & approved",
            value: stats.activeApprovedTuitions,
            tone: "sky",
          },
          { label: "Needs attention", value: needsAttention, tone: "amber" },
        ]}
      />
    </div>
  );
};

export default TutorDashboardHome;
