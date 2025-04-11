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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    name: "Пн",
    присутні: 63,
    відсутні: 43,
  },
  {
    name: "Вт",
    присутні: 76,
    відсутні: 30,
  },
  {
    name: "Ср",
    присутні: 90,
    відсутні: 16,
  },
  {
    name: "Чт",
    присутні: 86,
    відсутні: 20,
  },
  {
    name: "Пт",
    присутні: 65,
    відсутні: 41,
  },
];

export const AttendanceChart = () => {
  return (
    <Card className="h-100">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg">Відвідуваність</CardTitle>
        <MoreHorizontal
          size={24}
          className="text-muted-foreground cursor-pointer"
        />
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="gray"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "gray" }}
              tickLine={false}
              className="text-xs"
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "gray" }}
              tickLine={false}
              className="text-xs"
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                borderColor: "lightgray",
              }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="присутні"
              fill="#0000ff"
              legendType="circle"
              radius={[5, 5, 0, 0]}
            />
            <Bar
              dataKey="відсутні"
              fill="#ff0000"
              legendType="circle"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
