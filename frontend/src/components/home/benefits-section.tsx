import { Clock, FileText, Brain, Zap, Globe, Code } from "lucide-react";
import { DataVisualizationIllustration } from "@/components/ui/illustrations";

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Save Time",
    description: "Extract essential information instantly without reading lengthy content.",
    color: "from-purple-500 to-violet-600",
    delay: "0s"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Enhanced",
    description: "Access multiple specialized AI models optimized for different content types.",
    color: "from-blue-500 to-indigo-600", 
    delay: "0.1s"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Easy Export",
    description: "Download summaries in markdown format for seamless integration with your workflow.",
    color: "from-cyan-500 to-blue-600",
    delay: "0.2s"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Any Website",
    description: "Summarize articles, documentation, research papers, news, and more with one tool.",
    color: "from-green-500 to-teal-600",
    delay: "0.3s"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Support",
    description: "Special model for technical content to preserve important details and code concepts.",
    color: "from-fuchsia-500 to-purple-600",
    delay: "0.4s"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Accurate Results",
    description: "Advanced algorithms ensure summaries maintain essential context and key information.",
    color: "from-pink-500 to-rose-600",
    delay: "0.5s"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-bg absolute inset-0"></div>
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-40 h-1 gradient-animation rounded-full blur-sm opacity-70"></div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white glow-text">
            Why Use Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500 px-1">Metaverse</span> Summarizer?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto font-body">
            Our AI-powered summarization leverages advanced models to extract essential information with unprecedented efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Background visualization */}
          <div className="absolute opacity-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 scale-150">
            <DataVisualizationIllustration width={600} height={600} />
          </div>
          
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="cyber-blur rounded-xl p-6 border border-white/10 backdrop-blur-md hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 glow-border relative overflow-hidden group fade-in-up hover-lift"
              style={{
                transitionDelay: benefit.delay,
                animationDelay: benefit.delay
              }}
            >
              {/* Gradient background that shows on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{background: `linear-gradient(to bottom right, ${benefit.color.split(' ')[0].replace('from-', '')}, ${benefit.color.split(' ')[1].replace('to-', '')})` }}></div>
              
              <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${benefit.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-300 font-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
