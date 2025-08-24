'use server';
/**
 * @fileOverview AI-powered legal document drafting flow.
 *
 * - draftLegalDocument - A function that handles the document drafting process.
 * - DraftLegalDocumentInput - The input type for the draftLegalDocument function.
 * - DraftLegalDocumentOutput - The return type for the draftLegalDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DraftLegalDocumentInputSchema = z.object({
  documentType: z.string().describe('The type of legal document to be drafted (e.g., "Rental Agreement", "Legal Notice").'),
  documentDetails: z
    .string()
    .describe(
      "A detailed description of the parties involved, key terms, and any other specific information required for the document."
    ),
});
export type DraftLegalDocumentInput = z.infer<typeof DraftLegalDocumentInputSchema>;

const DraftLegalDocumentOutputSchema = z.object({
  draftContent: z.string().describe('The full text of the drafted legal document.'),
});
export type DraftLegalDocumentOutput = z.infer<typeof DraftLegalDocumentOutputSchema>;

export async function draftLegalDocument(input: DraftLegalDocumentInput): Promise<DraftLegalDocumentOutput> {
  return draftLegalDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'draftLegalDocumentPrompt',
  input: {schema: DraftLegalDocumentInputSchema},
  output: {schema: DraftLegalDocumentOutputSchema},
  prompt: `You are an AI assistant that drafts legal documents based on Indian law. The user will provide a document type and the specific details. Your task is to generate a legally sound draft.

This is NOT legal advice. Include a disclaimer at the top of the draft stating that this document is AI-generated and should be reviewed by a qualified legal professional before use.

Document Type: {{{documentType}}}
Details: {{{documentDetails}}}

Generate the document now. The output should be plain text, without any markdown formatting like asterisks or hashes.
`,
});

const draftLegalDocumentFlow = ai.defineFlow(
  {
    name: 'draftLegalDocumentFlow',
    inputSchema: DraftLegalDocumentInputSchema,
    outputSchema: DraftLegalDocumentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
