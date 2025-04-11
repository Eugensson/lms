"use client";

import { MoreHorizontal } from "lucide-react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Група A", value: 92, fill: "#c3ebfa" },
  { name: "Група B", value: 8, fill: "#fae27c" },
];

export const Performance = () => {
  return (
    <div className="relative h-80 bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Результативність</h2>
        <MoreHorizontal size={24} className="text-gray-500 cursor-pointer" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-3xl font-bold">9.2</h3>
        <p className="text-sm text-gray-500">з 10</p>
      </div>
      <h3 className="absolute bottom-10 left-0 right-0 m-auto text-center font-medium">
        1-е півріччя - 2-е півріччя
      </h3>
    </div>
  );
};
