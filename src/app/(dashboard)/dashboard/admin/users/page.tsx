import { Persons } from "@gravity-ui/icons";
import { Chip, EmptyState, Surface } from "@heroui/react";
import UsersTable from "@/components/Admin/UsersTable";
import { getUsers } from "@/lib/api/users";

const AllUsersPage = async () => {
  const users = await getUsers();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#04382f] sm:text-3xl">
            Manage users
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            View every registered account and manage the role assigned to each
            user on the marketplace.
          </p>
        </div>

        <Chip size="lg" variant="soft" color="accent">
          {users.length} {users.length === 1 ? "user" : "users"}
        </Chip>
      </div>

      {users.length > 0 ? (
        <UsersTable users={users} />
      ) : (
        <Surface className="rounded-3xl border border-black/5 bg-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)]">
          <EmptyState className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ef] text-[#075144]">
              <Persons aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[#04382f]">
                No users yet
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                When people sign up, their accounts will show up here.
              </p>
            </div>
          </EmptyState>
        </Surface>
      )}
    </div>
  );
};

export default AllUsersPage;
