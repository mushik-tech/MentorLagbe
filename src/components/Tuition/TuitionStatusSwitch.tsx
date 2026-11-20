"use client";

import { useState } from "react";
import { Switch, toast } from "@heroui/react";
import { ITuition } from "@/types/tuitions";
import { updateActiveStatus } from "@/lib/actions/tuitions";

type TuitionStatusSwitchProps = {
  tuition: ITuition;
};

export default function TuitionStatusSwitch({
  tuition,
}: TuitionStatusSwitchProps) {
  const [selected, setSelected] = useState(tuition.isActive);

  const handleToggleActiveStatus = async () => {
    const data = await updateActiveStatus(tuition._id, selected);

    if (data.modifiedCount > 0) {
      if (!selected) {
        toast.success(`${tuition.title} currently active`);
      } else {
        toast.danger(`${tuition.title} currently closed`);
      }
    }
  };

  return (
    <Switch
      size="sm"
      isSelected={selected}
      onChange={setSelected}
      onClick={handleToggleActiveStatus}
    >
      <Switch.Content aria-label={`Toggle active status for ${tuition.title}`}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <span
          className={
            selected
              ? "text-xs font-semibold text-success"
              : "text-xs font-semibold text-neutral-500"
          }
        >
          {selected ? "Active" : "Closed"}
        </span>
      </Switch.Content>
    </Switch>
  );
}
