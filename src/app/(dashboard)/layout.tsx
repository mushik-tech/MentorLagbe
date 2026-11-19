import DashboardShell from "@/components/Dashboard/DashboardShell";
import { requireSession } from "@/lib/session";

const DashboardLayout = async ({ children }: LayoutProps<"/">) => {
  const session = await requireSession();
  const role = session.user.role;
  const plan = session.user.subscriptionPlan;

  return (
    <DashboardShell
      role={role}
      user={{
        name: session.user.name,
        email: session.user.email,
        image: session.user.image ?? null,
        plan,
      }}
    >
      {children}
    </DashboardShell>
  );
};

export default DashboardLayout;
