import {
  PiChalkboardTeacherFill,
  PiBookOpenText,
  PiCalendarLight,
} from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { TbDropletPlus } from "react-icons/tb";
import { PiTreeStructureLight } from "react-icons/pi";
import { CalendarDays, Mail, Phone } from "lucide-react";

import { FormModal } from "@/components/form-modal";
import { Performance } from "@/components/performance";
import { BigCalendar } from "@/components/big-calendar";
import { Announcements } from "@/components/announcements";

import { role } from "@/lib/data";

const StudentDetailsPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 flex gap-4 rounded-md bg-[#c3ebfa]">
            <div className="relative w-1/3 h-fit md:max-h-50 lg:max-h-30 aspect-square overflow-hidden rounded-full">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Фото учня"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">Cameron Moran</h2>
                {role === "admin" && (
                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      username: "deanguerrero",
                      email: "deanguerrero@gmail.com",
                      password: "password",
                      firstName: "Dean",
                      lastName: "Guerrero",
                      phone: "+1 234 567 89",
                      address: "1234 Main St, Anytown, USA",
                      bloodType: "A+",
                      dateOfBirth: "2000-01-01",
                      sex: "male",
                      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}
                  />
                )}
              </div>
              <p className="text-xs md:text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="grid grid-col-1 md:grid-cols-2 gap-2 md:gap-4 text-xs">
                <li className="flex items-center gap-2">
                  <TbDropletPlus size={16} />
                  <p>0(I)Rh+</p>
                </li>
                <li className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <p>Січень 2025</p>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  <p>user@gmail.com</p>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} />
                  <p>+1 234 567</p>
                </li>
              </ul>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-4">
            <li className="relative p-4 flex flex-col gap-4 rounded-md bg-white">
              <PiCalendarLight className="absolute top-4 right-4 size-7 text-gray-500" />
              <h3 className="text-2xl font-semibold">90%</h3>
              <p className="text-gray-500">Відвідуваність</p>
            </li>
            <li className="relative p-4 flex flex-col gap-4 rounded-md bg-white">
              <PiTreeStructureLight className="absolute top-4 right-4 size-7 text-gray-500" />
              <h3 className="text-2xl font-semibold">6.5</h3>
              <p className="text-gray-500">Середній бал</p>
            </li>
            <li className="relative p-4 flex flex-col gap-4 rounded-md bg-white">
              <PiBookOpenText className="absolute top-4 right-4 size-7 text-gray-500" />
              <h3 className="text-2xl font-semibold">18</h3>
              <p className="text-gray-500">Предмети</p>
            </li>
            <li className="relative p-4 flex flex-col gap-4 rounded-md bg-white">
              <PiChalkboardTeacherFill className="absolute top-4 right-4 size-7 text-gray-500" />
              <h3 className="text-2xl font-semibold">6A</h3>
              <p className="text-gray-500">Клас</p>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-md p-4 h-200">
          <h1>Розклад занять учня</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold">Shortcuts</h2>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-[#edf9fd]" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-[#f1f0ff]" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-[#fefce8]" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-[#edf9fd]" href="/">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentDetailsPage;
