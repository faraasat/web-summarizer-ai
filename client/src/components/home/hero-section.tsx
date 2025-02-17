import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-dark leading-tight">
              Summarize Any Website <span className="text-primary">Instantly</span>
            </h1>
            <p className="text-lg text-gray-600 md:pr-12">
              Get concise, AI-powered summaries of any website or web app. Save time and extract the key information you need without having to read everything.
            </p>
            <div className="pt-4">
              <Link href="/summarizer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
                Try Summarizer <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" 
              alt="AI powered website summarization" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
