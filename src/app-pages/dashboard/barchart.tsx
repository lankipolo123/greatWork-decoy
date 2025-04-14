"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function CompactBarChart() {
  return (
    <div className="flex items-start gap-1">
      {/* Pulse block */}

      {/* Chart card */}
      <Card className="flex-1 p-2">
        <CardHeader className="pb-1">
          <CardTitle className="text-sm">Visitors</CardTitle>
          <CardDescription className="text-xs">Jan - Jun</CardDescription>
        </CardHeader>
        <CardContent className="py-1">
          <ChartContainer config={chartConfig} className="h-[100px] w-full">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={6}
                axisLine={false}
                fontSize={10}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={3} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={3} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start px-2 pt-1 text-[10px] gap-1">
          <div className="flex items-center gap-1 font-medium">
            +5.2% <TrendingUp className="h-3 w-3" />
          </div>
          <div className="text-muted-foreground">Last 6 months</div>
        </CardFooter>
      </Card>
    </div>
  )
}
