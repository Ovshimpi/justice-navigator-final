'use client';

import { useState } from 'react';
import { summarizeLegalDocument, type SummarizeLegalDocumentOutput } from '@/ai/flows/summarize-legal-documents';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileText, Loader2, Upload, Sparkles, CheckCircle, Gavel, AlertTriangle, ShieldAlert, Users, MapPin, Calendar, FileWarning } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function LegalAnalystPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SummarizeLegalDocumentOutput | null>(null);
  const [fileName, setFileName] = useState('');
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult(null);

    const fileInput = event.currentTarget.elements.namedItem('pdfFile') as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) {
      toast({
        title: 'No file selected',
        description: 'Please upload a PDF document to analyze.',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    const file = fileInput.files[0];
    if (file.type !== 'application/pdf') {
        toast({
            title: 'Invalid file type',
            description: 'Please upload a valid PDF document.',
            variant: 'destructive',
        });
        setIsLoading(false);
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        const pdfDataUri = reader.result as string;
        const analysisResult = await summarizeLegalDocument({ pdfDataUri });
        setResult(analysisResult);
      } catch (error) {
        console.error('Error analyzing document:', error);
        toast({
          title: 'Analysis Failed',
          description: 'Something went wrong while analyzing the document. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = (error) => {
        console.error('Error reading file:', error);
        toast({
            title: 'File Read Error',
            description: 'Could not read the selected file. Please try again.',
            variant: 'destructive',
        });
        setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">AI Legal Analyst</h1>
        <p className="text-muted-foreground mt-2">Upload a legal PDF to get an AI-powered summary and key points.</p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" /> Document Upload
            </CardTitle>
            <CardDescription>Select a PDF file (English or Marathi) from your device.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="pdfFile">PDF Document</Label>
              <Input id="pdfFile" name="pdfFile" type="file" accept=".pdf" onChange={handleFileChange} />
              {fileName && <p className="text-sm text-muted-foreground">Selected: {fileName}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Document'
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {isLoading && (
        <div className="text-center space-y-4">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Analyzing your document. Please wait...</p>
        </div>
      )}

      {result && !result.isLegalDocument && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
                <FileWarning className="h-6 w-6" /> Document Not Recognized
            </CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-center text-lg">The uploaded document does not appear to be a legal document. Please upload a valid legal document like a contract, notice, or affidavit for analysis.</p>
          </CardContent>
        </Card>
      )}

      {result && result.isLegalDocument && (
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-6 w-6" /> Analysis Complete
                </CardTitle>
                <CardDescription>Here is the summary, key points, and recommended steps from your document.</CardDescription>
            </CardHeader>
            <CardContent>
            <Accordion type="multiple" defaultValue={['summary']} className="w-full space-y-2">
              {result.summary && <AccordionItem value="summary" className="bg-background/50 rounded-lg px-4">
                <AccordionTrigger className="text-lg font-headline hover:no-underline">Summary</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed prose prose-invert max-w-none pt-2">
                  {result.summary}
                </AccordionContent>
              </AccordionItem>}
              {result.keyPoints && result.keyPoints.length > 0 && <AccordionItem value="key-points" className="bg-background/50 rounded-lg px-4">
                <AccordionTrigger className="text-lg font-headline hover:no-underline">Key Points</AccordionTrigger>
                <AccordionContent className="pt-2">
                  <ul className="space-y-3 list-inside">
                    {result.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <span className="text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>}
              {result.extractedEntities && (result.extractedEntities.parties.length > 0 || result.extractedEntities.locations.length > 0 || result.extractedEntities.dates.length > 0) && (
                 <AccordionItem value="entities" className="bg-background/50 rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-headline hover:no-underline">Key Entities</AccordionTrigger>
                    <AccordionContent className="pt-2 space-y-4">
                       {result.extractedEntities.parties.length > 0 && (
                           <div>
                               <h4 className="flex items-center gap-2 font-semibold mb-2"><Users className="h-5 w-5 text-primary" />Parties Involved</h4>
                               <ul className="list-disc list-inside">
                                   {result.extractedEntities.parties.map((item, i) => <li key={`party-${i}`}>{item}</li>)}
                               </ul>
                           </div>
                       )}
                       {result.extractedEntities.locations.length > 0 && (
                           <div>
                               <h4 className="flex items-center gap-2 font-semibold mb-2"><MapPin className="h-5 w-5 text-primary" />Locations</h4>
                               <ul className="list-disc list-inside">
                                   {result.extractedEntities.locations.map((item, i) => <li key={`loc-${i}`}>{item}</li>)}
                               </ul>
                           </div>
                       )}
                       {result.extractedEntities.dates.length > 0 && (
                           <div>
                               <h4 className="flex items-center gap-2 font-semibold mb-2"><Calendar className="h-5 w-5 text-primary" />Important Dates</h4>
                               <ul className="list-disc list-inside">
                                   {result.extractedEntities.dates.map((item, i) => <li key={`date-${i}`}>{item}</li>)}
                               </ul>
                           </div>
                       )}
                    </AccordionContent>
                 </AccordionItem>
              )}
               {result.riskAnalysis && result.riskAnalysis.length > 0 && (
                <AccordionItem value="risk-analysis" className="bg-background/50 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-headline hover:no-underline">Risk Analysis</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="space-y-4">
                      {result.riskAnalysis.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 border-l-4 border-yellow-500 pl-4 py-2 bg-muted/50 rounded-r-md">
                          <ShieldAlert className="h-6 w-6 text-yellow-500 mt-1 shrink-0" />
                          <div>
                            <p className="font-semibold text-base">{item.clause}</p>
                            <p className="text-muted-foreground mt-1"><span className="font-semibold text-foreground">Risk: </span>{item.risk}</p>
                             <p className="text-muted-foreground mt-1"><span className="font-semibold text-foreground">Suggestion: </span>{item.suggestion}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
              {result.suggestedSteps && result.suggestedSteps.length > 0 && (
                <AccordionItem value="suggested-steps" className="bg-background/50 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-headline hover:no-underline">Recommended Steps</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="space-y-3 list-inside">
                      {result.suggestedSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Gavel className="h-5 w-5 text-primary mt-1 shrink-0" />
                          <span className="text-base">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground flex items-center gap-2 bg-muted p-3 rounded-lg">
                  <AlertTriangle className="h-8 w-8 text-yellow-500 shrink-0"/>
                  <span>Disclaimer: The information provided is for informational purposes only and does not constitute legal advice. Please consult with a qualified legal professional for advice regarding your individual situation.</span>
              </div>
            </CardFooter>
        </Card>
      )}
    </div>
  );
}
