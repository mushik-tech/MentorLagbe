import Link from "next/link";

const freeFeatures = [
  "Create a student or tutor profile",
  "Browse verified mentors and tuitions",
  "3 mentorship requests each month",
  "Save mentors to your shortlist",
  "Access free community resources",
  "Weekly mentorship tips newsletter",
  "Email support",
];

const proFeatures = [
  "Unlimited mentorship requests",
  "Priority placement in search results",
  "Direct messaging with mentors",
  "Session notes and shared resources",
  "Priority support, 7 days a week",
];

export default function Subscription() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-[#f6f8f6] py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#e7f4ef] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0b5c4b]">
            Plans &amp; Pricing
          </span>
          <h2
            id="pricing-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-[#04382f] lg:text-4xl"
          >
            Pick the plan that fits your goals
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base">
            Start for free and upgrade when you are ready. Pro is $10/month for
            students and $15/month for tutors — same features, your choice of
            role.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mx-auto lg:mt-12 lg:max-w-5xl lg:gap-8">
          {/* Free plan */}
          <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_50px_-40px_rgba(4,56,47,0.6)] lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-[#04382f]">Free</h3>
              <span className="rounded-full bg-[#eef2ef] px-3 py-1 text-[11px] font-medium text-[#3d5b52]">
                For students &amp; tutors
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Everything you need to explore mentors and get a feel for
              MentorLagbe.
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
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex gap-2.5">
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

            <div className="mt-auto pt-8">
              <Link
                href="/signup"
                className="flex h-12 w-full items-center justify-center rounded-full border border-[#0b5c4b]/25 bg-white text-sm font-semibold text-[#075144] transition hover:border-[#0b5c4b]/45 hover:bg-[#f1f8f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5c4b]"
              >
                Get Started Free
              </Link>
              <p className="mt-3 text-center text-xs text-neutral-500">
                Upgrade to Pro whenever you need more.
              </p>
            </div>
          </div>

          {/* Pro plan */}
          <div className="flex h-full flex-col rounded-3xl bg-linear-to-br from-[#075144] via-[#064a3e] to-[#04382f] p-6 text-white shadow-[0_35px_70px_-35px_rgba(4,56,47,0.85)] ring-1 ring-white/5 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className=" text-xl font-semibold text-white">Pro</h3>
              <span className="rounded-full bg-[#f4d21f] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#04382f]">
                Most Popular
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Unlimited access to mentors, priority visibility, and direct
              messaging for students and tutors.
            </p>

            <dl className="mt-6 divide-y divide-white/15 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
              <div className="flex items-baseline justify-between gap-3 px-4 py-3.5">
                <dt className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-[#8fd9c7]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11"
                      strokeLinecap="round"
                    />
                  </svg>
                  Students
                </dt>
                <dd className=" text-2xl font-bold text-white">
                  $10
                  <span className="ml-1 text-xs font-normal text-white/65">
                    /month
                  </span>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 px-4 py-3.5">
                <dt className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-[#f4d21f]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="7" width="18" height="13" rx="2.5" />
                    <path
                      d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"
                      strokeLinecap="round"
                    />
                  </svg>
                  Tutors
                </dt>
                <dd className=" text-2xl font-bold text-white">
                  $15
                  <span className="ml-1 text-xs font-normal text-white/65">
                    /month
                  </span>
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-white/60">
              Billed monthly · Cancel anytime.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex gap-2.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8fd9c7]"
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

            <div className="mt-auto pt-8">
              <Link
                href="/payments"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f4d21f] text-sm font-bold text-[#04382f] transition hover:bg-[#e8c50f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d21f]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2.5" y="5" width="19" height="14" rx="3" />
                  <path d="M2.5 10h19" />
                </svg>
                Subscribe with Stripe
              </Link>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-white/60">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
                  <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" strokeLinecap="round" />
                </svg>
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
