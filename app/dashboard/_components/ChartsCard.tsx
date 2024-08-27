'use client'

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'



const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export default function ChartsCard({
  data: { salesData },
}: {
  data: { salesData: { months: string; totalSales: number }[] }
}) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={salesData}>
            <XAxis
              dataKey="months"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              axisLine={false}
              tick={{ fill: '#d1d5db' }}
              tickLine={false}
            />

            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar
              dataKey="totalSales"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
              legendType="circle"
            />
          </BarChart>
        </ChartContainer>

        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart data={salesData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="months"
              fontSize={12}
              tickLine={false}
              stroke="#888888"
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <YAxis
              axisLine={false}
              tick={{ fill: '#d1d5db' }}
              tickLine={false}
            />

            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />

            <Bar
              dataKey="totalSales"
              fill="var(--color-desktop)"
              // className="fill-primary"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>

      
      </CardContent>
    </Card>
  )
}
