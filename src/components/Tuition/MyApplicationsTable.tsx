import { Button, Chip, Table } from "@heroui/react";
import type { IApplication } from "@/types/applications";
import MyApplicationsTableActions from "@/components/Tuition/MyApplicationsTableActions";

type MyApplicationsTableProps = {
  applications: IApplication[];
};

type StatusMeta = {
  label: string;
  color: "default" | "success" | "warning" | "danger";
};

const statusMeta: Record<string, StatusMeta> = {
  pending: { label: "Pending", color: "warning" },
  accepted: { label: "Accepted", color: "success" },
  rejected: { label: "Rejected", color: "danger" },
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

function formatFee(value: string) {
  const amount = Number(value);

  return Number.isFinite(amount)
    ? `৳${amount.toLocaleString("en-US")}`
    : `৳${value}`;
}

export default function MyApplicationsTable({
  applications,
}: MyApplicationsTableProps) {
  return (
    <Table variant="primary">
      <Table.ScrollContainer>
        <Table.Content aria-label="My applications" className="min-w-200">
          <Table.Header>
            <Table.Column isRowHeader>Tuition</Table.Column>
            <Table.Column>Tutor name &amp; email</Table.Column>
            <Table.Column>Monthly fee</Table.Column>
            <Table.Column>Applied date</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {applications.map((application) => {
              const status = statusMeta[application.status] ?? {
                label: application.status,
                color: "default" as const,
              };

              return (
                <Table.Row key={application._id} id={application._id}>
                  <Table.Cell>
                    <div className="min-w-0">
                      <p className="max-w-64 truncate font-semibold text-[#04382f]">
                        {application.tuitionTitle}
                      </p>
                      <p className="max-w-64 truncate text-xs text-neutral-500">
                        {application.subject}
                      </p>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="max-w-56 truncate font-medium text-[#04382f]">
                      {application.tutorName}
                    </p>
                    <p className="max-w-56 truncate text-xs text-neutral-500">
                      {application.tutorEmail}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="font-semibold text-[#04382f]">
                      {formatFee(application.monthlyFee)}
                    </p>
                    <p className="text-xs text-neutral-500">per month</p>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="text-sm text-neutral-600">
                      {formatDate(application.appliedAt)}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <Chip size="sm" variant="soft" color={status.color}>
                      {status.label}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <MyApplicationsTableActions application={application}></MyApplicationsTableActions>
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
