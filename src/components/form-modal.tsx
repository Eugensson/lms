"use client";

// import dynamic from "next/dynamic";
import { JSX, useState } from "react";
import { Plus, SquarePen, Trash2, X } from "lucide-react";

// USE LAZY LOADING

import { Button } from "@/components/ui/button";
import { TeacherForm } from "@/components/forms/teacher-form";
import { StudentForm } from "@/components/forms/student-form";

// const TeacherForm = dynamic(() => import("@/components/forms/teacher-form"), {
//   loading: () => <h1>Loading...</h1>,
// });

// const StudentForm = dynamic(() => import("@/components/forms/student-form"), {
//   loading: () => <h1>Loading...</h1>,
// });

const forms: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

export const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  id?: number;
}) => {
  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Усі дані буде втрачено. Ви впевнені, що хочете видалити дану
          інформацію?
        </span>
        <Button type="submit" size="lg" variant="destructive">
          Видалити
        </Button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Форму не знайдено!"
    );
  };

  return (
    <>
      <Button
        size="icon"
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      >
        {type === "create" ? (
          <Plus />
        ) : type === "update" ? (
          <SquarePen />
        ) : (
          <Trash2 />
        )}
      </Button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
