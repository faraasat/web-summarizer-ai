"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { validateUrl } from "@/lib/utils";
import { ISummary } from "./summarizer-root";
import { getSummary } from "@/service/summary";
import { useState } from "react";
import { modelNames, modelTypes } from "@/data/model";

const formSchema = z.object({
  url: z
    .string()
    .trim()
    .min(1, { message: "URL is required" })
    .transform((val) => validateUrl(val))
    .refine(
      (value) =>
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
          value
        ),
      {
        message: "Please enter a valid URL",
      }
    ),
  modelType: z.string().min(1, { message: "Please select an AI model" }),
});

type FormData = z.infer<typeof formSchema>;

interface SummarizerFormProps {
  onSummaryCreated: (summary: ISummary | null) => void;
}

export default function SummarizerForm({
  onSummaryCreated,
}: SummarizerFormProps) {
  const [isSummarizing, setIsSummarizing] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      modelType: modelTypes["DeepSeek: R1 (free)"].modelName,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSummarizing(true);
    try {
      onSummaryCreated(null);

      const cleanUrl = data.url.replace(/^https?:\/\//, "https://");

      const summary = await getSummary(cleanUrl, modelTypes[data.modelType]);

      onSummaryCreated({ content: summary.content, url: cleanUrl });
    } catch (error) {
      toast.error("Generation Error", {
        description: "An Error Occurred While Generating Summary",
      });
      console.error("Summary generation failed:", error);
    } finally {
      setIsSummarizing(false);
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
              <div className="flex rounded-md shadow-sm relative z-10">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm relative z-10">
                  https://
                </span>
                <FormControl>
                  <Input
                    placeholder="example.com"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-primary focus:border-primary sm:text-sm border-gray-300 relative z-10"
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
              <div className="z-20 relative">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="select-trigger z-20 relative">
                      <SelectValue placeholder="Select an AI model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="select-content z-50">
                    {modelNames.map((item, idx) => (
                      <SelectItem
                        key={idx}
                        value={item}
                        className="select-item"
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <FormDescription>
                Select the AI model that best fits your content type
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full hover-lift relative overflow-hidden gradient-animation glow-border shadow-lg hover:shadow-xl text-white px-8 py-6"
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
          {isSummarizing && (
            <div className="absolute inset-0 progress-bar opacity-10"></div>
          )}
        </Button>
      </form>
    </Form>
  );
}
