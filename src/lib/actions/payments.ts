export const verifyPayment = async (sessionId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sessionId }),
  });
  return res.json();
};
