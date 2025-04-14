"use client"

import { useState } from "react"
import { LogOut } from "lucide-react"
import { LogOutDialog } from "./Logout/logout-alert"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    position: string
    avatar: string
  }
}) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)

  const handleConfirmLogout = () => {
    // TODO: your logout logic (clear tokens, redirect, etc.)
    console.log("Logged out")
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.position}</span>
            </div>
            <button
              onClick={() => setShowLogoutDialog(true)}
              className="ml-auto size-4 text-muted-foreground hover:text-destructive"
              aria-label="Log out"
            >
              <LogOut />
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <LogOutDialog
        open={showLogoutDialog}
        onOpenChange={setShowLogoutDialog}
        onConfirm={handleConfirmLogout}
      />
    </>
  )
}
