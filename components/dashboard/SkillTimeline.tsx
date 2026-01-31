"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const timelineData = [
  { month: 'Jan', level: 20 },
  { month: 'Mar', level: 45 },
  { month: 'Jun', level: 30 },
  { month: 'Aug', level: 70 },
  { month: 'Oct', level: 85 },
  { month: 'Dec', level: 95 },
];

export function SkillTimeline() {
  return (
   <div className="w-full h-80 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={timelineData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{fill: '#64748b', fontSize: 12}}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
          />
          <Line
            type="monotone" 
            dataKey="level" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 6 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}