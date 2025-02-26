"use server";

import { IModelType } from "@/data/model";

export const getSummary = async (url: string, modelType: IModelType) => {
  const body = JSON.stringify({
    url,
    model: modelType.model,
    messageType: modelType.messageType.toString(),
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/summarize`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch summary");
  }

  const data = await response.json();

  return data;
};
