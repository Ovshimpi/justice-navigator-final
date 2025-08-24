'use server';

/**
 * @fileOverview Generates legal pathways based on a user-described situation.
 *
 * - generateLegalPathways - A function that takes a user-described situation and returns potential legal pathways.
 * - GenerateLegalPathwaysInput - The input type for the generateLegalPathways function.
 * - GenerateLegalPathwaysOutput - The return type for the generateLegalPathways function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLegalPathwaysInputSchema = z.object({
  situationDescription: z
    .string()
    .describe('A detailed description of the situation the user is facing.'),
});
export type GenerateLegalPathwaysInput = z.infer<typeof GenerateLegalPathwaysInputSchema>;

const GenerateLegalPathwaysOutputSchema = z.object({
  legalPathways: z
    .array(z.string())
    .describe('A list of potential legal pathways relevant to the situation.'),
  relevantStatutes: z
    .array(z.string())
    .describe('A list of relevant statutes related to the situation.'),
  procedures: z
    .array(z.string())
    .describe('A list of legal procedures that may be applicable.'),
  potentialOutcomes: z
    .array(z.string())
    .describe('A list of potential legal outcomes that could result.'),
});
export type GenerateLegalPathwaysOutput = z.infer<typeof GenerateLegalPathwaysOutputSchema>;

export async function generateLegalPathways(input: GenerateLegalPathwaysInput): Promise<GenerateLegalPathwaysOutput> {
  return generateLegalPathwaysFlow(input);
}

const generateLegalPathwaysPrompt = ai.definePrompt({
  name: 'generateLegalPathwaysPrompt',
  input: {schema: GenerateLegalPathwaysInputSchema},
  output: {schema: GenerateLegalPathwaysOutputSchema},
  prompt: `You are an AI legal assistant specializing in Indian law. A user will describe a situation, and you will generate potential legal pathways, suggest relevant statutes, procedures, and potential outcomes to guide them.

Situation Description: {{{situationDescription}}}

Based on the situation provided, generate legal pathways, suggest relevant statutes, procedures, and potential outcomes.

Ensure that the legal pathways, statutes, procedures, and potential outcomes are distinct and relevant to the provided situation.
`,
});

const generateLegalPathwaysFlow = ai.defineFlow(
  {
    name: 'generateLegalPathwaysFlow',
    inputSchema: GenerateLegalPathwaysInputSchema,
    outputSchema: GenerateLegalPathwaysOutputSchema,
  },
  async input => {
    const {output} = await generateLegalPathwaysPrompt(input);
    return output!;
  }
);
