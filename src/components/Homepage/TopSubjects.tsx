import Link from "next/link";

const subjects = [
  {
    name: "Mathematics",
    tutors: "320+ tutors",
    href: "/tuitions?subject=mathematics",
    chipClass: "bg-[#e7f4ef] text-[#0b5c4b]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <path
          d="M3.5 12.5h3.1l2.3 6L13 5h7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Physics",
    tutors: "210+ tutors",
    href: "/tuitions?subject=physics",
    chipClass: "bg-[#e8eefc] text-[#2f4f94]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <path
          d="M13 2.5 5 13.5h5.5L10.5 21.5 19 10.5h-5.5L13 2.5Z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Programming",
    tutors: "180+ tutors",
    href: "/tuitions?subject=programming",
    chipClass: "bg-[#fdf6d3] text-[#8a6d00]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <path
          d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "IELTS",
    tutors: "140+ tutors",
    href: "/tuitions?subject=ielts",
    chipClass: "bg-[#fdeaea] text-[#a63a2e]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17" />
        <path d="M12 3.5c2.4 2.3 3.7 5.2 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.2-3.7-8.5S9.6 5.8 12 3.5Z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10K+", label: "Active learners" },
  { value: "1.2K", label: "Verified tutors" },
  { value: "25K+", label: "Sessions booked" },
  { value: "4.9/5", label: "Average rating" },
];

const testimonials = [
  {
    quote:
      "I found a physics tutor in two days. The profiles and reviews made it easy to pick someone who actually matched my level.",
    name: "Nusrat Jahan",
    role: "HSC Student · Dhaka",
    initials: "NJ",
    avatarClass: "bg-[#e7f4ef] text-[#0b5c4b]",
  },
  {
    quote:
      "Posting my IELTS batch took minutes, and I now get requests from students who are already a good fit for the schedule.",
    name: "Tanvir Ahmed",
    role: "IELTS Tutor · Chattogram",
    initials: "TA",
    avatarClass: "bg-[#fdf6d3] text-[#8a6d00]",
  },
  {
    quote:
      "Messaging and session notes keep everything in one place. I have booked six programming sessions and never missed a deadline.",
    name: "Sadia Rahman",
    role: "Programming Student · Sylhet",
    initials: "SR",
    avatarClass: "bg-[#e8eefc] text-[#2f4f94]",
  },
];

export default function TopSubjects() {
  return (
    <section
      id="subjects"
      aria-labelledby="subjects-heading"
      className="bg-[#f6f8f6] py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Popular subjects */}
        <div className="md:flex md:items-end md:justify-between md:gap-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full bg-[#e7f4ef] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0b5c4b]">
              Top Subjects
            </span>
            <h2
              id="subjects-heading"
              className=" mt-4 text-3xl font-extrabold tracking-tight text-[#04382f] lg:text-4xl"
            >
              Learn the subjects learners ask for most
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base">
              Explore in-demand subjects and connect with verified tutors who
              teach them every day.
            </p>
          </div>
          <Link
            href="/tuitions"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b5c4b] transition hover:text-[#075144] md:mt-0 md:shrink-0"
          >
            Browse all tuitions
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

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.name}
              href={subject.href}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#2c9b80]/40 hover:shadow-[0_20px_40px_-32px_rgba(4,56,47,0.7)] lg:p-5"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${subject.chipClass}`}
              >
                {subject.icon}
              </span>
              <span className=" mt-4 text-sm font-semibold text-[#04382f] lg:text-base">
                {subject.name}
              </span>
              <span className="mt-1 text-xs text-neutral-500">
                {subject.tutors}
              </span>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0b5c4b]">
                Explore
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                >
                  <path
                    d="M4 12h15m-6-6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Platform statistics */}
        <h3 className="sr-only">MentorLagbe platform statistics</h3>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 rounded-3xl bg-[#075144] bg-[radial-gradient(120%_140%_at_15%_0%,rgba(44,155,128,0.45)_0%,transparent_55%)] px-6 py-8 text-white md:grid-cols-4 lg:mt-12 lg:gap-x-10 lg:px-10 lg:py-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1">
              <dt className="text-[10px] font-medium uppercase tracking-widest text-white/65 lg:text-[11px] lg:tracking-[0.12em]">
                {stat.label}
              </dt>
              <dd className=" text-3xl font-extrabold tracking-tight lg:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Testimonials */}
        <div className="mt-14 lg:mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h3 className=" text-2xl font-bold tracking-tight text-[#04382f] lg:text-3xl">
                What our community says
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Real feedback from verified students and tutors on MentorLagbe.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-[#0b5c4b] ring-1 ring-neutral-200">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path
                  d="m5 12.5 4.5 4.5L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Verified reviews
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3 lg:gap-6">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_20px_45px_-40px_rgba(4,56,47,0.6)] lg:p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-0.5 text-[#e0b400]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M10 1.6l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6l-5.1 2.7 1-5.7-4.1-4 5.7-.8L10 1.6Z" />
                      </svg>
                    ))}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#e7f4ef] px-2.5 py-1 text-[10px] font-semibold text-[#0b5c4b]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                    >
                      <path
                        d="m5 12.5 4.5 4.5L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Verified
                  </span>
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-neutral-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3 pt-6">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${testimonial.avatarClass}`}
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#04382f]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
