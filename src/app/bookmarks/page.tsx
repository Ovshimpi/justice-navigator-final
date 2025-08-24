'use client';

import { useMemo } from 'react';
import { statutes } from '@/lib/mock-data';
import type { Statute } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookMarked, BookmarkX, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function BookmarksPage() {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>('bookmarkedStatutes', []);

  const bookmarkedStatutes = useMemo(() => {
    return statutes.filter(statute => bookmarkedIds.includes(statute.id));
  }, [bookmarkedIds]);

  const removeBookmark = (id: string) => {
    setBookmarkedIds(prev => prev.filter(bId => bId !== id));
  };
  
  const clearAllBookmarks = () => {
    setBookmarkedIds([]);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">My Bookmarks</h1>
            <p className="text-muted-foreground mt-2">Your saved statutes for quick access.</p>
        </div>
        {bookmarkedStatutes.length > 0 && (
          <Button variant="destructive" onClick={clearAllBookmarks}>
            <Trash2 className="mr-2 h-4 w-4" /> Clear All
          </Button>
        )}
      </div>

      {bookmarkedStatutes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookmarkedStatutes.map((statute: Statute) => (
            <Card key={statute.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{statute.title}</CardTitle>
                <CardDescription>
                  {statute.category} - {statute.year} (Act No. {statute.act_no})
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{statute.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                 <Button variant="link" asChild className="p-0 text-primary">
                    <Link href={`/statutes/${statute.id}`}>Read More</Link>
                 </Button>
                 <Button variant="ghost" size="icon" onClick={() => removeBookmark(statute.id)} aria-label="Remove Bookmark">
                    <BookmarkX className="h-5 w-5 text-red-500" />
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 rounded-lg border-2 border-dashed border-muted-foreground/20">
            <BookMarked className="mx-auto h-16 w-16 text-muted-foreground/50" />
            <h3 className="mt-4 text-xl font-semibold">No Bookmarks Yet</h3>
            <p className="mt-2 text-md text-muted-foreground">
                You can bookmark statutes from the <Link href="/statutes" className="text-primary underline hover:no-underline">Statute Library</Link>.
            </p>
         </div>
      )}
    </div>
  );
}
