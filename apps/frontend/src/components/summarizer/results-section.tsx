import { Download } from "lucide-react";
import { toast } from "sonner";
import { default as MdToJsx } from "markdown-to-jsx";

import { Button } from "@/components/ui/button";

const ResultsSection = ({
  summary,
}: {
  summary: { content: string; url: string };
}) => {
  const handleDownload = () => {
    const blob = new Blob([summary.content], { type: "text/markdown" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    const domain = summary.url.replace(/^https?:\/\//, "").split("/")[0];
    const date = new Date().toISOString().split("T")[0];
    const downloadName = `${domain}-summary-${date}.md`;

    link.href = url;
    link.download = downloadName;
    link.click();

    URL.revokeObjectURL(url);

    toast.info("Summary downloaded!", {
      description: `Saved as ${downloadName}`,
    });
  };

  let content = summary?.content;

  if (content) {
    content = content.replaceAll("```markdown", "");
    content = content.replaceAll("```", "");
  }

  return (
    <div className="mt-10">
      <div className="border-t border-gray-200 pt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-heading font-semibold">
            Summary Results
          </h2>
          <Button
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 text-sm bg-accent hover:bg-accent/90 text-[var(--foreground)] cursor-pointer border border-[var(--foreground)]"
          >
            <Download className="mr-2 h-4 w-4 text-[var(--foreground)]" />{" "}
            Download Markdown
          </Button>
        </div>

        {/* Markdown content renderer */}
        <div className="border border-[var(--foreground)] bg-[var(--background)] text-[var(--foreground)] rounded-md p-6 overflow-auto prose prose-sm">
          <div className="reset-tw">
            <MdToJsx>{content}</MdToJsx>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
