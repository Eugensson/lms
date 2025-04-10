"use client";

import { useState } from "react";
import { parse } from "date-fns/parse";
import { uk } from "date-fns/locale/uk";
import { format } from "date-fns/format";
import { getDay } from "date-fns/getDay";
import { startOfWeek } from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer, View, Views } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { calendarEvents } from "@/lib/data";

const locales = {
  uk: uk,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      culture="uk"
      defaultDate={new Date()}
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      messages={{
        today: "Сьогодні",
        previous: "Назад",
        next: "Вперед",
        day: "День",
        work_week: "Навчальний тиждень",
        agenda: "Порядок денний",
        date: "Дата",
        time: "Час",
        event: "Подія",
        noEventsInRange: "Подій у цьому діапазоні немає.",
        showMore: (total) => `+ ще ${total}`,
      }}
    />
  );
};
