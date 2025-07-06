
import { GoogleGenAI } from "@google/genai";
import type { Movie } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function getMovieRecommendations(prompt: string): Promise<Movie[]> {
  const model = "gemini-2.5-flash-preview-04-17";
  
  const systemInstruction = `You are CineSuggest, an expert movie recommender AI with deep knowledge of both global and Indian cinema (including Bollywood, Tollywood, etc.). Your task is to recommend 4 movies based on the user's request.
  For each movie, you must provide the title, year of release, a comma-separated list of genres, a compelling one-sentence synopsis, and a short, descriptive image search query.
  You MUST respond with a valid JSON object. The root of the object should be a key named "recommendations" which holds an array of movie objects. Do not include any text outside of the JSON object.
  
  The JSON schema for each movie object is:
  {
    "title": "string",
    "year": number,
    "genre": "string",
    "synopsis": "string",
    "image_query": "string" 
  }`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    let jsonStr = response.text.trim();
    
    // The model can sometimes wrap the JSON in ```json ... ``` markdown.
    // This removes it before parsing, which is a common source of errors.
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    const parsedData = JSON.parse(jsonStr);

    if (parsedData && Array.isArray(parsedData.recommendations)) {
       // Validate that each item in the array looks like a movie object
      const movies: Movie[] = parsedData.recommendations.filter((item: any) => 
        item.title && typeof item.title === 'string' &&
        item.year && typeof item.year === 'number' &&
        item.genre && typeof item.genre === 'string' &&
        item.synopsis && typeof item.synopsis === 'string' &&
        item.image_query && typeof item.image_query === 'string'
      );
      return movies;
    } else {
      throw new Error("Invalid JSON structure received from API.");
    }

  } catch (error) {
    console.error("Error fetching recommendations from Gemini API:", error);
    if (error instanceof SyntaxError) {
        // This catches JSON.parse errors, which is the user's reported issue.
        throw new Error("The AI returned a response that could not be processed. This can happen sometimes. Please try again.");
    }
    throw new Error("Failed to communicate with the AI model.");
  }
}