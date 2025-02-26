import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * Helper function to throw an error if the response is not OK
 * @param res Response object to check
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    const error: any = new Error(`${res.status}: ${text}`);
    error.status = res.status;
    throw error;
  }
}

/**
 * Enhanced API Request function that supports modern fetch options
 * and automatically parses JSON responses
 * @param url API endpoint URL
 * @param options Fetch options including method, body, headers, etc.
 * @returns Promise with parsed JSON response
 */
export async function apiRequest<T = any>(
  url: string,
  options: RequestInit & { 
    params?: Record<string, string> 
  } = {}
): Promise<T> {
  // Add query parameters if provided
  if (options.params) {
    const searchParams = new URLSearchParams();
    Object.entries(options.params).forEach(([key, value]) => {
      searchParams.append(key, value);
    });
    url = `${url}?${searchParams.toString()}`;
    delete options.params;
  }

  // Make the request
  const res = await fetch(url, {
    method: options.method || 'GET',
    credentials: 'include',
    ...options,
  });

  await throwIfResNotOk(res);
  return res.json();
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
