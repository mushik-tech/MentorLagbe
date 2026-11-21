import { IUser } from "@/types/users";

export const getUsers = async (): Promise<IUser[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`);

  return res.json();
};
