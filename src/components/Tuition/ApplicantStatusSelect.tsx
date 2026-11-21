"use client";

import { updateApplicationStatus } from "@/lib/actions/applications";
import { IApplication } from "@/types/applications";
import { ListBox, Select, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const statusOptions = [
  { id: "accepted", label: "Accepted" },
  { id: "rejected", label: "Rejected" },
];

export default function ApplicantStatusSelect({
  application,
}: {
  application: IApplication;
}) {
  const defaultValue =
    application.status === "accepted" || application.status === "rejected"
      ? application.status
      : undefined;

  const router = useRouter();

  const handleUpdateStatus = async (value: any) => {
    const data = await updateApplicationStatus(application._id, value);

    if (data.modifiedCount > 0) {
      router.refresh();
      if (value === "accepted") {
        toast.success(
          `${application.studentName} has been enrolled in your tuition.`,
        );
      } else {
        toast.danger(
          `Declined ${application.studentName}'s tuition application.`,
        );
      }
    }
  };

  return (
    <Select
      variant="secondary"
      defaultValue={defaultValue}
      aria-label={`Update status for ${application.studentName}`}
      placeholder="Pending"
      className="w-30"
      onChange={handleUpdateStatus}
    >
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {statusOptions.map((option) => (
            <ListBox.Item
              key={option.id}
              id={option.id}
              textValue={option.label}
            >
              {option.label}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
