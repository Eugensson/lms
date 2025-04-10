import Link from "next/link";
import Image from "next/image";

import { role } from "@/lib/data";

const menuItems = [
  {
    title: "Меню",
    items: [
      {
        icon: "/home.png",
        label: "Головна",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Викладачі",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Учні",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Батьки",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Предмети",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Класи",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Уроки",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Іспити",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Завдання",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Результати",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Відвідуваність",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Події",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Повідомлення",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Оголошення",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "Додатково",
    items: [
      {
        icon: "/profile.png",
        label: "Профіль",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Налаштування",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Розлогуватися",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export const Menu = () => {
  return (
    <ul className="text-sm">
      {menuItems.map((menuItem) => (
        <li className="flex flex-col gap-2" key={menuItem.title}>
          <span className="my-4 hidden lg:block uppercase text-gray-400 font-light">
            {menuItem.title}
          </span>
          <ul>
            {menuItem.items.map((item) => {
              if (item.visible.includes(role)) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="py-2 md:px-2 flex items-center justify-center lg:justify-start gap-4 text-gray-500 rounded-md hover:bg-[#edf9fd] transition-colors"
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={20}
                        height={20}
                      />
                      <span className="hidden lg:block">{item.label}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};
