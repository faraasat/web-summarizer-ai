"use client";

import { useState } from "react";

import SummarizerForm from "./summarizer-form";
import ResultsSection from "./results-section";

export interface ISummary {
  content: string | null;
  url: string;
}

const SummarizerRoot = () => {
  const [summary, setSummary] = useState<ISummary | null>(null);

  return (
    <>
      <SummarizerForm onSummaryCreated={setSummary} />

      {summary && <ResultsSection summary={summary} />}
    </>
  );
};

export default SummarizerRoot;
