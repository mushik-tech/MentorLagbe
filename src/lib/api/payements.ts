export const getTransactions = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments`);

  return res.json();
};
