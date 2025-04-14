import * as React from "react";


import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function Header({
  header,
}: {
  header: {
    name: string;
    logo: React.ComponentType<{ className?: string }>; // ✅ Accepts className
    plan: string;
  }[];
}) {
  const [activeTeam] = React.useState(header?.[0]);

  if (!activeTeam) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="cursor-default">
        <>
        <h1>LOGO</h1>
        </>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
