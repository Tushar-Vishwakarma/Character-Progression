/**
 * By: Tushar Vishwakarma
 */
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto gap-8 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="flex flex-col items-center gap-4 p-6 bg-background">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder-user.jpg" alt="Character Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <div className="text-2xl font-bold">John Doe</div>
            <div className="text-muted-foreground">Level 25 Warrior</div>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">125</div>
              <div className="text-muted-foreground text-sm">Strength</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">80</div>
              <div className="text-muted-foreground text-sm">Agility</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">100</div>
              <div className="text-muted-foreground text-sm">Vitality</div>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col gap-4 p-6 bg-background">
          <div className="text-2xl font-bold">Character Progression</div>
          <LinechartChart className="aspect-[16/9]" />
        </Card>
      </div>
      <Card className="flex flex-col gap-4 p-6 bg-background">
        <div className="text-2xl font-bold">Skill Tree</div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
              <SwordIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">Swordsmanship</div>
              <div className="text-muted-foreground text-sm">Level 18</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
              <ShieldIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">Defense</div>
              <div className="text-muted-foreground text-sm">Level 22</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
              <BoltIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">Magic</div>
              <div className="text-muted-foreground text-sm">Level 15</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function SwordIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" x2="19" y1="19" y2="13" />
      <line x1="16" x2="20" y1="16" y2="20" />
      <line x1="19" x2="21" y1="21" y2="19" />
    </svg>
  )
}
