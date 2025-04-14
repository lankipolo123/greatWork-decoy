"use client";
import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RadarComponent() {
  return (
    <Card className="flex-1 p-2">
      <CardHeader className="pb-1">
        <CardTitle className="text-sm">Device Visitors</CardTitle>
        <CardDescription className="text-xs">Jan - Jun 2024</CardDescription>
      </CardHeader>
      <CardContent className="py-1">
        <ChartContainer
          config={chartConfig}
          className="h-[100px] w-full" // Set height and width to match the PieChart
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start px-2 pt-1 text-[10px] gap-1">
        <div className="flex items-center gap-1 font-medium">
          +2.5% <TrendingUp className="h-3 w-3" />
        </div>
        <div className="text-muted-foreground">Last 6 months</div>
      </CardFooter>
    </Card>
  );
}
