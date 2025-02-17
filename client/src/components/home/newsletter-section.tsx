import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  consent: z.boolean().refine(value => value === true, {
    message: "You must agree to receive emails"
  })
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export default function NewsletterSection() {
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
      consent: false
    }
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: SubscribeFormData) => {
      const res = await apiRequest("POST", "/api/subscribe", data);
      return await res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "You've been subscribed to our newsletter.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe to the newsletter. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: SubscribeFormData) => {
    subscribeMutation.mutate(data);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Stay Updated</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest updates on new features and AI models.
          </p>
        </div>
        
        <form 
          className="max-w-xl mx-auto" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:flex-grow">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 ${errors.email ? 'border-2 border-red-500' : ''}`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-white/90">{errors.email.message}</p>
              )}
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
              disabled={subscribeMutation.isPending}
            >
              {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          
          <div className="text-sm text-white/70 mt-3">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                {...register("consent")}
              />
              I agree to receive email communications from Website Summarizer.
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-white/90">{errors.consent.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
