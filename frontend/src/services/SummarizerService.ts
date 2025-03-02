import { apiRequest } from '../lib/queryClient';
import { Summary } from '@shared/schema';

/**
 * Service for handling summarizer-related API calls
 * Following the Service Pattern to centralize API logic
 */
export class SummarizerService {
  /**
   * Generate a summary for a given URL and model type
   * @param url Website URL to summarize
   * @param modelType Type of model to use for summarization
   * @returns Promise with the summary data
   */
  static async summarizeWebsite(url: string, modelType: string): Promise<Summary> {
    return apiRequest<Summary>('/api/summarize', {
      method: 'POST',
      body: JSON.stringify({ url, modelType }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Get a previously generated summary by ID
   * @param id Summary ID
   * @returns Promise with the summary data
   */
  static async getSummary(id: number): Promise<Summary> {
    return apiRequest<Summary>('/api/summaries/' + id, {
      method: 'GET',
    });
  }

  /**
   * Get a summary by URL if it exists
   * @param url Website URL
   * @returns Promise with the summary data or null if not found
   */
  static async getSummaryByUrl(url: string): Promise<Summary | null> {
    try {
      return await apiRequest<Summary>('/api/summaries/url', {
        method: 'GET',
        params: { url: encodeURIComponent(url) }
      });
    } catch (error: any) {
      if (error.status === 404) {
        return null;
      }
      throw error;
    }
  }
}