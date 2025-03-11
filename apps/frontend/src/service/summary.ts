"use server";

import { IModelType } from "@/data/model";

export const getSummary = async (url: string, modelType: IModelType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/summarize?url=${url}&modelType=${modelType}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch summary");
  }

  const data = await response.json();

  return data;
};
