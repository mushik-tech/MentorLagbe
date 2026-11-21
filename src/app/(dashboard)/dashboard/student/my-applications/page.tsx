import { PaperPlane } from "@gravity-ui/icons";
import { Chip, EmptyState, Surface } from "@heroui/react";
import MyApplicationsTable from "@/components/Tuition/MyApplicationsTable";
import { getApplications } from "@/lib/api/applications";
import { getSession } from "@/lib/session";

const MyApplicationsPage = async () => {
  const session = await getSession();

  const myApplications = await getApplications(
    `studentEmail=${session?.user.email}`,
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#04382f] sm:text-3xl">
            My applications
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Track the tuitions you have applied for and their current status.
          </p>
        </div>

        <Chip size="lg" variant="soft" color="accent">
          {myApplications.length}{" "}
          {myApplications.length === 1 ? "application" : "applications"}
        </Chip>
      </div>

      {myApplications.length > 0 ? (
        <MyApplicationsTable
          applications={myApplications}
        />
      ) : (
        <Surface className="rounded-3xl border border-black/5 bg-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)]">
          <EmptyState className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ef] text-[#075144]">
              <PaperPlane aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[#04382f]">
                No applications yet
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Tuitions you apply for will show up here.
              </p>
            </div>
          </EmptyState>
        </Surface>
      )}
    </div>
  );
};

export default MyApplicationsPage;
