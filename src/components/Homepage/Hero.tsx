import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#075144] text-white"
    >
      {/* Layered background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,#8ac9ba_0%,#5aa998_10%,#176a57_24%,#075144_48%,#075144_68%,#1f7f6b_84%,#7fc1b3_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_160px)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.07)_0px,rgba(255,255,255,0.07)_90px,transparent_90px,transparent_170px)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(95%_125%_at_58%_38%,transparent_28%,rgba(3,58,49,0.38)_100%)]"
      />

      {/* Soft blurred sparkle, bottom left */}
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="absolute bottom-8 left-4 z-0 h-10 w-10 rotate-12 fill-[#f4d21f] opacity-60 blur-[2px] sm:left-8 sm:h-12 sm:w-12"
      >
        <path d="M24 0c2 13 9 20 24 24-15 4-22 11-24 24-2-13-9-20-24-24C15 20 22 13 24 0Z" />
      </svg>

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 pt-14 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-4 lg:px-10 lg:pt-16">
        {/* Copy and search */}
        <div className="relative z-20 min-w-0 max-w-[660px] pb-10 sm:pb-12 lg:pb-8">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium tracking-wide text-emerald-50 ring-1 ring-white/15 backdrop-blur-sm">
            Top Rated Mentors From Around the World
          </span>

          <h1
            id="hero-heading"
            className="font-display mt-5 text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.7rem] lg:text-[2.3rem] xl:text-[2.8rem]"
          >
            Accelerate Your Success with
            <span className="mt-0.5 block">
              Expert{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#8fd14f] via-[#b7d94a] to-[#f2da3a] bg-clip-text text-transparent">
                  Mentorship
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 260 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-[#f4d21f]"
                  fill="none"
                >
                  <path
                    d="M3 9C58 3 148 2 257 7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/85 sm:text-base">
            Get one on one guidance from verified mentors across career,
            business, tech, and personal development.
          </p>

          <form
            action="/tuitions"
            method="get"
            className="mt-8 flex w-full max-w-[600px] items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-[0_22px_50px_-18px_rgba(0,0,0,0.55)] ring-1 ring-black/5 transition focus-within:ring-2 focus-within:ring-[#f4d21f]/70"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-neutral-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" strokeLinecap="round" />
            </svg>

            <label htmlFor="hero-search" className="sr-only">
              Search for a mentor or topic
            </label>
            <input
              id="hero-search"
              name="q"
              type="search"
              placeholder="Search for a mentor or topic..."
              className="h-10 min-w-0 flex-1 bg-transparent text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none sm:text-[15px]"
            />

            <div className="hidden h-8 w-px shrink-0 bg-neutral-200 sm:block" />

            <div className="relative hidden shrink-0 items-center sm:flex">
              <label htmlFor="hero-category" className="sr-only">
                Category
              </label>
              <select
                id="hero-category"
                name="category"
                defaultValue=""
                className="h-10 cursor-pointer appearance-none bg-transparent pl-3 pr-8 text-sm font-medium text-neutral-700 focus:outline-none"
              >
                <option value="">All Categories</option>
                <option value="career">Career</option>
                <option value="business">Business</option>
                <option value="tech">Tech</option>
                <option value="personal-development">Personal Development</option>
                <option value="academic">Academic</option>
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="pointer-events-none absolute right-2 h-4 w-4 text-neutral-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <button
              type="submit"
              aria-label="Browse tuitions"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b5c4b] text-white transition hover:bg-[#084a3c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5c4b]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
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
            </button>
          </form>

          <div className="mt-10 inline-flex max-w-full items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)] sm:mt-12 sm:gap-3.5 sm:px-4 sm:py-3 lg:mt-24">
            <Image
              src="/trusted-avatars.png"
              alt=""
              aria-hidden="true"
              width={320}
              height={92}
              className="h-9 w-auto shrink-0 sm:h-10"
            />
            <p className="text-[13px] text-neutral-700 sm:whitespace-nowrap sm:text-sm">
              Trusted by <span className="font-bold text-neutral-900">10K+</span>{" "}
              Learners
            </p>
          </div>
        </div>

        {/* Portrait and floating accents */}
        <div className="relative z-10 mx-auto h-[400px] w-full min-w-0 max-w-[480px] sm:h-[520px] lg:h-[580px] lg:max-w-none">
          <div className="relative mx-auto h-full w-full max-w-[420px] lg:w-[400px]">
            <div
              aria-hidden="true"
              className="absolute -bottom-12 left-0 top-[12%] w-[72%] -rotate-5 rounded-[42px] bg-[#2c9b80]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-12 right-0 top-[15%] w-[54%] rotate-4 rounded-[48px] bg-[#f4d21f]"
            />

            <svg
              aria-hidden="true"
              viewBox="0 0 48 48"
              className="absolute -right-2 top-0 z-20 h-10 w-10 fill-[#f4d21f] sm:h-12 sm:w-12"
            >
              <path d="M24 0l3.4 15.7L41 7l-8.3 13.6L48 24l-15.3 3.4L41 41l-13.6-8.3L24 48l-3.4-15.3L7 41l8.3-13.6L0 24l15.3-3.4L7 7l13.6 8.3L24 0Z" />
            </svg>

            <div className="absolute inset-x-0 bottom-0 top-4 z-10">
              <Image
                src="https://i.ibb.co.com/qMmTcPc2/portrait-female-teacher-holding-yellow-document-happy-green-removebg-preview.png"
                alt="Mentor smiling while holding a notebook"
                fill
                priority
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 420px, 85vw"
                className="object-contain object-bottom drop-shadow-[0_28px_45px_rgba(0,0,0,0.38)]"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -left-3 top-[45%] z-20 flex -translate-y-1/2 flex-col items-center gap-1.5 rounded-full bg-white p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-800">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                >
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
                </svg>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e63a2e] text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M6.6 3.6a1.7 1.7 0 0 1 2.4.3l1.6 2.2a1.7 1.7 0 0 1-.2 2.2l-.7.7a12.7 12.7 0 0 0 5.3 5.3l.7-.7a1.7 1.7 0 0 1 2.2-.2l2.2 1.6a1.7 1.7 0 0 1 .3 2.4l-1.2 1.5c-.8.9-2 1.3-3.1 1C11.3 18.9 5.1 12.7 4 7.8c-.3-1.1.1-2.3 1-3.1l1.6-1.1Z" />
                </svg>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-800">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                >
                  <rect x="3" y="6" width="12" height="12" rx="3" />
                  <path
                    d="m15 10 5-3v10l-5-3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
