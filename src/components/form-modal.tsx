"use client";

// import dynamic from "next/dynamic";
import { JSX } from "react";
import { Plus, SquarePen, Trash2 } from "lucide-react";

// USE LAZY LOADING

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          type="button"
          variant="outline"
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
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">
            {type === "create"
              ? "Додати"
              : type === "update"
              ? "Редагувати"
              : "Видалити"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {type === "create"
              ? "Додати нову інформацію"
              : type === "update"
              ? "Редагувати інформацію"
              : "Видалити інформацію"}
          </DialogDescription>
        </DialogHeader>
        <Form />
      </DialogContent>
    </Dialog>
  );
};
