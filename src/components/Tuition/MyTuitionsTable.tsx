import Image from "next/image";
import { Button, Chip, Table } from "@heroui/react";
import { Pencil, TrashBin } from "@gravity-ui/icons";
import TuitionStatusSwitch from "@/components/Tuition/TuitionStatusSwitch";
import type { ITuition, TStatus } from "@/types/tuitions";
import MyTuitionTableActions from "@/components/Tuition/MyTuitionTableActions";

type MyTuitionsTableProps = {
  tuitions: ITuition[];
};

type StatusMeta = {
  label: string;
  color: "success" | "warning" | "danger";
};

const statusMeta: Record<TStatus, StatusMeta> = {
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

export default function MyTuitionsTable({ tuitions }: MyTuitionsTableProps) {
  return (
    <Table variant="primary">
      <Table.ScrollContainer>
        <Table.Content aria-label="My tuitions" className="min-w-225">
          <Table.Header>
            <Table.Column isRowHeader>Tuition</Table.Column>
            <Table.Column>Class &amp; mode</Table.Column>
            <Table.Column>Fee</Table.Column>
            <Table.Column>Created</Table.Column>
            <Table.Column>Approval</Table.Column>
            <Table.Column>Active</Table.Column>
            <Table.Column className="text-end">Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {tuitions.map((tuition) => {
              const status = statusMeta[tuition.approvalStatus];

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
                          {tuition.subject}
                        </p>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="font-medium text-[#04382f]">
                      {classLevelLabels[tuition.classLevel] ??
                        tuition.classLevel}
                    </p>
                    <p className="text-xs text-neutral-500">
                      <span className="capitalize">{tuition.mode}</span>
                      {" · "}
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
                    <Chip size="sm" variant="soft" color={status.color}>
                      {status.label}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <TuitionStatusSwitch tuition={tuition} />
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex items-center justify-end gap-2">
                      <MyTuitionTableActions tuition={tuition}/>
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
