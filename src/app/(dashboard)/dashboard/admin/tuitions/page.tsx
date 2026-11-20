import { Books } from "@gravity-ui/icons";
import { Card, Chip, EmptyState, Surface } from "@heroui/react";
import TuitionTable from "@/components/Admin/TuitionTable";
import { getTuitions } from "@/lib/api/tuitions";

const ManageTuitionsPage = async () => {
  const tuitions = await getTuitions();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#04382f] sm:text-3xl">
            Manage tuitions
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Review every tuition submitted by tutors and decide which listings
            go live on the marketplace.
          </p>
        </div>

        <Chip size="lg" variant="soft" color="accent">
          {tuitions.length} {tuitions.length === 1 ? "listing" : "listings"}
        </Chip>
      </div>

      {tuitions.length > 0 ? (
        <TuitionTable tuitions={tuitions} />
      ) : (
        <Surface className="rounded-3xl border border-black/5 bg-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)]">
          <EmptyState className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ef] text-[#075144]">
              <Books aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[#04382f]">
                No tuition posts yet
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                When tutors submit a tuition, it will show up here for review.
              </p>
            </div>
          </EmptyState>
        </Surface>
      )}
    </div>
  );
};

export default ManageTuitionsPage;
