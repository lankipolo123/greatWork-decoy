import * as React from "react"
import {
  GalleryVerticalEnd,
  LucideBriefcase,
  LucideCalendar,
  LucideCalendarDays,
  LucideLayoutDashboard,
  LucideTicket,
  LucideUser,
  LucideWallet,
  Settings,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import FloatingBtn from "@/components/side-barbtn"
import { NavUser } from "@/components/nav-user"
import { Header } from "@/components/header"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Jhon Doe",
    position: "Admin",
    avatar: "/avatars/shadcn.jpg",
  },
  header: [
    {
      name: "GreatWorK", // no longer used as a full string
      logo: GalleryVerticalEnd, // still used for the circle icon
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LucideLayoutDashboard,
      section: "Overview",
    },
    {
      title: "Reservations",
      url: "/reservations",
      icon: LucideCalendarDays,
      badgeCount: 5,
      section: "Daily Operation",
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: LucideCalendar,
      section: "Daily Operation",
    },
    {
      title: "Ticket",
      url: "/ticket",
      icon: LucideTicket,
      section: "Daily Operation",
    },
    {
      title: "User",
      url: "/user",
      icon: LucideUser,
      section: "Daily Operation",
    },
    {
      title: "Log",
      url: "/logs",
      icon: LucideBriefcase,
      section: "Daily Operation",
    },
    {
      title: "Payment",
      url: "/payment",
      icon: LucideWallet,
      section: "Accounting",
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      section: "Other",
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const customStyles = {
    "--sidebar-bg": "white", 
    "--tw-bg-opacity": "1"    
  } as React.CSSProperties;
  return (
    <Sidebar 
      collapsible="icon" 
      className="[&]:!bg-white [&_*]:!bg-white [&_[data-sidebar='sidebar']]:!bg-white [&_[data-slot='sidebar-inner']]:!bg-white"
      style={customStyles}
      {...props}
    >
      <SidebarHeader className="!bg-white">
        <Header header={data.header} />
      </SidebarHeader>
      <SidebarContent className="relative !bg-white">
        <FloatingBtn />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="!bg-white">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail className="after:!bg-white" />
    </Sidebar>
  )
}
