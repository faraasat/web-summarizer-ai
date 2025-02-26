import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { SummarizerService } from '../services/SummarizerService';
import { Summary } from '@shared/schema';
import { useToast } from './use-toast';

/**
 * Custom hook for summarizer functionality
 * Combines React Query with our service layer
 */
export function useSummarizer() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Mutation for creating a new summary
  const summarizeMutation = useMutation({
    mutationFn: async ({ url, modelType }: { url: string; modelType: string }) => {
      return SummarizerService.summarizeWebsite(url, modelType);
    },
    onSuccess: (data) => {
      // Invalidate and refetch related queries
      queryClient.invalidateQueries({ queryKey: ['/api/summaries'] });
      queryClient.setQueryData(['/api/summaries', data.id], data);
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: `Failed to generate summary: ${error.message}`,
        variant: 'destructive',
      });
    },
  });

  // Function to get a summary by ID
  const getSummary = (id: number) => {
    return useQuery({
      queryKey: ['/api/summaries', id],
      queryFn: () => SummarizerService.getSummary(id),
      enabled: !!id,
    });
  };

  // Function to check if a URL already has a summary
  const checkExistingSummary = (url: string) => {
    return useQuery({
      queryKey: ['/api/summaries/url', url],
      queryFn: () => SummarizerService.getSummaryByUrl(url),
      enabled: !!url,
    });
  };

  return {
    summarize: summarizeMutation.mutate,
    summarizeAsync: summarizeMutation.mutateAsync,
    isSummarizing: summarizeMutation.isPending,
    summarizeError: summarizeMutation.error,
    getSummary,
    checkExistingSummary,
  };
}