'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateLegalPathways, type GenerateLegalPathwaysOutput } from '@/ai/flows/generate-legal-pathways';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Lightbulb, Loader2, Sparkles, AlertTriangle, ListChecks, CheckSquare, GanttChartSquare, Gavel } from 'lucide-react';

const formSchema = z.object({
  situationDescription: z.string().min(50, {
    message: 'Please provide a detailed description of at least 50 characters.',
  }),
});

export default function LegalGuidancePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateLegalPathwaysOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      situationDescription: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setResult(null);
    try {
      const guidanceResult = await generateLegalPathways(values);
      setResult(guidanceResult);
    } catch (error) {
      console.error('Error getting guidance:', error);
      toast({
        title: 'Guidance Generation Failed',
        description: 'Something went wrong while generating guidance. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resultSections = result ? [
    { value: "pathways", title: "Legal Pathways", icon: <GanttChartSquare className="h-5 w-5 text-primary"/>, content: result.legalPathways },
    { value: "statutes", title: "Relevant Statutes", icon: <Gavel className="h-5 w-5 text-primary"/>, content: result.relevantStatutes },
    { value: "procedures", title: "Applicable Procedures", icon: <ListChecks className="h-5 w-5 text-primary"/>, content: result.procedures },
    { value: "outcomes", title: "Potential Outcomes", icon: <CheckSquare className="h-5 w-5 text-primary"/>, content: result.potentialOutcomes }
  ] : [];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">Legal Guidance Tool</h1>
        <p className="text-muted-foreground mt-2">Describe your situation to receive AI-generated legal insights and potential pathways.</p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> Situation Solver
              </CardTitle>
              <CardDescription>Provide a detailed description of the legal issue you are facing. The more detail, the better the guidance.</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="situationDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Situation</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="For example: I entered into a rental agreement, but the landlord is not providing the promised amenities..."
                        className="min-h-[150px]"
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
                    Generating Guidance...
                  </>
                ) : (
                  'Get Guidance'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
         <div className="text-center space-y-4">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Generating your legal pathways. This may take a moment...</p>
        </div>
      )}

      {result && (
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles className="h-6 w-6" /> Legal Guidance Report
            </CardTitle>
            <CardDescription>Based on your situation, here are some potential legal considerations. This is not legal advice.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full space-y-2">
              {resultSections.map(section => (
                section.content.length > 0 && (
                  <AccordionItem value={section.value} key={section.value} className="bg-background/50 rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-headline hover:no-underline">
                        <div className="flex items-center gap-3">
                            {section.icon}
                            {section.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <ul className="space-y-2 list-disc list-inside text-base">
                        {section.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                )
              ))}
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
