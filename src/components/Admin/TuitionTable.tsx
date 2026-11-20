import Image from "next/image";
import { Button, Chip, Table } from "@heroui/react";
import { ITuition } from "@/types/tuitions";
import TuitionTableRowAction from "@/components/Admin/TuitionTableRowAction";


type TuitionTableProps = {
  tuitions: ITuition[];
};

type StatusMeta = {
  label: string;
  color: "default" | "success" | "warning" | "danger";
};

const statusMeta: Record<string, StatusMeta> = {
  approved: { label: "Approved", color: "success" },
  pending: { label: "Pending", color: "warning" },
  rejected: { label: "Rejected", color: "danger" },
};

const classLevelLabels: Record<string, string> = {
  "class-1-5": "Class 1–5",
  "class-6-8": "Class 6–8",
  ssc: "Class 9–10 (SSC)",
  hsc: "Class 11–12 (HSC)",
  admission: "Admission test",
  undergraduate: "Undergraduate",
  other: "Other",
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

export default function TuitionTable({ tuitions }: TuitionTableProps) {
  return (
    <Table variant="primary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Tuition listings" className="min-w-240">
          <Table.Header>
            <Table.Column isRowHeader>Tuition</Table.Column>
            <Table.Column>Class &amp; subject</Table.Column>
            <Table.Column>Mode</Table.Column>
            <Table.Column>Fee</Table.Column>
            <Table.Column>Submitted</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column className="text-end">Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {tuitions.map((tuition) => {
              const status = statusMeta[tuition.approvalStatus] ?? {
                label: tuition.approvalStatus,
                color: "default" as const,
              };

              return (
                <Table.Row key={tuition._id} id={tuition._id}>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-16 shrink-0 overflow-hidden rounded-xl bg-[#e7f4ef] ring-1 ring-black/5">
                        {tuition.banner ? (
                          <Image
                            src={tuition.banner}
                            alt=""
                            fill
                            unoptimized
                            sizes="64px"
                            className="object-cover"
                          />
                        ) : null}
                      </div>

                      <div className="min-w-0">
                        <p className="max-w-56 truncate font-semibold text-[#04382f]">
                          {tuition.title}
                        </p>
                        <p className="max-w-56 truncate text-xs text-neutral-500">
                          {tuition.tutorEmail}
                        </p>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="font-medium text-[#04382f]">
                      {tuition.subject}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {classLevelLabels[tuition.classLevel] ??
                        tuition.classLevel}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="font-medium capitalize text-[#04382f]">
                      {tuition.mode}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {tuition.location}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="font-semibold text-[#04382f]">
                      {formatFee(tuition.monthlyFee)}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {tuition.daysPerWeek} days/week
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="text-sm text-neutral-600">
                      {formatDate(tuition.createdAt)}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <Chip variant="soft" color={status.color}>
                      {status.label}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex items-center justify-end gap-2">
                      <TuitionTableRowAction
                        tuition={tuition}
                      ></TuitionTableRowAction>
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
