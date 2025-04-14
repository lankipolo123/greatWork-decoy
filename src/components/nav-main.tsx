"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { type LucideIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router"; // Import from react-router-dom instead of react-router

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string // Ensure that each item has a `url` field for routing
    icon?: LucideIcon
    badgeCount?: number
    section?: string
  }[]  
}) {
  const [activeTitle, setActiveTitle] = useState<string>(items[0]?.title || "")

  const dashboardItem = items.find((item) => item.section === "Dashboard")
  const otherItems = items.filter((item) => item.section !== "Dashboard")

  const sectionMap = new Map<string, typeof items>()
  for (const item of otherItems) {
    const section = item.section || "Other"
    if (!sectionMap.has(section)) sectionMap.set(section, [])
    sectionMap.get(section)?.push(item)
  }

  const sortedSections = Array.from(sectionMap.keys()).sort((a, b) => {
    if (a === "Other") return 1
    if (b === "Other") return -1
    return 0
  })

  return (
    <div className="h-full overflow-hidden">
      {/* dashboard section */}
      {dashboardItem && (
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to={dashboardItem.url}> {/* This is now properly using react-router-dom */}
              <SidebarMenuButton
                onClick={() => setActiveTitle(dashboardItem.title)}
                tooltip={dashboardItem.title}
                className={`flex items-center justify-between rounded-none border-l-4 px-6 py-4 text-xl font-semibold ${
                  activeTitle === dashboardItem.title
                    ? "border-red-700 bg-muted text-red-700"
                    : "border-transparent text-muted-foreground"
                } ml-2`}
              >
                <div className="flex items-center gap-4">
                  {dashboardItem.icon && (
                    <dashboardItem.icon
                      className={`size-5 ${
                        activeTitle === dashboardItem.title
                          ? "text-red-700"
                          : "text-muted-foreground"
                      }`}
                    />
                  )}
                  <span>{dashboardItem.title}</span>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      )}

      {/* Grouped items */}
      {sortedSections.map((section) => (
        <SidebarGroup
          key={section}
          className={section === "Other" ? "mt-10" : "mt-6"}
        >
          {section !== "Other" && (
            <SidebarGroupLabel className="text-lg text-gray-700 tracking-wide px-6 pt-6 pb-10 font-semibold">
              {section.toUpperCase()}
            </SidebarGroupLabel>
          )}
          <SidebarMenu>
            {sectionMap.get(section)?.map((item) => {
              const isActive = item.title === activeTitle

              return (
                <SidebarMenuItem key={item.title} className="mb-2">
                  <Link to={item.url}> {/* Wrap each item in a Link */}
                    <SidebarMenuButton
                      onClick={() => setActiveTitle(item.title)}
                      tooltip={item.title}
                      className={`flex items-center justify-between rounded-none border-l-4 px-6 py-4 text-xl font-semibold p-5 ${
                        isActive
                          ? "border-red-700 bg-muted text-red-700"
                          : "border-transparent text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-5" >
                        {item.icon && (
                          <item.icon
                            className={`size-5 ${
                              isActive
                                ? "text-red-700"
                                : "text-muted-foreground"
                            }`}
                          />
                        )}
                        <span>{item.title}</span>
                      </div>

                      {item.badgeCount && item.badgeCount > 0 && (
                        <span className="ml-auto inline-flex items-center justify-center rounded-full bg-red-600 px-3 py-0.5 text-sm font-semibold text-white">
                          {item.badgeCount}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </div>
  )
}
