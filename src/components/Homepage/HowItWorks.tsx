import Link from "next/link";
import type { ReactNode } from "react";

type Step = {
  title: string;
  description: string;
};

type WorkflowPanelProps = {
  title: string;
  tagline: string;
  steps: Step[];
  ctaLabel: string;
  ctaHref: string;
  icon: ReactNode;
  chipClass: string;
  lineClass: string;
  numberClass: string;
  ctaClass: string;
};

function WorkflowPanel({
  title,
  tagline,
  steps,
  ctaLabel,
  ctaHref,
  icon,
  chipClass,
  lineClass,
  numberClass,
  ctaClass,
}: WorkflowPanelProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_25px_55px_-45px_rgba(4,56,47,0.6)] lg:p-8">
      <div className="flex items-start gap-3">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${chipClass}`}
        >
          {icon}
        </span>
        <div>
          <h3 className=" text-xl font-bold text-[#04382f]">{title}</h3>
          <p className="mt-1 text-sm text-neutral-500">{tagline}</p>
        </div>
      </div>

      <ol className={`mt-8 space-y-6 border-l border-dashed ${lineClass}`}>
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span
              className={`-ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold ring-2 ${numberClass}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="-mt-0.5">
              <h4 className=" text-base font-semibold text-[#04382f]">
                {step.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-auto pt-8">
        <Link
          href={ctaHref}
          className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${ctaClass}`}
        >
          {ctaLabel}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              d="M4 12h15m-6-6 6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="bg-white py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#e7f4ef] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0b5c4b]">
            How MentorLagbe Works
          </span>
          <h2
            id="how-heading"
            className=" mt-4 text-3xl font-extrabold tracking-tight text-[#04382f] lg:text-4xl"
          >
            A simpler way to learn and teach
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base">
            Whether you are looking for the right mentor or filling your next
            batch, getting started takes just a few steps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mx-auto lg:mt-12 lg:max-w-6xl lg:gap-8">
          <WorkflowPanel
            title="For Students"
            tagline="Find a tutor in three simple steps"
            steps={[
              {
                title: "Search by subject",
                description:
                  "Filter by subject, level, budget, and availability to shortlist the mentors who fit your goals.",
              },
              {
                title: "Compare verified profiles",
                description:
                  "Check ratings, reviews, and intro videos before you start a conversation.",
              },
              {
                title: "Book your first session",
                description:
                  "Send a request, agree on a schedule, and join your session online or in person.",
              },
            ]}
            ctaLabel="Browse Tuitions"
            ctaHref="/tuitions"
            chipClass="bg-[#e7f4ef] text-[#0b5c4b]"
            lineClass="border-[#2c9b80]/35"
            numberClass="text-[#0b5c4b] ring-[#2c9b80]/40"
            ctaClass="bg-[#075144] text-white hover:bg-[#064a3e] focus-visible:outline-[#075144]"
            icon={
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16.5 16.5 4 4" strokeLinecap="round" />
              </svg>
            }
          />

          <WorkflowPanel
            title="For Tutors"
            tagline="Start teaching in three simple steps"
            steps={[
              {
                title: "Create your profile",
                description:
                  "Add your subjects, experience, hourly rate, and verification documents.",
              },
              {
                title: "Post a batch or slot",
                description:
                  "Publish your schedule, batch size, and monthly fee in just a few minutes.",
              },
              {
                title: "Accept requests",
                description:
                  "Review student requests, confirm bookings, and manage every session from your dashboard.",
              },
            ]}
            ctaLabel="Become a Tutor"
            ctaHref="/signup?role=tutor"
            chipClass="bg-[#fdf6d3] text-[#8a6d00]"
            lineClass="border-[#f4d21f]/60"
            numberClass="text-[#8a6d00] ring-[#f4d21f]/70"
            ctaClass="bg-[#f4d21f] text-[#04382f] hover:bg-[#e8c50f] focus-visible:outline-[#f4d21f]"
            icon={
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
              >
                <circle cx="10" cy="8" r="3.5" />
                <path
                  d="M3.5 20c0-3.4 2.9-5.8 6.5-5.8 1.5 0 2.9.4 4 1.2"
                  strokeLinecap="round"
                />
                <path d="M18 12v6M15 15h6" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
