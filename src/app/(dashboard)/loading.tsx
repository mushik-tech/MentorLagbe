import Skeleton from "@/components/shared/Skeleton/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading dashboard" className="space-y-6">
      <div className="max-w-2xl">
        <Skeleton className="h-8 w-64 rounded-lg" />
        <Skeleton className="mt-3 h-4 w-full max-w-md rounded-full" />
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[0, 1, 2, 3].map((card) => (
          <div
            key={card}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <Skeleton className="h-10 w-10 rounded-xl" />
            <Skeleton className="mt-4 h-8 w-24 rounded-lg" />
            <Skeleton className="mt-2 h-3.5 w-32 rounded-full" />
          </div>
        ))}
      </div>

      {/* Wide content panel */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <div className="flex items-center justify-between gap-4">
          <Skeleton className="h-6 w-40 rounded-lg" />
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>

        <div className="mt-6 space-y-3">
          <Skeleton className="h-10 w-full rounded-lg bg-neutral-200" />
          {[0, 1, 2, 3, 4, 5].map((row) => (
            <div key={row} className="flex items-center gap-4 py-1.5">
              <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
              <Skeleton className="h-4 w-1/4 rounded-full" />
              <Skeleton className="hidden h-4 w-1/5 rounded-full sm:block" />
              <Skeleton className="ml-auto h-6 w-20 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only">Loading dashboard…</span>
    </div>
  );
}
