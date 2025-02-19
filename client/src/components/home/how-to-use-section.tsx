import { useRef } from "react";
import { Link } from "wouter";
import { Monitor, Globe, Sparkles, Download, ArrowRight, Play } from "lucide-react";
import { DataVisualizationIllustration } from "@/components/ui/illustrations";

const steps = [
  {
    number: 1,
    icon: <Globe className="w-6 h-6" />,
    title: "Enter URL",
    description: "Paste any website URL into the neural input field for processing.",
    color: "from-blue-500 to-indigo-600",
    delay: "0s"
  },
  {
    number: 2,
    icon: <Monitor className="w-6 h-6" />,
    title: "Select Model",
    description: "Choose from specialized neural network models for optimal results.",
    color: "from-violet-500 to-purple-600",
    delay: "0.1s"
  },
  {
    number: 3,
    icon: <Sparkles className="w-6 h-6" />,
    title: "Generate Summary",
    description: "Our advanced AI processes and distills the essential information.",
    color: "from-fuchsia-500 to-pink-600",
    delay: "0.2s"
  },
  {
    number: 4,
    icon: <Download className="w-6 h-6" />,
    title: "Export Result",
    description: "Download your summary in markdown format for seamless integration.",
    color: "from-cyan-500 to-blue-600",
    delay: "0.3s" 
  }
];

export default function HowToUseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="grid-bg absolute inset-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-40 h-1 gradient-animation rounded-full blur-sm opacity-70"></div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white glow-text">
            How Our <span className="text-primary">Neural</span> Summarizer Works
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto font-body">
            Experience a revolutionary approach to content summarization in four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {/* Connection lines between steps */}
          <div className="hidden lg:block absolute top-16 left-[25%] w-[50%] h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 z-0"></div>
          <div className="hidden lg:block absolute top-16 left-[75%] w-[calc(25%-3rem)] h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center text-center fade-in-up"
              style={{ animationDelay: step.delay }}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white mb-5 z-10 shadow-lg border border-white/20 glow-border hover-lift`}>
                <div className="text-xl font-bold mr-1">{step.number}</div>
                {step.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-white">{step.title}</h3>
              <p className="text-gray-300 font-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="relative">
          {/* Background visualization */}
          <div className="absolute -bottom-20 right-20 opacity-10">
            <DataVisualizationIllustration width={300} height={300} />
          </div>
          
          <div className="relative cyber-blur rounded-2xl overflow-hidden border border-white/10 glow-border aspect-w-16 aspect-h-9">
            <div className="absolute inset-0 overflow-hidden">
              <div className="grid-bg absolute inset-0 opacity-20"></div>
            </div>
            
            <div className="w-full h-full flex flex-col items-center justify-center text-white p-8 text-center z-10 relative">
              <div className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center glow-border mb-6 group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/80 to-blue-600/80 flex items-center justify-center">
                  <Play className="w-10 h-10 ml-1" />
                </div>
              </div>
              <p className="text-2xl font-heading font-semibold mb-3 glow-text pulse-text">Watch Demo</p>
              <p className="text-gray-300 font-body max-w-2xl">
                See how our neural network processes complex web content into concise, actionable summaries in seconds.
              </p>
              
              <Link href="/summarizer" className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/50 bg-primary/10 hover:bg-primary/20 text-white transition-colors glow-border">
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
