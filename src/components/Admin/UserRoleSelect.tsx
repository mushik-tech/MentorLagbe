"use client";

import { updateUserRole } from "@/lib/actions/users";
import { IUser, TRole } from "@/types/users";
import { ListBox, Select, toast } from "@heroui/react";
import { updateUser } from "better-auth/api";
import { useRouter } from "next/navigation";

const roleOptions = [
  { id: "student", label: "Student" },
  { id: "tutor", label: "Tutor" },
  { id: "admin", label: "Admin" },
];

type UserRoleSelectProps = {
  user: IUser;
};

export default function UserRoleSelect({ user }: UserRoleSelectProps) {
  const router = useRouter();

  const handleOnChange = async (value: any) => {
    const data = await updateUserRole(user.email, value);

    if (data.modifiedCount) {
      toast.success(`${user.name} role updated to ${value}`);
      router.refresh();
    }
  };

  return (
    <Select
      variant="secondary"
      defaultValue={user.role}
      aria-label={`Change role for ${user.name}`}
      placeholder="Change role"
      onChange={handleOnChange}
      className={'w-30'}
    >
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {roleOptions.map((option) => (
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
