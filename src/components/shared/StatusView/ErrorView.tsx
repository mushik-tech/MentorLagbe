"use client";

import Link from "next/link";
import { useEffect } from "react";
import StatusView from "./StatusView";

export default function ErrorView({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusView
      code="500"
      eyebrow="Unexpected error"
      title="Something went wrong"
      description="We hit a snag while loading this page. Your data is safe — give it another try, or head back to the homepage."
      iconClassName="bg-[#fff4f2] text-[#a63a2e] ring-1 ring-[#e63a2e]/20"
      icon={
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
        >
          <path
            d="M12 4.5 2.8 20h18.4L12 4.5Z"
            strokeLinejoin="round"
          />
          <path d="M12 10v4.5m0 3h.01" strokeLinecap="round" />
        </svg>
      }
      actions={
        <>
          <button
            type="button"
            onClick={retry}
            className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#04382f] px-6 text-sm font-bold text-white shadow-[0_18px_30px_-22px_rgba(4,56,47,0.9)] transition hover:bg-[#075144] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04382f]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="flex h-12 flex-1 items-center justify-center rounded-full border border-[#0b5c4b]/25 bg-white px-6 text-sm font-semibold text-[#075144] transition hover:border-[#0b5c4b]/45 hover:bg-[#f1f8f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5c4b]"
          >
            Back to Home
          </Link>
        </>
      }
    />
  );
}
