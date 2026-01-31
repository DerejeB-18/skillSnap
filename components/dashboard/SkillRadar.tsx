"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts"

const data = [
  { subject: "Frontend", A: 120, fullMark: 150 },
  { subject: "Backend", A: 98, fullMark: 150 },
  { subject: "DevOps", A: 86, fullMark: 150 },
  { subject: "Design", A: 99, fullMark: 150 },
  { subject: "Database", A: 85, fullMark: 150 },
  { subject: "Security", A: 65, fullMark: 150 },
]

export default function SkillRadar() {
  return (
    /* We use aspect-square or a fixed height to ensure the container
      is never 0 pixels tall, which stops the Recharts error.
    */
    <div className="w-full h-80 aspect-square flex items-center justify-center mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}