import Link from "next/link";
import type { ReactNode } from "react";
import { PRICING_PLANS, formatPrice, type BillingRole } from "@/lib/pricing";

type ComparisonValue = string | boolean;

type ComparisonRow = {
  label: string;
  free: ComparisonValue;
  pro: ComparisonValue;
};

type RolePlans = {
  role: BillingRole;
  heading: string;
  subtitle: string;
  icon: ReactNode;
  freeTagline: string;
  freeHighlights: string[];
  comparison: ComparisonRow[];
};

const rolePlans: RolePlans[] = [
  {
    role: "student",
    heading: "For Students",
    subtitle:
      "Find the right mentor faster and get unstuck sooner, whether you are just browsing or ready to go all in.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z"
          strokeLinejoin="round"
        />
        <path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" />
        <path d="M21 8.5V14" strokeLinecap="round" />
      </svg>
    ),
    freeTagline:
      "Explore mentors and send a few requests each month, on us.",
    freeHighlights: [
      "Create a student profile",
      "Browse verified mentors",
      "3 mentorship requests per month",
    ],
    comparison: [
      { label: "Student profile & mentor browsing", free: true, pro: true },
      { label: "Mentorship requests", free: "3 per month", pro: "Unlimited" },
      { label: "Direct messaging with mentors", free: false, pro: true },
      { label: "Priority search placement", free: false, pro: true },
      { label: "Session notes & shared resources", free: false, pro: true },
      { label: "Community resources & newsletter", free: true, pro: true },
      { label: "Support", free: "Email", pro: "Priority, 7 days a week" },
    ],
  },
  {
    role: "tutor",
    heading: "For Tutors",
    subtitle:
      "Reach more learners and spend less time searching for your next batch. Grow at your own pace.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
        <path d="M3.5 12.5c2.5 1.7 5.2 2.5 8.5 2.5s6-.8 8.5-2.5" />
      </svg>
    ),
    freeTagline:
      "Set up your tutor profile and connect with learners at no cost.",
    freeHighlights: [
      "Create a tutor profile",
      "Browse open tuitions",
      "3 applications per month",
    ],
    comparison: [
      { label: "Tutor profile & tuition browsing", free: true, pro: true },
      { label: "Tuition applications", free: "3 per month", pro: "Unlimited" },
      { label: "Direct messaging with students", free: false, pro: true },
      { label: "Priority visibility in search", free: false, pro: true },
      { label: "Session notes & shared resources", free: false, pro: true },
      { label: "Profile analytics", free: false, pro: true },
      { label: "Support", free: "Email", pro: "Priority, 7 days a week" },
    ],
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={className}
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
  );
}

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" strokeLinecap="round" />
    </svg>
  );
}

function ComparisonValueCell({
  value,
  highlight = false,
}: {
  value: ComparisonValue;
  highlight?: boolean;
}) {
  if (value === true) {
    return (
      <CheckIcon
        className={`mx-auto h-4 w-4 ${highlight ? "text-[#2c9b80]" : "text-[#0b5c4b]"}`}
      />
    );
  }

  if (value === false) {
    return (
      <span className="text-neutral-300" aria-label="Not included">
        &mdash;
      </span>
    );
  }

  return (
    <span
      className={
        highlight
          ? "font-semibold text-[#04382f]"
          : "text-neutral-600"
      }
    >
      {value}
    </span>
  );
}

function RolePricingSection({ config }: { config: RolePlans }) {
  const plan = PRICING_PLANS[config.role];
  const roleLabel = config.role === "student" ? "Student" : "Tutor";
  const proHighlights = plan.features.slice(0, 3);

  return (
    <section aria-labelledby={`${config.role}-plans-heading`}>
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f4ef] text-[#0b5c4b]">
          {config.icon}
        </span>
        <div>
          <h2
            id={`${config.role}-plans-heading`}
            className="text-2xl font-extrabold tracking-tight text-[#04382f]"
          >
            {config.heading}
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-600">
            {config.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
        {/* Free plan */}
        <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_50px_-40px_rgba(4,56,47,0.6)] lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-[#04382f]">Free</h3>
            <span className="rounded-full bg-[#eef2ef] px-3 py-1 text-[11px] font-medium text-[#3d5b52]">
              For {roleLabel.toLowerCase()}s
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            {config.freeTagline}
          </p>

          <p className="mt-6 flex items-baseline gap-1.5">
            <span className="text-5xl font-extrabold tracking-tight text-[#04382f]">
              $0
            </span>
            <span className="text-sm text-neutral-500">/month</span>
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            Free forever. No card required.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            {config.freeHighlights.map((feature) => (
              <li key={feature} className="flex gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#2c9b80]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <Link
              href="/signup"
              className="flex h-12 w-full items-center justify-center rounded-full border border-[#0b5c4b]/25 bg-white text-sm font-semibold text-[#075144] transition hover:border-[#0b5c4b]/45 hover:bg-[#f1f8f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5c4b]"
            >
              Get started free
            </Link>
          </div>
        </article>

        {/* Pro plan */}
        <article className="relative flex h-full flex-col rounded-3xl bg-linear-to-br from-[#075144] via-[#064a3e] to-[#04382f] p-6 text-white shadow-[0_35px_70px_-35px_rgba(4,56,47,0.85)] ring-1 ring-white/5 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white">Pro</h3>
            <span className="rounded-full bg-[#f4d21f] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#04382f]">
              Most popular
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            {plan.description}
          </p>

          <p className="mt-6 flex items-baseline gap-1.5">
            <span className="text-5xl font-extrabold tracking-tight">
              {formatPrice(plan.amount, plan.currency)}
            </span>
            <span className="text-sm text-white/65">/month</span>
          </p>
          <p className="mt-2 text-xs text-white/60">
            Billed monthly &middot; Cancel anytime.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-white/85">
            {proHighlights.map((feature) => (
              <li key={feature} className="flex gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#8fd9c7]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <Link
              href="/payments"
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#f4d21f] text-sm font-bold text-[#04382f] transition hover:bg-[#e8c50f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d21f]"
            >
              Upgrade to Pro
            </Link>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-white/60">
              <LockIcon className="h-3.5 w-3.5" />
              Secure checkout powered by Stripe
            </p>
          </div>
        </article>
      </div>

      {/* Feature-by-feature comparison */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-xl text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-[#f6f8f6] text-xs uppercase tracking-widest text-neutral-500">
                <th
                  scope="col"
                  className="px-5 py-3.5 font-semibold"
                >
                  What&apos;s included
                </th>
                <th
                  scope="col"
                  className="w-36 px-5 py-3.5 text-center font-semibold"
                >
                  Free
                </th>
                <th
                  scope="col"
                  className="w-36 px-5 py-3.5 text-center font-semibold text-[#0b5c4b]"
                >
                  Pro
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {config.comparison.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="px-5 py-3.5 font-medium text-neutral-700"
                  >
                    {row.label}
                  </th>
                  <td className="px-5 py-3.5 text-center">
                    <ComparisonValueCell value={row.free} />
                  </td>
                  <td className="bg-[#f8fbf9] px-5 py-3.5 text-center">
                    <ComparisonValueCell value={row.pro} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const PricingPage = () => {
  return (
    <div>
      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 text-center lg:px-10 lg:py-16">
          <span className="inline-flex items-center rounded-full bg-[#e7f4ef] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0b5c4b]">
            Plans &amp; Pricing
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-[#04382f] lg:text-4xl">
            Simple pricing for students and tutors
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 lg:text-base">
            Start for free, then upgrade when you need more. Pick the comparison
            for your role below to see exactly what is included in Free and Pro.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs text-neutral-500">
            {["No setup fees", "Cancel anytime", "Secure Stripe checkout"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 text-[#2c9b80]" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <div className="bg-[#f6f8f6] py-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 lg:gap-20 lg:px-10">
          {rolePlans.map((config) => (
            <RolePricingSection key={config.role} config={config} />
          ))}

          <p className="text-center text-sm text-neutral-500">
            Need help choosing?{" "}
            <Link
              href="/about"
              className="font-semibold text-[#0b5c4b] underline-offset-4 hover:underline"
            >
              Learn more about MentorLagbe
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
