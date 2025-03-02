import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Markdown from "@/components/ui/markdown";
import { Download } from "lucide-react";
import { Summary } from "@shared/schema";

interface ResultsSectionProps {
  summary: Summary;
}

export default function ResultsSection({ summary }: ResultsSectionProps) {
  const { toast } = useToast();

  const handleDownload = () => {
    // Create a blob with the markdown content
    const blob = new Blob([summary.content], { type: "text/markdown" });
    
    // Create an anchor element and set properties for download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    // Format the domain for the filename
    const domain = summary.url.replace(/^https?:\/\//, '').split('/')[0];
    const date = new Date().toISOString().split('T')[0];
    
    // Set file name and properties
    link.href = url;
    link.download = `${domain}-summary-${date}.md`;
    link.click();
    
    // Clean up
    URL.revokeObjectURL(url);
    
    toast({
      title: "Summary downloaded!",
      description: `Saved as ${domain}-summary-${date}.md`,
      variant: "default",
    });
  };

  return (
    <div className="mt-10">
      <div className="border-t border-gray-200 pt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-heading font-semibold text-gray-900">Summary Results</h2>
          <Button 
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 text-sm bg-accent hover:bg-accent/90"
          >
            <Download className="mr-2 h-4 w-4" /> Download Markdown
          </Button>
        </div>
        
        {/* Markdown content renderer */}
        <div className="bg-white border border-gray-200 rounded-md p-6 overflow-auto">
          <Markdown content={summary.content} />
        </div>
      </div>
    </div>
  );
}
