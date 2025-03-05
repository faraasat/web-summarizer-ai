"use server";

export const getSummary = async (url: string, modelType: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/summarize?url=${url}&modelType=${modelType}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch summary");
  }

  const data = await response.json();

  return data;
};
