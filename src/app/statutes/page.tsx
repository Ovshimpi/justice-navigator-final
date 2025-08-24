'use client';

import { useState, useMemo } from 'react';
import { statutes } from '@/lib/mock-data';
import type { Statute } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Gavel, BookMarked, Bookmark, Search } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function StatuteLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>('bookmarkedStatutes', []);

  const categories = ['All', ...Array.from(new Set(statutes.map(s => s.category)))];

  const filteredStatutes = useMemo(() => {
    return statutes.filter(statute => {
      const matchesSearch = statute.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            statute.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || statute.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">Statute Library</h1>
        <p className="text-muted-foreground mt-2">Search, filter, and browse through a comprehensive list of Indian statutes.</p>
      </div>

      <Card>
        <CardContent className="p-4 flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-2/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title or description..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-1/3">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {filteredStatutes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStatutes.map((statute: Statute) => (
            <Card key={statute.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="font-headline text-xl">{statute.title}</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => toggleBookmark(statute.id)} aria-label="Bookmark">
                    <Bookmark className={cn('h-5 w-5', bookmarkedIds.includes(statute.id) ? 'fill-primary text-primary' : 'text-muted-foreground')} />
                  </Button>
                </div>
                <CardDescription>
                  {statute.category} - {statute.year} (Act No. {statute.act_no})
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{statute.description}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 text-primary">
                    <Link href={`/statutes/${statute.id}`}>Read More</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
         <div className="text-center py-16">
            <Search className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">No Statutes Found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
                Your search and filter combination did not return any results. Try adjusting your query.
            </p>
         </div>
      )}

      <div className="fixed bottom-6 right-6">
        <Button asChild className="bg-primary text-primary-foreground rounded-full h-14 w-14 shadow-lg hover:bg-primary/90">
          <Link href="/bookmarks">
            <BookMarked className="h-6 w-6"/>
            <span className="sr-only">View Bookmarks</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
