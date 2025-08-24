'use client';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import {
  Gavel,
  Home,
  FileText,
  Lightbulb,
  BookOpen,
  BookMarked,
  BookOpenCheck,
  PanelLeft,
  User,
  Code,
  FilePenLine,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/legal-analyst', label: 'AI Legal Analyst', icon: FileText },
  { href: '/guidance', label: 'Legal Guidance', icon: Lightbulb },
  { href: '/document-drafter', label: 'Document Drafter', icon: FilePenLine },
  { href: '/statutes', label: 'Statute Library', icon: Gavel },
  { href: '/learning', label: 'Learning Paths', icon: BookOpenCheck },
  { href: '/bookmarks', label: 'My Bookmarks', icon: BookMarked },
];

export function AppSidebarContent() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-amber-600 text-primary-foreground">
            <Gavel className="h-6 w-6" />
          </div>
          <span className="font-headline text-lg font-semibold">Justice Navigator</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
         <SidebarGroup className="mt-4">
            <SidebarGroupLabel className="flex items-center gap-2">
                <Code />
                <span>Developers</span>
            </SidebarGroupLabel>
            <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Om Shimpi" className="cursor-default hover:bg-sidebar-accent/50">
                        <User />
                        <span>Om Shimpi</span>
                    </SidebarMenuButton>
                 </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Rohit Marathe" className="cursor-default hover:bg-sidebar-accent/50">
                        <User />
                        <span>Rohit Marathe</span>
                    </SidebarMenuButton>
                 </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Kunal Mali" className="cursor-default hover:bg-sidebar-accent/50">
                        <User />
                        <span>Kunal Mali</span>
                    </SidebarMenuButton>
                 </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Ganesh Deore" className="cursor-default hover:bg-sidebar-accent/50">
                        <User />
                        <span>Ganesh Deore</span>
                    </SidebarMenuButton>
                 </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <p className="text-xs text-muted-foreground">© 2025 Justice Navigator</p>
      </SidebarFooter>
    </>
  );
}
