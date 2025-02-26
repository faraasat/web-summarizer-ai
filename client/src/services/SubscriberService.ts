import { apiRequest } from '../lib/queryClient';
import { Subscriber } from '@shared/schema';

/**
 * Service for handling newsletter subscriber-related API calls
 * Following the Service Pattern to centralize API logic
 */
export class SubscriberService {
  /**
   * Subscribe a new email to the newsletter
   * @param email Email address to subscribe
   * @returns Promise with the subscriber data
   */
  static async subscribe(email: string): Promise<Subscriber> {
    return apiRequest<Subscriber>('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Check if an email is already subscribed
   * @param email Email address to check
   * @returns Promise with boolean indicating if already subscribed
   */
  static async isEmailSubscribed(email: string): Promise<boolean> {
    try {
      const result = await apiRequest<{ exists: boolean }>('/api/subscribers/check', {
        method: 'GET',
        params: { email: encodeURIComponent(email) }
      });
      return result.exists;
    } catch (error) {
      return false;
    }
  }
}