import { Check, Clock, FileText, Brain } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Save Time",
    description: "Get the main points of any website or article without having to read through everything."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Powered",
    description: "Choose from multiple AI models optimized for different types of content summarization."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Easy Export",
    description: "Download summaries in markdown format for easy integration with your notes or documents."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark">Why Use Our Summarizer?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI-powered summarization tool helps you extract essential information quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                {benefit.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
