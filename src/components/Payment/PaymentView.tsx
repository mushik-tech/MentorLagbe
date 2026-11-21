import { Button, Card, Description, Input, Label } from "@heroui/react";
import { formatPrice, type PricingPlan } from "@/lib/pricing";

type PaymentViewProps = {
  canceled?: boolean;
  user: {
    name: string;
    email: string;
    role: string;
  };
  plan: PricingPlan;
};

const roleLabels: Record<string, string> = {
  student: "Student",
  tutor: "Tutor",
};

export default function PaymentView({
  canceled = false,
  user,
  plan,
}: PaymentViewProps) {
  const total = formatPrice(plan.amount, plan.currency);
  const roleLabel = roleLabels[plan.role] ?? plan.role;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-10">
      <header className="max-w-2xl">
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#04382f] lg:text-4xl">
          Upgrade to Pro
        </h1>
        <Description className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base">
          Review your plan and confirm your details. You will be redirected to
          Stripe to complete the payment safely.
        </Description>
      </header>

      {canceled && (
        <div
          role="status"
          className="mt-8 rounded-2xl border border-[#f4d21f]/50 bg-[#fff9e0] px-5 py-4 text-sm text-[#5c4a00]"
        >
          <p className="font-semibold">Payment canceled</p>
          <p className="mt-1">
            No charge was made. You can try again whenever you are ready.
          </p>
        </div>
      )}

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="border rounded-2xl">
          {/* Plan Header */}
          <div className="bg-linear-to-br from-[#075144] via-[#064a3e] to-[#04382f] rounded-t-2xl p-6 text-white lg:p-7">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#f4d21f] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#04382f]">
                {roleLabel} plan
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {plan.description}
            </p>

            {/* Pricing */}
            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="text-5xl font-extrabold tracking-tight">
                {total}
              </span>
            </div>
          </div>

          {/* Plan Features */}
          <div className="p-6 lg:p-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
              Included with Pro
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#2c9b80]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      d="m4 10 4 4 8-8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Order summary */}
        <Card className="gap-0 overflow-hidden rounded-3xl border border-neutral-200 bg-[#f6f8f6] p-0 shadow-none lg:sticky lg:top-24">
          <Card.Content className="gap-0 p-6 lg:p-7">
            <form action="/api/checkout_sessions" method="POST">
              <div className="mt-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="billing-name">Full name</Label>
                  <Input
                    id="billing-name"
                    name="name"
                    defaultValue={user.name}
                    variant="secondary"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="billing-email">Email address</Label>
                  <Input
                    id="billing-email"
                    name="email"
                    type="email"
                    defaultValue={user.email}
                    variant="secondary"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4 text-sm font-semibold text-[#04382f]">
                <span>Total due today</span>
                <span>{total}</span>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-7 w-full bg-[#04382f] text-white shadow-[0_18px_30px_-22px_rgba(4,56,47,0.9)] hover:bg-[#075144]"
              >
                Continue to secure checkout · {total}
              </Button>
            </form>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
