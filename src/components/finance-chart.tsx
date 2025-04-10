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
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Фінанси</h1>
        <MoreHorizontal size={24} className="text-gray-500 cursor-pointer" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
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
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
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
            stroke="#1d4ed8"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="витрати"
            stroke="#fda4af"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
