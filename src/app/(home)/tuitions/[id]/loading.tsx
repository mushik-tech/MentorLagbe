export default function Loading() {
  return (
    <section className="bg-[#f6f8f6] pb-16 pt-6 sm:pt-8 lg:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Back Link */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-36 animate-pulse rounded bg-emerald-100" />
        </div>

        {/* Main Surface */}
        <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-md">
          {/* Banner */}
          <div className="aspect-video animate-pulse bg-[#e7f4ef] sm:aspect-21/9" />

          <div className="p-5 sm:p-7">
            {/* Status */}
            <div className="flex flex-wrap gap-3">
              <div className="h-8 w-24 animate-pulse rounded-full bg-neutral-200" />
              <div className="h-8 w-28 animate-pulse rounded-full bg-neutral-200" />
            </div>

            {/* Title + Apply Button */}
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1 space-y-3">
                <div className="h-8 w-full max-w-2xl animate-pulse rounded-lg bg-neutral-200 sm:h-10" />
                <div className="h-4 w-40 animate-pulse rounded bg-neutral-100" />
              </div>

              <div className="h-12 w-full animate-pulse rounded-xl bg-emerald-100 lg:w-40" />
            </div>

            {/* Info Cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-200 bg-[#f9fbf9] px-3.5 py-3"
                >
                  <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />

                  <div className="mt-3 h-5 w-32 animate-pulse rounded bg-neutral-200" />
                </div>
              ))}
            </div>

            {/* About Tuition */}
            <div className="mt-6">
              <div className="h-6 w-40 animate-pulse rounded bg-neutral-200" />

              <div className="mt-4 space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-neutral-100" />
                <div className="h-4 w-full animate-pulse rounded bg-neutral-100" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-100" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
