import type { Metadata } from "next";
import Link from "next/link";
import StatusView from "@/components/shared/StatusView/StatusView";

export const metadata: Metadata = {
  title: "Page not found | MentorLagbe",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <StatusView
      code="404"
      eyebrow="Page not found"
      title="We couldn't find that page"
      description="The link may be outdated, or the page may have moved. Let's get you back to where you need to be."
      iconClassName="bg-[#e7f4ef] text-[#0b5c4b]"
      icon={
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 5 5" strokeLinecap="round" />
          <path d="M8.5 10.5h4" strokeLinecap="round" />
        </svg>
      }
      details="If you followed a link from a message, check that it was copied correctly — otherwise the homepage is the quickest way back."
      actions={
        <>
          <Link
            href="/"
            className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#04382f] px-6 text-sm font-bold text-white shadow-[0_18px_30px_-22px_rgba(4,56,47,0.9)] transition hover:bg-[#075144] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04382f]"
          >
            Back to Home
          </Link>
          <Link
            href="/tuitions"
            className="flex h-12 flex-1 items-center justify-center rounded-full border border-[#0b5c4b]/25 bg-white px-6 text-sm font-semibold text-[#075144] transition hover:border-[#0b5c4b]/45 hover:bg-[#f1f8f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5c4b]"
          >
            Browse tuitions
          </Link>
        </>
      }
    />
  );
}
