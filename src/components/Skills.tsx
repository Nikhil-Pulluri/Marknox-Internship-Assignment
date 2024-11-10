'use client'
import React from 'react'

import { Bar, BarChart, Rectangle, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import { Chart, ChartTooltip } from '@/components/ui/chart'

export const description = 'A collection of health charts.'

export function Skills() {
  return (
    <div>
      <center>
        <div style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>Skills</div>
      </center>

      <Card className="dark bg-black-700 w-full max-w-4xl mx-auto shadow-none border-none mt-2" x-chunk="charts-01-chunk-0">
        {' '}
        {/* Increased width */}
        <CardContent>
          <Chart
            config={{
              steps: {
                label: 'Steps',
                color: 'hsl(var(--chart-1))',
              },
            }}
          >
            <BarChart
              accessibilityLayer
              margin={{
                left: -4,
                right: -4,
              }}
              data={[
                { steps: 85, label: 'C++' },
                { steps: 60, label: 'Python' },
                { steps: 70, label: 'SQL' },
                { steps: 85, label: 'HTML' },
                { steps: 85, label: 'CSS' },
                { steps: 75, label: 'JS' },
                { steps: 40, label: 'TS' },
                { steps: 55, label: 'Bootstrap' },
                { steps: 60, label: 'Tailwind' },
                { steps: 75, label: 'MongoDB' },
                { steps: 80, label: 'React JS' },
                { steps: 45, label: 'Express JS' },
                { steps: 50, label: 'Node JS' },
                { steps: 60, label: 'Solidity' },
                { steps: 75, label: 'PHP' },
              ]}
              barSize={47}
              barCategoryGap="60%"
            >
              <Bar dataKey="steps" fill="var(--color-steps)" radius={5} fillOpacity={0.6} activeBar={<Rectangle fillOpacity={0.8} />} />
              <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={4} />
              <ChartTooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const { label, steps } = payload[0].payload // Access label and steps from payload
                    return (
                      <div className="tooltip bg-[#1a1a1a]  p-4 rounded-md">
                        <div className="font-bold">Skill : {label}</div>
                        <div className="font-bold">Proficiency : {steps}</div>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </BarChart>
          </Chart>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1">
          <CardDescription>
            Over the past 2 years, I have gained <span className="font-medium text-foreground">15</span> technical skills.
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
