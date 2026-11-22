import PaymentView from "@/components/Payment/PaymentView";
import { getSession } from "@/lib/core/server";
import { getPricingPlan } from "@/lib/pricing";
import { redirect } from "next/navigation";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ canceled?: string }>;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/signin");
  }

  const plan = getPricingPlan(session.user.role);

  if (!plan) {
    redirect(`/dashboard/${session?.user.role}`);
  }

  const { canceled } = await searchParams;

  return (
    <PaymentView
      canceled={Boolean(canceled)}
      plan={plan}
      user={{
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
      }}
    />
  );
}
