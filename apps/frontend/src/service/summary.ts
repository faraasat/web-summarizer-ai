"use server";

import { IModelType } from "@/data/model";

export const getSummary = async (url: string, modelType: IModelType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/summarize`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        model: modelType.model,
        messageType: modelType.messageType,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch summary");
  }

  const data = await response.json();

  return data;
};
