import Link from "next/link";
import { Globe, Download, ArrowRight, Play, Cpu, Zap } from "lucide-react";
import { DataVisualizationIllustration } from "@/components/ui/illustrations";
import WordGlower from "../ui/word-glower";

const steps = [
  {
    number: 1,
    icon: <Globe className="w-5 h-5 text-blue-200" />,
    title: "Enter URL",
    description:
      "Paste any website URL into the neural input field for processing.",
    color: "from-blue-600 to-indigo-700",
    glowColor: "rgba(59, 130, 246, 0.5)",
    delay: "0s",
  },
  {
    number: 2,
    icon: <Cpu className="w-5 h-5 text-violet-200" />,
    title: "Select Model",
    description:
      "Choose from specialized neural network models for optimal results.",
    color: "from-violet-600 to-purple-700",
    glowColor: "rgba(124, 58, 237, 0.5)",
    delay: "0.1s",
  },
  {
    number: 3,
    icon: <Zap className="w-5 h-5 text-fuchsia-200" />,
    title: "Generate Summary",
    description:
      "Our advanced AI processes and distills the essential information.",
    color: "from-fuchsia-600 to-pink-700",
    glowColor: "rgba(217, 70, 239, 0.5)",
    delay: "0.2s",
  },
  {
    number: 4,
    icon: <Download className="w-5 h-5 text-cyan-200" />,
    title: "Export Result",
    description:
      "Download your summary in markdown format for seamless integration.",
    color: "from-cyan-600 to-blue-700",
    glowColor: "rgba(6, 182, 212, 0.5)",
    delay: "0.3s",
  },
];

export default function HowToUseSection() {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="grid-bg absolute inset-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white glow-text">
            How Our <WordGlower>Summarizer</WordGlower> Works
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto font-body">
            Experience a revolutionary approach to content summarization in four
            simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative">
          {/* Animated connection lines between steps */}
          {/* <div className="hidden lg:block absolute top-10 w-[calc(100%-60px)] h-0.5 z-0">
            <div className="h-full w-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 relative overflow-hidden progress-bar-left-to-right"></div>
          </div>
          <div className="hidden lg:block absolute bottom-10 w-[calc(100%-60px)] h-0.5 z-0">
            <div className="h-full w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 relative overflow-hidden progress-bar-left-to-right"></div>
          </div> */}

          {/* Additional connecting lines (vertical) */}
          <div className="hidden lg:block absolute top-28 left-[24%] w-0.5 h-[2rem] z-0">
            <div className="h-full w-full bg-gradient-to-b from-blue-500 to-blue-500/50 relative"></div>
          </div>
          <div className="hidden lg:block absolute top-28 left-[50%] w-0.5 h-[2rem] z-0">
            <div className="h-full w-full bg-gradient-to-b from-violet-500 to-violet-500/50 relative"></div>
          </div>
          <div className="hidden lg:block absolute top-28 left-[75.5%] w-0.5 h-[2rem] z-0">
            <div className="h-full w-full bg-gradient-to-b from-fuchsia-500 to-fuchsia-500/50 relative"></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative fade-in-up group"
              style={{ animationDelay: step.delay }}
            >
              <div className="cyber-blur rounded-xl p-6 border border-white/10 h-full flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 relative overflow-hidden">
                {/* Glow effect */}
                <div
                  className="z-5 absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"
                  style={{
                    boxShadow: `0 0 40px 10px ${step.glowColor}`,
                    background: `radial-gradient(circle at center, ${step.glowColor}, transparent 70%)`,
                  }}
                ></div>

                {/* Number + Icon */}
                <div
                  className={`z-10 relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white mb-5 z-10 shadow-lg border border-white/20 glow-border hover-lift group-hover:scale-110 transition-transform`}
                >
                  <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-xl font-bold">{step.number}</div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {step.icon}
                  </div>
                </div>

                {/* Text content */}
                <h3 className="z-10 font-heading font-semibold text-xl mb-3 text-white group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="z-10 text-gray-300 font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          {/* Background visualization */}
          <div
            className="absolute -bottom-20 right-20 opacity-10 floating"
            style={{ animationDelay: "-3s" }}
          >
            <DataVisualizationIllustration width={300} height={300} />
          </div>

          <div className="relative cyber-blur rounded-2xl overflow-hidden border border-white/10 glow-border">
            <div className="absolute inset-0 overflow-hidden">
              <div className="grid-bg absolute inset-0 opacity-20"></div>
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center text-white p-8 text-center z-10 relative py-16">
              <div className="absolute top-5 left-5 flex items-center gap-2 opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center glow-border mb-6 group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/80 to-blue-600/80 flex items-center justify-center">
                  <Play className="w-10 h-10 ml-1" />
                </div>
              </div>
              <p className="text-2xl font-heading font-semibold mb-3 glow-text pulse-text">
                Watch Demo
              </p>
              <p className="text-gray-300 font-body max-w-2xl">
                See how our neural network processes complex web content into
                concise, actionable summaries in seconds.
              </p>

              <Link
                href="/summarizer"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/50 bg-primary/10 hover:bg-primary/20 text-white transition-colors glow-border"
              >
                Try it now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
