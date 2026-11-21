import { ListCheck } from "@gravity-ui/icons";
import { Chip, EmptyState, Surface } from "@heroui/react";
import TutorApplicantsTable from "@/components/Tuition/TutorApplicantsTable";
import { getApplications } from "@/lib/api/applications";
import { getSession } from "@/lib/core/server";

const ApplicantsPage = async () => {
  const session = await getSession();

  const applicants = await getApplications(`tutorEmail=${session?.user.email}`);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#04382f] sm:text-3xl">
            Manage applicants
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Review students who applied to your tuitions and update their
            application status.
          </p>
        </div>

        <Chip size="lg" variant="soft" color="accent">
          {applicants.length}{" "}
          {applicants.length === 1 ? "applicant" : "applicants"}
        </Chip>
      </div>

      {applicants.length > 0 ? (
        <TutorApplicantsTable applications={applicants} />
      ) : (
        <Surface className="rounded-3xl border border-black/5 bg-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)]">
          <EmptyState className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ef] text-[#075144]">
              <ListCheck aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[#04382f]">
                No applicants yet
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Applications to your tuition posts will show up here.
              </p>
            </div>
          </EmptyState>
        </Surface>
      )}
    </div>
  );
};

export default ApplicantsPage;
