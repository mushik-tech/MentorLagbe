import { Books } from "@gravity-ui/icons";
import { Chip, EmptyState, Surface } from "@heroui/react";
import Link from "next/link";
import TuitionCard from "@/components/Tuition/TuitionCard";
import TuitionFilters from "@/components/Tuition/TuitionFilters";
import { getTuitions } from "@/lib/api/tuitions";

export const dynamic = "force-dynamic";

const BrowseTuitionsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const urlSearch = new URLSearchParams(params as Record<string, string>);
  const query = urlSearch.toString();

  const allTuitions = await getTuitions(query);

  const tuitions = (Array.isArray(allTuitions) ? allTuitions : []).filter(
    (tuition) => tuition.approvalStatus === "approved" && tuition.isActive,
  );

  const subjects = Array.from(
    new Set(tuitions.map((tuition) => tuition.subject).filter(Boolean)),
  ).sort((a, b) => a.localeCompare(b));

  return (
    <section className="bg-[#f6f8f6] pb-16 lg:pb-20 pt-8">
      {/* Sidebar + results */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#04382f] sm:text-2xl">
                  Available tuitions
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Showing {tuitions.length} approved and active{" "}
                  {tuitions.length === 1 ? "tuition" : "tuitions"}.
                </p>
              </div>

              <Chip variant="soft" color="accent" size="lg">
                {tuitions.length} {tuitions.length === 1 ? "result" : "results"}
              </Chip>
            </div>

            {tuitions.length > 0 ? (
              <div className="mt-8 grid gap-6 lg:grid-cols-12">
                <TuitionFilters subjects={subjects} />

                <div className="col-span-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {tuitions.map((tuition) => (
                    <TuitionCard key={tuition._id} tuition={tuition} />
                  ))}
                </div>
              </div>
            ) : (
              <Surface className="mt-5 rounded-3xl border border-black/5 bg-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)]">
                <EmptyState className="flex flex-col items-center gap-3 px-6 py-16 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ef] text-[#075144]">
                    <Books aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-[#04382f]">
                      No tuitions available yet
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Approved and active tuition posts will appear here.
                    </p>
                  </div>
                </EmptyState>
              </Surface>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseTuitionsPage;
