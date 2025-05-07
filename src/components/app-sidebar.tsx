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
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
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
      title: "Dashboard",
      url: "/dashboard",
      icon: LucideLayoutDashboard,
      section: "Dashboard",
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
  const {toggleSidebar, open} = useSidebar()
  return (
    <Sidebar  collapsible="icon" className="relative" {...props}>
    <div onClick={toggleSidebar} className=" 
    absolute -right-3 top-14">
      {
        open ? (
          <img src="./Vector.svg" alt="vector" className="z-25"/>
        ) : (
          <img src="./Vectorflip.svg" alt="vector" className="z-25"  />
        )
      }

    </div>
      <SidebarHeader>
      <div className="flex items-center justify-center border-b-2 p-1" >
        {
          open ? (
            <img src="./GWlogo.svg" alt="Sidebar" className=""  />
          ) : (
            <img src="./logostick.svg" alt="Sidebar" className=" relative items-center justify-center "  />
          )
        }
       </div>
      </SidebarHeader>
      <SidebarContent className="relative top-2.5 !bg-white p-2.5 overflow-hidden">
        <div>
        <NavMain items={data.navMain}/>
        </div>
      </SidebarContent>
      <SidebarFooter className="!bg-white">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>


fsdfsdfsdfsdf
dfsdfsdfdsfsd
ssdasdasdasdasd
AppSidebarsd
asas
d
AuthenticatorAssertionResponsed
  )
}
