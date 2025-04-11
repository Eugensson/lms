"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { CloudUpload } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/input-field";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

export const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <h2 className="text-xl font-semibold text-center">
        Додати нового викладача
      </h2>
      <p className="text-xs text-muted-foreground font-medium">
        Інформація про викладача
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <InputField
          label="Прізвище та ініціали"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Електронна пошта"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Пароль"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <p className="text-xs text-muted-foreground font-medium">
        Особиста інформація
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
        <InputField
          label="Прізвище"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Ім'я"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Контакний телефон"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Адреса проживання"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Група крові"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Дата народження"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="space-y-2">
          <Label className="text-xs font-normal">Стать</Label>
          <Select {...register("sex")} defaultValue={data?.sex}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Оберіть стать" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Чоловік</SelectItem>
              <SelectItem value="female">Жінка</SelectItem>
            </SelectContent>
          </Select>
          {errors.sex?.message && (
            <p className="text-xs text-destructive">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="space-y-2 mr-auto">
          <Label className="text-xs font-normal cursor-pointer flex flex-col gap-1">
            Оновити зображення
            <input
              type="file"
              id="img"
              {...register("img")}
              className="sr-only"
            />
            <CloudUpload className="text-muted-foreground mt-4 ml-4" />
          </Label>
          {errors.img?.message && (
            <p className="text-xs text-destructive">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <Button type="submit" size="lg" className="w-50 flex mx-auto">
        {type === "create" ? "Додати" : "Оновити"}
      </Button>
    </form>
  );
};
