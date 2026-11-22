import Skeleton from "@/components/shared/Skeleton/Skeleton";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="bg-[#f6f8f6]"
    >
      {/* Hero placeholder */}
      <div className="bg-[#075144]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-20">
          <div>
            <Skeleton className="h-7 w-64 rounded-full bg-white/15" />
            <Skeleton className="mt-6 h-11 w-full max-w-lg rounded-xl bg-white/15" />
            <Skeleton className="mt-3 h-11 w-3/4 max-w-md rounded-xl bg-white/15" />
            <Skeleton className="mt-6 h-4 w-full max-w-md rounded-full bg-white/15" />
            <Skeleton className="mt-2 h-4 w-2/3 max-w-sm rounded-full bg-white/15" />
            <div className="mt-8 flex gap-3">
              <Skeleton className="h-12 w-36 rounded-full bg-white/20" />
              <Skeleton className="h-12 w-32 rounded-full bg-white/15" />
            </div>
          </div>
          <div className="mx-auto hidden h-80 w-full max-w-md rounded-[42px] bg-white/10 lg:block" />
        </div>
      </div>

      {/* Content placeholder */}
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <Skeleton className="mx-auto h-6 w-40 rounded-full" />
          <Skeleton className="mx-auto mt-4 h-9 w-full max-w-sm rounded-xl" />
          <Skeleton className="mx-auto mt-3 h-4 w-full max-w-md rounded-full" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((card) => (
            <div
              key={card}
              className="rounded-3xl border border-neutral-200 bg-white p-6"
            >
              <Skeleton className="h-12 w-12 rounded-2xl" />
              <Skeleton className="mt-5 h-6 w-2/3 rounded-lg" />
              <div className="mt-4 space-y-3">
                <Skeleton className="h-4 w-full rounded-full" />
                <Skeleton className="h-4 w-11/12 rounded-full" />
                <Skeleton className="h-4 w-3/4 rounded-full" />
              </div>
              <Skeleton className="mt-7 h-10 w-32 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only">Loading page…</span>
    </div>
  );
}
