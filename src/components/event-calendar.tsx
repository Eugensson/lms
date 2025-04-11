"use client";

import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";

import "react-calendar/dist/Calendar.css";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="p-4 rounded-md">
      <Calendar onChange={setValue} value={value} locale="uk" />
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold my-4">Події</h2>
        <MoreHorizontal
          size={24}
          className="text-muted-foreground cursor-pointer"
        />
      </div>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id}>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                <Badge>{event.time}</Badge>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
