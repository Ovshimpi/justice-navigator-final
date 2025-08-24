import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpenCheck, FileText, Gavel, Lightbulb, ArrowRight, BookMarked, FilePenLine } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "AI Legal Analyst",
      description: "Upload legal documents for AI-powered summaries and key point extraction.",
      href: "/legal-analyst"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "Legal Guidance Tool",
      description: "Describe your situation to get tailored legal pathways and advice.",
      href: "/guidance"
    },
    {
        icon: <FilePenLine className="h-8 w-8 text-accent" />,
        title: "AI Document Drafter",
        description: "Generate drafts for common legal documents like agreements and notices.",
        href: "/document-drafter"
    },
    {
      icon: <Gavel className="h-8 w-8 text-accent" />,
      title: "Statute Library",
      description: "Search and browse a comprehensive database of Indian legal statutes.",
      href: "/statutes"
    },
    {
      icon: <BookOpenCheck className="h-8 w-8 text-accent" />,
      title: "Learning Paths",
      description: "Follow curated learning paths to build your legal knowledge step-by-step.",
      href: "/learning"
    },
    {
      icon: <BookMarked className="h-8 w-8 text-accent" />,
      title: "My Bookmarks",
      description: "Access your saved statutes and legal resources in one convenient place.",
      href: "/bookmarks"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-12 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-50 via-amber-200 to-primary">
        Justice Navigator
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
        Your AI-powered guide to demystifying Indian Law. Navigate legal complexities with clarity and confidence.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
          <Link href="/guidance">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:text-primary-foreground">
          <Link href="/statutes">Explore Statutes</Link>
        </Button>
      </div>
      
      <div className="mt-20 w-full max-w-6xl space-y-10">
        <h2 className="text-3xl font-headline font-semibold">Core Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="group">
              <Card className="h-full bg-card/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader className="flex flex-row items-start gap-4 p-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div className="text-left">
                    <CardTitle className="text-xl font-headline">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                  <ArrowRight className="ml-auto mt-1 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
