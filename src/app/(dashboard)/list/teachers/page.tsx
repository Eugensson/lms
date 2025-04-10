import Link from "next/link";
import Image from "next/image";
import { ArrowDownWideNarrow, Eye, SlidersHorizontal } from "lucide-react";

import { Table } from "@/components/table";
import { FormModal } from "@/components/form-modal";
import { Pagination } from "@/components/pagination";
import { TableSearch } from "@/components/table-search";

import { role, teachersData } from "@/lib/data";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Інформація",
    accessor: "info",
  },
  {
    header: "ID вчителя",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Предмети",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Заняття",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Телефон",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Адреса",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Дії",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#f1f0ff]"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-[#c3ebfa]">
              <Eye size={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="teacher" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Викладачі</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fae27c] cursor-pointer">
              <SlidersHorizontal size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fae27c] cursor-pointer">
              <ArrowDownWideNarrow size={16} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
