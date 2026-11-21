export interface IUserSummary {
  name: string;
  email: string;
  role: string;
}

export const getUsers = async (): Promise<IUserSummary[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`);

  return res.json();
};
