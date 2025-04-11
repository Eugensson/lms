import { IoHomeOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { RiParentLine } from "react-icons/ri";
import { SlNote } from "react-icons/sl";
import { SiGoogleclassroom } from "react-icons/si";
import { BsPencilSquare } from "react-icons/bs";
import { PiExamLight } from "react-icons/pi";
import { MdOutlineAssignmentLate } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { TfiAnnouncement } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

export const menuItems = [
  {
    title: "Меню",
    items: [
      {
        icon: IoHomeOutline,
        label: "Головна",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: PiStudent,
        label: "Викладачі",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: LuUsers,
        label: "Учні",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: RiParentLine,
        label: "Батьки",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: SlNote,
        label: "Предмети",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: SiGoogleclassroom,
        label: "Класи",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: BsPencilSquare,
        label: "Уроки",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: PiExamLight,
        label: "Іспити",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: MdOutlineAssignmentLate,
        label: "Завдання",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: IoSpeedometerOutline,
        label: "Результати",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: BsCalendar3,
        label: "Відвідуваність",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: MdEventAvailable,
        label: "Події",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: AiOutlineMessage,
        label: "Повідомлення",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: TfiAnnouncement,
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
        icon: CgProfile,
        label: "Профіль",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: IoSettingsOutline,
        label: "Налаштування",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: AiOutlineLogout,
        label: "Розлогуватися",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
