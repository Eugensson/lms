"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MoreHorizontal } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    name: "Січ",
    дохід: 4000,
    витрати: 2400,
  },
  {
    name: "Лют",
    дохід: 3000,
    витрати: 1398,
  },
  {
    name: "Бер",
    дохід: 2000,
    витрати: 9800,
  },
  {
    name: "Кві",
    дохід: 2780,
    витрати: 3908,
  },
  {
    name: "Тра",
    дохід: 1890,
    витрати: 4800,
  },
  {
    name: "Чер",
    дохід: 2390,
    витрати: 3800,
  },
  {
    name: "Лип",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Сер",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Вер",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Жов",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Лис",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Гру",
    дохід: 3490,
    витрати: 4300,
  },
];

export const FinanceChart = () => {
  return (
    <Card className="h-100">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg">Фінанси</CardTitle>
        <MoreHorizontal
          size={24}
          className="text-muted-foreground cursor-pointer"
        />
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "gray" }}
              tickLine={false}
              tickMargin={10}
              className="text-xs"
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "gray" }}
              tickLine={false}
              tickMargin={20}
              className="text-xs"
            />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="дохід"
              stroke="#0000ff"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="витрати"
              stroke="#ff0000"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
