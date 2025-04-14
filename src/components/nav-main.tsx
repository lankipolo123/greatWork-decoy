"use client"

import { useState } from "react"
import { type LucideIcon } from "lucide-react"
import { Link } from "react-router"  // Import from react-router-dom instead of react-router
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

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

  const overviewItem = items.find((item) => item.section === "Overview")
  const otherItems = items.filter((item) => item.section !== "Overview")

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
      {/* Overview section */}
      {overviewItem && (
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to={overviewItem.url}> {/* This is now properly using react-router-dom */}
              <SidebarMenuButton
                onClick={() => setActiveTitle(overviewItem.title)}
                tooltip={overviewItem.title}
                className={`flex items-center justify-between rounded-none border-l-4 px-6 py-4 text-xl font-semibold ${
                  activeTitle === overviewItem.title
                    ? "border-red-700 bg-muted text-red-700"
                    : "border-transparent text-muted-foreground"
                } ml-2`}
              >
                <div className="flex items-center gap-4">
                  {overviewItem.icon && (
                    <overviewItem.icon
                      className={`size-5 ${
                        activeTitle === overviewItem.title
                          ? "text-red-700"
                          : "text-muted-foreground"
                      }`}
                    />
                  )}
                  <span>{overviewItem.title}</span>
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
            <SidebarGroupLabel className="text-lg text-gray-700 tracking-wide px-6 pt-6 pb-4 font-semibold">
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
                      className={`flex items-center justify-between rounded-none border-l-4 px-6 py-4 text-xl font-semibold ${
                        isActive
                          ? "border-red-700 bg-muted text-red-700"
                          : "border-transparent text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-4">
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
