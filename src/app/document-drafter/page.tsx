'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { draftLegalDocument, type DraftLegalDocumentOutput } from '@/ai/flows/draft-legal-document';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilePenLine, Loader2, Sparkles, Clipboard, ClipboardCheck, Download } from 'lucide-react';

const formSchema = z.object({
  documentType: z.string({ required_error: "Please select a document type." }),
  documentDetails: z.string().min(50, {
    message: 'Please provide detailed information of at least 50 characters.',
  }),
});

const documentTypes = [
    "Rental Agreement",
    "Legal Notice",
    "Affidavit",
    "Power of Attorney",
    "Non-Disclosure Agreement (NDA)"
];

export default function DocumentDrafterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DraftLegalDocumentOutput | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentDetails: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setResult(null);
    setIsCopied(false);
    try {
      const draftResult = await draftLegalDocument(values);
      setResult(draftResult);
    } catch (error) {
      console.error('Error drafting document:', error);
      toast({
        title: 'Drafting Failed',
        description: 'Something went wrong while generating the document. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    if (result?.draftContent) {
      navigator.clipboard.writeText(result.draftContent);
      setIsCopied(true);
      toast({ title: 'Copied to clipboard!' });
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (result?.draftContent) {
      const blob = new Blob([result.draftContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${form.getValues('documentType').replace(/ /g, '-')}-draft.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast({ title: 'Download started!' });
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">AI Document Drafter</h1>
        <p className="text-muted-foreground mt-2">Generate drafts of common legal documents based on your inputs.</p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FilePenLine className="h-5 w-5" /> Document Details
              </CardTitle>
              <CardDescription>Select a document type and provide the necessary details for the AI to generate a draft.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="documentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Document Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type of document to draft" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {documentTypes.map(type => (
                           <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="documentDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., For a Rental Agreement, include: Landlord's name, Tenant's name, property address, rent amount, security deposit, lease duration, etc."
                        className="min-h-[180px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Drafting Document...
                  </>
                ) : (
                  'Generate Draft'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
         <div className="text-center space-y-4">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">The AI is drafting your document. This may take a moment...</p>
        </div>
      )}

      {result && (
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-6 w-6" /> Generated Draft
                </CardTitle>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={handleDownload} aria-label="Download draft">
                       <Download className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy to clipboard">
                       {isCopied ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
                    </Button>
                </div>
            </div>
            <CardDescription>Review the generated draft below. Remember to consult a legal professional before use.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none whitespace-pre-wrap p-4 rounded-md bg-muted/50 border">
              {result.draftContent}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
