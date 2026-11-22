import { Surface } from "@heroui/react";

export default function Loading() {
  return (
    <section className="bg-[#f6f8f6] pb-16 pt-6 sm:pt-8 lg:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="h-7 w-48 animate-pulse rounded-md bg-neutral-200 sm:h-8" />

            <div className="mt-2 h-4 w-64 max-w-full animate-pulse rounded bg-neutral-100" />
          </div>

          {/* Result count */}
          <div className="h-10 w-24 animate-pulse rounded-full bg-emerald-100" />
        </div>

        {/* Search */}
        <div className="mt-6 sm:mt-8">
          <div className="h-14 w-full animate-pulse rounded-2xl border border-neutral-200 bg-white" />
        </div>

        {/* Sidebar + Results */}
        <div className="mt-5 grid items-start gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Filters Skeleton */}
          <aside className="lg:col-span-3">
            <Surface className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-none">
              {/* Filter heading */}
              <div className="flex items-center justify-between">
                <div className="h-6 w-20 animate-pulse rounded bg-neutral-200" />
                <div className="h-4 w-12 animate-pulse rounded bg-neutral-100" />
              </div>

              {/* Filter sections */}
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="mt-6 border-t border-neutral-100 pt-5"
                >
                  <div className="h-4 w-28 animate-pulse rounded bg-neutral-200" />

                  <div className="mt-4 space-y-3">
                    {Array.from({ length: 3 }).map((_, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <div className="h-4 w-4 animate-pulse rounded bg-neutral-200" />
                        <div className="h-4 w-24 animate-pulse rounded bg-neutral-100" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Surface>
          </aside>

          {/* Tuition Cards */}
          <div className="min-w-0 lg:col-span-9">
            <div className="grid content-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white"
                >
                  {/* Banner */}
                  <div className="aspect-video animate-pulse bg-[#e7f4ef]" />

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* Subject + Class */}
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-28 animate-pulse rounded-full bg-neutral-200" />
                      <div className="h-4 w-20 animate-pulse rounded bg-neutral-100" />
                    </div>

                    {/* Title */}
                    <div className="mt-3 space-y-2">
                      <div className="h-5 w-full animate-pulse rounded bg-neutral-200" />
                      <div className="h-5 w-4/5 animate-pulse rounded bg-neutral-200" />
                    </div>

                    {/* Location + Schedule */}
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="h-4 w-28 animate-pulse rounded bg-neutral-100" />
                      <div className="h-4 w-24 animate-pulse rounded bg-neutral-100" />
                    </div>

                    {/* Fee + Button */}
                    <div className="mt-auto pt-5">
                      <div className="flex items-end justify-between gap-3 border-t border-neutral-100 pt-4">
                        <div className="h-7 w-24 animate-pulse rounded bg-neutral-200" />
                        <div className="h-9 w-28 animate-pulse rounded-xl bg-emerald-100" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
