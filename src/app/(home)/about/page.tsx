import Link from "next/link";
import type { ReactNode } from "react";

const audiences = [
  {
    title: "For students",
    description:
      "Search by subject, compare mentors, and reach out to the people who can help you move forward faster.",
    href: "/tuitions",
    cta: "Browse tuitions",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" strokeLinejoin="round" />
        <path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" />
      </svg>
    ),
  },
  {
    title: "For tutors",
    description:
      "Create a profile, post tuitions, and connect with motivated learners who are ready to invest in themselves.",
    href: "/signup",
    cta: "Join as a tutor",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
        <path d="M3.5 12.5c2.5 1.7 5.2 2.5 8.5 2.5s6-.8 8.5-2.5" />
      </svg>
    ),
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center rounded-full bg-[#e7f4ef] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0b5c4b]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#04382f] lg:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base">
        {description}
      </p>
    </div>
  );
}

function AudienceCard({
  audience,
  accent,
}: {
  audience: (typeof audiences)[number];
  accent: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_25px_55px_-45px_rgba(4,56,47,0.6)] lg:p-8">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e7f4ef] text-[#0b5c4b]">
          {audience.icon}
        </span>
        <h3 className="mt-1 text-xl font-bold text-[#04382f]">
          {audience.title}
        </h3>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-neutral-600">
        {audience.description}
      </p>
      <div className="mt-auto pt-8">
        <Link
          href={audience.href}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#0b5c4b]/25 bg-white px-6 text-sm font-semibold text-[#075144] transition hover:border-[#0b5c4b]/45 hover:bg-[#f1f8f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5c4b]"
        >
          {audience.cta}
          {accent}
        </Link>
      </div>
    </article>
  );
}

const arrowIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
  >
    <path d="M4 12h15m-6-6 6 6-6 6" strokeLinecap="round" />
  </svg>
);

const AboutPage = () => {
  return (
    <div>
      {/* Built for both sides */}
      <section className="bg-[#f6f8f6] py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why we exist"
            title="One place to learn and to teach"
            description="Whether you are looking for your next breakthrough or your next student, MentorLagbe is designed around what matters to you."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mx-auto lg:mt-12 lg:max-w-5xl lg:gap-8">
            <AudienceCard audience={audiences[0]} accent={arrowIcon} />
            <AudienceCard audience={audiences[1]} accent={arrowIcon} />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#075144] via-[#064a3e] to-[#04382f] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
            <div className="relative">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Ready to take the next step?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75 lg:text-base">
                Create your free profile today and see how far the right mentor
                can take you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#f4d21f] px-7 text-sm font-bold text-[#04382f] transition hover:bg-[#e8c50f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d21f]"
                >
                  Get started free
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Compare plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
