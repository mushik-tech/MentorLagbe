import { CrownDiamond } from "@gravity-ui/icons";
import { roleMeta } from "@/components/Dashboard/dashboard-nav";
import type { TRole, TSubscriptionPlan } from "@/types/users";

type DashboardWelcomeProps = {
  role: TRole;
  name?: string | null;
  plan?: TSubscriptionPlan;
};

export default function DashboardWelcome({
  role,
  name,
  plan,
}: DashboardWelcomeProps) {
  const meta = roleMeta[role];
  const firstName = name?.trim().split(" ")[0];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#04382f] bg-[radial-gradient(120%_140%_at_10%_0%,rgba(44,155,128,0.55)_0%,transparent_60%)] px-6 py-7 text-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.9)] sm:px-8 sm:py-9">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-10 h-40 w-40 rounded-full border border-white/10"
      />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8fd9c7]">
            {meta.label} dashboard
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Welcome back{firstName ? `, ${firstName}` : ""}
          </h1>
          <p className="mt-2 text-sm text-white/70">{meta.blurb}</p>
        </div>

        {plan && role !== "admin" ? (
          <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur sm:self-auto">
            <CrownDiamond
              aria-hidden="true"
              className={`h-5 w-5 ${plan === "pro" ? "text-[#f4d21f]" : "text-white/60"}`}
            />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Current plan
              </p>
              <p className="text-sm font-bold capitalize">
                {plan === "pro" ? "Pro" : "Free"}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
