"use client";

import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "#ffffff",
  },
  {
    name: "Girls",
    count: 48,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 58,
    fill: "#c3ebfa",
  },
];

export const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Students</h2>
        <Image src="/moreDark.png" alt="3 dots" width={20} height={20} />
      </div>
      <div className="relative w-full h-3/4">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="Male-female ratio icon"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#fae27c] rounded-full" />
          <h1 className="font-bold">{data[1].count}</h1>
          <h2 className="text-xs text-gray-400">Girls (45%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-5 bg-[#c3ebfa] rounded-full" />
          <h1 className="font-bold">{data[2].count}</h1>
          <h2 className="text-xs text-gray-400">Boys (55%)</h2>
        </div>
      </div>
    </div>
  );
};
