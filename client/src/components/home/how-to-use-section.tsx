import { useRef } from "react";

const steps = [
  {
    number: 1,
    title: "Enter URL",
    description: "Paste the website address you want to summarize into the input field."
  },
  {
    number: 2,
    title: "Choose AI Model",
    description: "Select the AI model that suits your content type and summary preferences."
  },
  {
    number: 3,
    title: "Generate Summary",
    description: "Click the button and wait while our AI creates a comprehensive summary."
  },
  {
    number: 4,
    title: "Download Result",
    description: "View the summary and download it as a markdown file for your records."
  }
];

export default function HowToUseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Summarizing a website is as easy as these four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg mb-5 z-10">
                {step.number}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full max-w-[80%] h-0.5 bg-gray-200 -z-10"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg bg-dark">
          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white p-8 text-center">
            <div>
              <i className="ri-video-line text-5xl mb-4"></i>
              <p className="text-lg font-medium">Video demonstration will be placed here</p>
              <p className="text-sm text-gray-400 mt-2">The video will autoplay when users visit this section</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
