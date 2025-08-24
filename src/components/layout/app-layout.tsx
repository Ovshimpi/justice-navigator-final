'use client';

import { AppSidebarContent } from '@/components/app-sidebar';
import { AnimatedBackground } from '@/components/animated-background';
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { Gavel, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

function Header() {
  const { isMobile, toggleSidebar } = useSidebar();
  return (
     <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm shrink-0">
        <SidebarTrigger className={isMobile ? '' : 'hidden'}/>
        <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleSidebar}>
            <PanelLeft />
            <span className="sr-only">Toggle Sidebar</span>
        </Button>
         <div className="flex items-center gap-2 font-headline text-lg font-semibold md:hidden">
           <Gavel className="h-6 w-6 text-primary" />
           <span>Justice Navigator</span>
         </div>
     </header>
  )
}


export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen w-full">
        <Sidebar>
          <AppSidebarContent />
        </Sidebar>
        <div className="flex flex-1 flex-col h-full">
           <Header />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
        <AnimatedBackground />
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
