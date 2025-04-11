"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    name: "Разом",
    count: 106,
    fill: "#ffffff",
  },
  {
    name: "Дівчата",
    count: 48,
    fill: "#ff0000",
  },
  {
    name: "Хлопці",
    count: 58,
    fill: "#0000ff",
  },
];

export const CountChart = () => {
  return (
    <Card className="h-100">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg">Учні</CardTitle>
        <MoreHorizontal
          size={24}
          className="text-muted-foreground cursor-pointer"
        />
      </CardHeader>
      <CardContent className="relative w-full h-full">
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
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-16">
        <div className="flex items-center gap-2">
          <div className="size-4 bg-[#ff0000] rounded-full" />
          <p className="font-bold">{data[1].count}</p>
          <p className="text-xs text-muted-foreground">Дівчата (45%)</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-4 bg-[#0000ff] rounded-full" />
          <p className="font-bold">{data[2].count}</p>
          <p className="text-xs text-muted-foreground">Хопці (55%)</p>
        </div>
      </CardFooter>
    </Card>
  );
};
