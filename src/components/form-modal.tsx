"use client";

// import dynamic from "next/dynamic";
import { JSX, useState } from "react";
import { Plus, SquarePen, Trash2, X } from "lucide-react";

// USE LAZY LOADING

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
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#fae27c]"
      : type === "update"
      ? "bg-[#c3ebfa]"
      : "bg-[#cfceff]";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Усі дані буде втрачено. Ви впевнені, що хочете видалити дану
          інформацію?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Видалити
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Форму не знайдено!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} cursor-pointer`}
        onClick={() => setOpen(true)}
      >
        {type === "create" ? (
          <Plus size={16} />
        ) : type === "update" ? (
          <SquarePen size={16} />
        ) : (
          <Trash2 size={16} />
        )}
      </button>
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
