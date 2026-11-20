export const getTuitions = async (query = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions?${query}`,
  );

  return res.json();
};
