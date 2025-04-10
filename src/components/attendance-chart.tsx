"use client";

import {
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { MoreHorizontal } from "lucide-react";

const data = [
  {
    name: "Понеділок",
    присутні: 63,
    відсутні: 43,
  },
  {
    name: "Вівторок",
    присутні: 76,
    відсутні: 30,
  },
  {
    name: "Середа",
    присутні: 90,
    відсутні: 16,
  },
  {
    name: "Четвер",
    присутні: 86,
    відсутні: 20,
  },
  {
    name: "П'ятниця",
    присутні: 65,
    відсутні: 41,
  },
];

export const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Відвідуваність</h1>
        <MoreHorizontal size={24} className="text-gray-500 cursor-pointer" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="присутні"
            fill="#fae27c"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="відсутні"
            fill="#c3ebfa"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
