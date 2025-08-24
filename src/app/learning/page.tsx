import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { learningPaths } from '@/lib/mock-data';
import type { LearningPath } from '@/lib/types';
import { BookOpenCheck, Clock, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LearningPathsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">Learning Paths</h1>
        <p className="text-muted-foreground mt-2">Follow curated paths to build your legal expertise from the ground up.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {learningPaths.map((path: LearningPath) => (
          <Card key={path.id} className="flex flex-col hover:border-primary transition-colors duration-300 group">
            <CardHeader>
              <div className="flex justify-between items-center">
                 <CardTitle className="font-headline text-xl">{path.title}</CardTitle>
                 <Badge variant={path.category === 'Beginner' ? 'secondary' : path.category === 'Intermediate' ? 'default' : 'destructive'} className="capitalize">{path.category}</Badge>
              </div>
              <CardDescription>{path.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Layers className="mr-2 h-4 w-4" />
                <span>{path.modules} Modules</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                <span>Approx. {path.duration}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
