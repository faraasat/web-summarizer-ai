import { BrainAiIllustration } from "@/components/ui/illustrations";
import SummarizerRoot from "@/components/summarizer/summarizer-root";

export default function Summarizer() {
  return (
    <div className="flex-grow py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-bg absolute inset-0"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-15">
        <div className="text-center mb-10 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-40 h-1 gradient-animation rounded-full blur-sm opacity-70"></div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white glow-text">
            Web{" "}
            <span className="text-primary relative z-10 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text font-bold">
              Neural
            </span>{" "}
            Summarizer
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto font-body">
            Enter any website URL below to generate an AI-powered comprehensive
            summary using our advanced neural models.
          </p>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div
            className="absolute -top-10 -left-10 floating opacity-70"
            style={{ animationDelay: "-1.5s" }}
          >
            <BrainAiIllustration width={80} height={80} />
          </div>
          <div
            className="absolute -bottom-10 -right-10 floating opacity-70"
            style={{ animationDelay: "-3s" }}
          >
            <BrainAiIllustration width={80} height={80} />
          </div>

          {/* Main container */}
          <div className="z-10 cyber-blur rounded-xl p-6 md:p-8 border border-white/10 glow-border">
            <SummarizerRoot />
          </div>
        </div>
      </div>
    </div>
  );
}
