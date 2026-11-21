import Image from "next/image";
import { Chip, Table } from "@heroui/react";
import { IUser } from "@/types/users";
import UserRoleSelect from "@/components/Admin/UserRoleSelect";

type UsersTableProps = {
  users: IUser[];
};

type RoleMeta = {
  label: string;
  color: "default" | "accent" | "success";
};

const roleMeta: Record<string, RoleMeta> = {
  student: { label: "Student", color: "default" },
  tutor: { label: "Tutor", color: "accent" },
  admin: { label: "Admin", color: "success" },
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function formatDate(value: string) {
  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? "—" : dateFormatter.format(date);
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function UsersTable({ users }: UsersTableProps) {
  return (
    <Table variant="primary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Registered users" className="min-w-200">
          <Table.Header>
            <Table.Column isRowHeader>User</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Email status</Table.Column>
            <Table.Column>Plan</Table.Column>
            <Table.Column>Joined</Table.Column>
            <Table.Column className="text-end">Manage role</Table.Column>
          </Table.Header>

          <Table.Body>
            {users.map((user) => {
              const role = roleMeta[user.role] ?? {
                label: user.role,
                color: "default" as const,
              };

              return (
                <Table.Row key={user._id} id={user._id}>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e7f4ef] text-sm font-bold text-[#075144] ring-1 ring-black/5">
                        {user.image ? (
                          <Image
                            src={user.image}
                            alt=""
                            fill
                            unoptimized
                            sizes="40px"
                            className="object-cover"
                          />
                        ) : (
                          <span>{getInitials(user.name)}</span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="max-w-56 truncate font-semibold text-[#04382f]">
                          {user.name}
                        </p>
                        <p className="max-w-56 truncate text-xs text-neutral-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <Chip variant="soft" color={role.color}>
                      {role.label}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <Chip
                      variant="soft"
                      color={user.emailVerified ? "success" : "warning"}
                    >
                      {user.emailVerified ? "Verified" : "Pending"}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="font-medium capitalize text-[#04382f]">
                      {user.subscriptionPlan}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="text-sm text-neutral-600">
                      {formatDate(user.createdAt)}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex justify-end">
                      <UserRoleSelect user={user} />
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
