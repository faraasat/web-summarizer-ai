import { Link } from "wouter";
import { BrainAiIllustration, VirtualWorldIllustration } from "@/components/ui/illustrations";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-16 pb-24 md:py-24 grid-bg relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-8">
            {/* Floating elements */}
            <div className="absolute -left-8 top-20 floating">
              <div className="w-12 h-12 rounded-full gradient-animation opacity-30 blur-lg"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-10 floating" style={{ animationDelay: "-2s" }}>
              <div className="w-8 h-8 rounded-full bg-blue-400/40 blur-lg"></div>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white glow-text leading-tight">
              Summarize Any Website <span className="text-primary animate-pulse">Instantly</span>
            </h1>
            <p className="font-body text-lg text-gray-300 md:pr-12">
              Get concise, AI-powered summaries of any website or web app. Save time and extract the key information you need without having to read everything.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link href="/summarizer" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-lg text-white gradient-animation hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all glow-border">
                <Sparkles className="w-5 h-5 mr-2" />
                Try Summarizer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 border border-primary/30 text-base font-medium rounded-md shadow-lg text-white hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all backdrop-blur-sm">
                How It Works
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-3xl">
              <div className="w-full h-full bg-primary/20 rounded-full"></div>
            </div>
            
            {/* Main illustration container */}
            <div className="relative cyber-blur rounded-2xl p-8 border border-white/10 glow-border">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="grid-bg absolute inset-0 opacity-40"></div>
              </div>
              
              {/* Layered illustrations for depth */}
              <div className="relative z-10 flex items-center justify-center">
                <BrainAiIllustration width={300} height={300} className="relative z-20 floating" />
                <VirtualWorldIllustration width={300} height={300} className="absolute opacity-20 scale-150" />
              </div>
              
              {/* UI Elements */}
              <div className="absolute top-6 right-6 px-4 py-2 cyber-blur rounded-full text-xs text-white/80 border border-white/10">
                AI-Powered
              </div>
              <div className="absolute bottom-6 left-6 right-6 cyber-blur rounded-lg p-3 border border-white/10">
                <div className="h-1 w-2/3 bg-primary/50 rounded-full progress-bar"></div>
                <div className="mt-2 text-xs text-white/70 font-body pulse-text">Content summarization in progress...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
