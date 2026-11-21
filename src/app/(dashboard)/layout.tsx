import DashboardShell from "@/components/Dashboard/DashboardShell";
import { getSession } from "@/lib/core/server";
import { TRole, TSubscriptionPlan } from "@/types/users";

const DashboardLayout = async ({ children }: LayoutProps<"/">) => {
  const session = await getSession();

  const role = session?.user.role as TRole;
  const plan = session?.user.subscriptionPlan as TSubscriptionPlan;

  return (
    <DashboardShell
      role={role}
      user={{
        name: session?.user.name as string,
        email: session?.user.email as string,
        image: session?.user.image ?? null,
        plan,
      }}
    >
      {children}
    </DashboardShell>
  );
};

export default DashboardLayout;
