import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SubscriberService } from '../services/SubscriberService';
import { useToast } from './use-toast';

/**
 * Custom hook for newsletter subscriber functionality
 * Combines React Query with our service layer
 */
export function useSubscriber() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Mutation for subscribing to the newsletter
  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return SubscriberService.subscribe(email);
    },
    onSuccess: () => {
      // Show success toast
      toast({
        title: 'Success!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['/api/subscribers'] });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: `Failed to subscribe: ${error.message}`,
        variant: 'destructive',
      });
    },
  });

  // Function to check if an email is already subscribed
  const checkIsSubscribed = (email: string) => {
    return useQuery({
      queryKey: ['/api/subscribers/check', email],
      queryFn: () => SubscriberService.isEmailSubscribed(email),
      enabled: !!email,
    });
  };

  return {
    subscribe: subscribeMutation.mutate,
    subscribeAsync: subscribeMutation.mutateAsync,
    isSubscribing: subscribeMutation.isPending,
    subscribeError: subscribeMutation.error,
    checkIsSubscribed,
  };
}