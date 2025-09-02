'use server';
/**
 * @fileOverview AI-powered PDF legal document summarization flow.
 *
 * - summarizeLegalDocument - A function that handles the summarization process.
 * - SummarizeLegalDocumentInput - The input type for the summarizeLegalDocument function.
 * - SummarizeLegalDocumentOutput - The return type for the summarizeLegalDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeLegalDocumentInputSchema = z.object({
  pdfDataUri: z
    .string()
    .describe(
      "A PDF legal document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SummarizeLegalDocumentInput = z.infer<typeof SummarizeLegalDocumentInputSchema>;

const SummarizeLegalDocumentOutputSchema = z.object({
  isLegalDocument: z.boolean().describe('Whether or not the document is a legal document.'),
  summary: z.string().optional().describe('A summary of the legal document.'),
  keyPoints: z.array(z.string()).optional().describe('Key points extracted from the legal document.'),
  suggestedSteps: z
    .array(z.string())
    .optional()
    .describe(
      'A list of recommended legal steps to take based on the document, according to Indian law.'
    ),
  extractedEntities: z.object({
      parties: z.array(z.string()).describe('Names of the parties involved in the document.'),
      locations: z.array(z.string()).describe('Any locations or addresses mentioned.'),
      dates: z.array(z.string()).describe('Important dates or deadlines found in the document.'),
  }).optional().describe('Key entities extracted from the document.'),
  riskAnalysis: z.array(z.object({
      clause: z.string().describe('The clause or section of the document that contains a potential risk.'),
      risk: z.string().describe('The potential risk or issue identified.'),
      suggestion: z.string().describe('A suggestion on how to mitigate the risk based on Indian law.'),
  })).optional().describe('An analysis of potential risks found within the document, including suggestions for mitigation.'),
});
export type SummarizeLegalDocumentOutput = z.infer<typeof SummarizeLegalDocumentOutputSchema>;

export async function summarizeLegalDocument(input: SummarizeLegalDocumentInput): Promise<SummarizeLegalDocumentOutput> {
  return summarizeLegalDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeLegalDocumentPrompt',
  input: {schema: SummarizeLegalDocumentInputSchema},
  output: {schema: SummarizeLegalDocumentOutputSchema},
  prompt: `You are an expert legal analyst specializing in Indian Law. First, you must determine if the provided document is a legal document (e.g., contract, affidavit, notice, deed, etc.).

If it is NOT a legal document, set 'isLegalDocument' to false and do not provide any other output.

If it IS a legal document, set 'isLegalDocument' to true and analyze the provided document, which can be in English or Marathi. Provide a summary and key points in English.

In addition to the summary and key points, perform the following tasks:
1.  **Suggest Next Steps**: Based on the document's content, suggest the next legal steps the user should consider taking as per Indian law.
2.  **Extract Key Entities**: Identify and extract the names of all parties involved, any relevant locations or addresses, and any important dates or deadlines.
3.  **Perform Risk Analysis**: Identify any clauses that may be ambiguous, one-sided, or contain potential risks for the user. For each risk, describe the issue and suggest a possible mitigation based on Indian law.

Document: {{media url=pdfDataUri}}`,
});

const summarizeLegalDocumentFlow = ai.defineFlow(
  {
    name: 'summarizeLegalDocumentFlow',
    inputSchema: SummarizeLegalDocumentInputSchema,
    outputSchema: SummarizeLegalDocumentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
