import { useState } from "react";
import SummarizerForm from "@/components/summarizer/summarizer-form";
import ResultsSection from "@/components/summarizer/results-section";
import { Summary } from "@shared/schema";

export default function Summarizer() {
  const [summary, setSummary] = useState<Summary | null>(null);

  return (
    <div className="flex-grow py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-dark">Website Summarizer</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Enter a website URL below to generate a comprehensive summary using our AI models.
          </p>
        </div>
        
        <div className="bg-light rounded-xl shadow-md p-6 md:p-8">
          <SummarizerForm onSummaryCreated={setSummary} />
          
          {summary && (
            <ResultsSection summary={summary} />
          )}
        </div>
      </div>
    </div>
  );
}
