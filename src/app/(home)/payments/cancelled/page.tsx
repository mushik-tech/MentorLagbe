import Link from "next/link";

const CancelledPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center px-6 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff9e0] text-[#a67c00] ring-1 ring-[#f4d21f]/40">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 8v5m0 3h.01"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="9" />
        </svg>
      </div>

      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#04382f]">
        Payment cancelled
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base">
        Your checkout was closed before the payment was completed. No charge was
        made, and your account is exactly as it was.
      </p>

      <div className="mt-8 w-full rounded-3xl border border-neutral-200 bg-white p-6 text-left shadow-[0_24px_50px_-40px_rgba(4,56,47,0.6)] lg:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
          What happened?
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          You left the secure Stripe checkout before confirming your upgrade.
          Your plan has not changed and you can come back to it at any time.
        </p>

        <ul className="mt-5 space-y-3 border-t border-neutral-100 pt-5 text-sm text-neutral-700">
          {["No charge was made", "Your account details are safe", "You can retry whenever you like"].map(
            (item) => (
              <li key={item} className="flex items-start gap-2.5">
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
                <span>{item}</span>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
        <Link
          href="/payments"
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#04382f] text-sm font-bold text-white shadow-[0_18px_30px_-22px_rgba(4,56,47,0.9)] transition hover:bg-[#075144] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04382f]"
        >
          Try payment again
        </Link>
        <Link
          href="/pricing"
          className="flex h-12 flex-1 items-center justify-center rounded-full border border-[#0b5c4b]/25 bg-white text-sm font-semibold text-[#075144] transition hover:border-[#0b5c4b]/45 hover:bg-[#f1f8f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5c4b]"
        >
          Back to pricing
        </Link>
      </div>

      <p className="mt-6 text-xs text-neutral-500">
        Questions?{" "}
        <Link
          href="/about"
          className="font-semibold text-[#0b5c4b] underline-offset-4 hover:underline"
        >
          Learn more about MentorLagbe
        </Link>
      </p>
    </div>
  );
};

export default CancelledPage;
