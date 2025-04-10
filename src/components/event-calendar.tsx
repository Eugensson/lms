"use client";

import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";

import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const EventCalendar = () => {
  const [value, setValue] = useState<Value | null>(null);

  useEffect(() => {
    setValue(new Date());
  }, []);

  if (value === null) return null;

  return (
    <div className="p-4 rounded-md bg-white">
      <Calendar onChange={setValue} value={value} locale="uk" />
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold my-4">Події</h2>
        <MoreHorizontal size={24} className="text-gray-500 cursor-pointer" />
      </div>
      <ul className="flex flex-col gap-4">
        {events.map((event) => (
          <li
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-[#c3ebfa] even:border-t-[#cfceff]"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-600">{event.title}</h3>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
