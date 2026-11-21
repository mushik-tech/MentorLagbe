import ApplicantStatusSelect from "@/components/Tuition/ApplicantStatusSelect";
import type { IApplication } from "@/types/applications";
import { Table } from "@heroui/react";

type TutorApplicantsTableProps = {
  applications: IApplication[];
};

function formatSchedule(value: string) {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?$/i);

  if (!match) {
    return value || "—";
  }

  const hour = Number(match[1]) % 12 || 12;
  const meridiem = (match[3]?.toUpperCase() ??
    (Number(match[1]) >= 12 ? "PM" : "AM"));

  return `${hour}:${match[2]} ${meridiem}`;
}

export default function TutorApplicantsTable({
  applications,
}: TutorApplicantsTableProps) {
  return (
    <Table variant="primary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Tutor applicants" className="min-w-200">
          <Table.Header>
            <Table.Column isRowHeader>Student</Table.Column>
            <Table.Column>Tuition &amp; time</Table.Column>
            <Table.Column>Note</Table.Column>
            <Table.Column className="text-end">Status</Table.Column>
          </Table.Header>

          <Table.Body>
            {applications.map((application) => (
              <Table.Row key={application._id} id={application._id}>
                <Table.Cell>
                  <div className="min-w-0">
                    <p className="max-w-56 truncate font-medium text-[#04382f]">
                      {application.studentName}
                    </p>
                    <p className="max-w-56 truncate font-medium text-[#04382f]">
                      {application.studentEmail}
                    </p>
                    <p className="max-w-56 truncate font-medium text-[#04382f]">
                      {application.studentPhone}
                    </p>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  <div className="min-w-0">
                    <p className="max-w-56 truncate font-medium text-[#04382f]">
                      {application.tuitionTitle}
                    </p>
                    <p className="max-w-56 truncate font-medium text-[#04382f]">
                      {formatSchedule(application.preferredSchedule)}
                    </p>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  <p className="max-w-80 whitespace-pre-wrap wrap-break-word text-sm text-neutral-600">
                    {application.studentNote || "—"}
                  </p>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex justify-end">
                    <ApplicantStatusSelect application={application} />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
