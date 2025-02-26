import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Summary } from "@shared/schema";
import { useSummarizer } from "@/hooks/useSummarizer";
import { validateUrl } from "@/lib/utils";

/**
 * Zod schema for form validation
 * Centralizing validation logic
 */
const formSchema = z.object({
  url: z.string()
    .trim()
    .min(1, { message: "URL is required" })
    .transform(val => validateUrl(val)) // Use the utility function for URL validation
    .refine(value => /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value), {
      message: "Please enter a valid URL",
    }),
  modelType: z.string().min(1, { message: "Please select an AI model" }),
});

type FormData = z.infer<typeof formSchema>;

interface SummarizerFormProps {
  onSummaryCreated: (summary: Summary) => void;
}

/**
 * SummarizerForm component
 * Using Container pattern for managing form state and submission logic
 */
export default function SummarizerForm({ onSummaryCreated }: SummarizerFormProps) {
  // Use the custom hook that encapsulates all summarizer-related functionality
  const { summarizeAsync, isSummarizing } = useSummarizer();
  
  // Form setup with validation
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      modelType: "general"
    }
  });

  /**
   * Form submission handler
   * Uses the custom hook for API interaction
   */
  const onSubmit = async (data: FormData) => {
    try {
      // Clean up URL if needed
      const cleanUrl = data.url.replace(/^https?:\/\//, '');
      
      // Use the custom hook to handle the API call
      const summary = await summarizeAsync({ 
        url: cleanUrl, 
        modelType: data.modelType 
      });
      
      // Notify parent component
      onSummaryCreated(summary);
    } catch (error) {
      // Error handling is managed in the useSummarizer hook
      console.error("Summary generation failed:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <div className="flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  https://
                </span>
                <FormControl>
                  <Input 
                    placeholder="example.com" 
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-primary focus:border-primary sm:text-sm border-gray-300"
                    {...field} 
                  />
                </FormControl>
              </div>
              <FormDescription>
                Enter the complete URL of the website you want to summarize
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="modelType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>AI Model</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an AI model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">General Purpose</SelectItem>
                  <SelectItem value="technical">Technical Content</SelectItem>
                  <SelectItem value="news">News Articles</SelectItem>
                  <SelectItem value="academic">Academic Papers</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the AI model that best fits your content type
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full hover-lift relative overflow-hidden"
          disabled={isSummarizing}
        >
          {isSummarizing ? (
            <span className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              <span className="pulse-text">Generating Neural Summary...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Generate Summary
            </span>
          )}
          {isSummarizing && <div className="absolute inset-0 progress-bar opacity-10"></div>}
        </Button>
      </form>
    </Form>
  );
}
