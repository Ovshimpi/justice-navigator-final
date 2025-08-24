import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

if (!process.env.GEMINI_API_KEY) {
  throw new Error(
    'GEMINI_API_KEY is not defined in the environment. Please set it in your .env file or environment variables.'
  );
}

export const ai = genkit({
  plugins: [googleAI()],
  // Set a default model for all generate calls.
  model: 'googleai/gemini-1.5-flash',
});
