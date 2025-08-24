
import { statutes } from '@/lib/mock-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Gavel } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import React from 'react';

export default function StatuteDetailPage({ params }: { params: { id: string } }) {
  const statute = statutes.find(s => s.id === params.id);

  if (!statute) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Statute not found</h1>
        <p className="text-muted-foreground">The requested statute could not be found.</p>
        <Button asChild className="mt-4">
          <Link href="/statutes">Back to Library</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
       <Button asChild variant="outline" size="sm">
          <Link href="/statutes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Library
          </Link>
        </Button>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-grow">
              <CardTitle className="font-headline text-3xl md:text-4xl">{statute.title}</CardTitle>
              <CardDescription className="mt-2 text-lg">
                Act No. {statute.act_no} of {statute.year}
              </CardDescription>
            </div>
             <Badge variant="secondary" className="text-base px-4 py-2">{statute.category}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground leading-relaxed">{statute.description}</p>

          <div className="mt-8 space-y-4">
             <div className="flex items-center gap-4">
                <Gavel className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold font-headline">Key Details</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg border p-4">
                <div>
                    <p className="font-semibold">Year Enacted</p>
                    <p className="text-muted-foreground">{statute.year}</p>
                </div>
                 <div>
                    <p className="font-semibold">Act Number</p>
                    <p className="text-muted-foreground">{statute.act_no}</p>
                </div>
                 <div className="md:col-span-2">
                    <p className="font-semibold">Category</p>
                    <p className="text-muted-foreground">{statute.category}</p>
                </div>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
