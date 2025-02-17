import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "sk-dummy-key-for-development" });

/**
 * Fetches content from a website URL
 * @param url The website URL to fetch content from
 */
async function fetchWebsiteContent(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch website: ${response.status} ${response.statusText}`);
    }
    const html = await response.text();
    
    // Extract text content from HTML (simple version)
    // In a production app, you would use a proper HTML parser
    const textContent = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Limit to a reasonable size for the API
    return textContent.slice(0, 15000);
  } catch (error) {
    console.error(`Error fetching website content: ${error}`);
    throw new Error(`Failed to fetch website content: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Summarizes website content using OpenAI
 * @param url The website URL to summarize
 * @param modelType The type of AI model to use (general, technical, news, academic)
 */
export async function summarizeWebsite(url: string, modelType: string): Promise<string> {
  try {
    // Fetch website content
    const websiteContent = await fetchWebsiteContent(url);
    
    // Determine the appropriate system prompt based on model type
    let systemPrompt = "You are a helpful assistant that summarizes website content.";
    
    switch (modelType) {
      case "technical":
        systemPrompt = "You are a technical expert that summarizes complex technical content. Focus on technical details, specifications, and methodologies.";
        break;
      case "news":
        systemPrompt = "You are a journalist that summarizes news articles. Focus on the key facts, quotes, and context.";
        break;
      case "academic":
        systemPrompt = "You are an academic researcher that summarizes scholarly content. Focus on research methods, findings, and implications.";
        break;
      default: // general
        systemPrompt = "You are a helpful assistant that summarizes website content in a clear and concise manner.";
    }
    
    // Make API request to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `${systemPrompt} Format your response in Markdown with headings, bullet points, and other formatting as appropriate. Include a summary, key points, and main content sections.`
        },
        {
          role: "user",
          content: `Please summarize the following website content from ${url}:\n\n${websiteContent}`
        }
      ],
      temperature: 0.5,
      max_tokens: 1000,
    });
    
    return response.choices[0].message.content || "Failed to generate summary.";
  } catch (error) {
    console.error(`Error summarizing website: ${error}`);
    throw new Error(`Failed to summarize website: ${error instanceof Error ? error.message : String(error)}`);
  }
}
