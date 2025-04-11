import Link from "next/link";
import Image from "next/image";

import { Table } from "@/components/table";
import { Button } from "@/components/ui/button";
import { FormModal } from "@/components/form-modal";
import { Pagination } from "@/components/pagination";
import { TableSearch } from "@/components/table-search";

import { role, studentsData } from "@/lib/data";
import { ArrowDownWideNarrow, Eye, SlidersHorizontal } from "lucide-react";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Інформація",
    accessor: "info",
  },
  {
    header: "ID учня",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Оцінка",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Телефон",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Адреса",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Дії",
    accessor: "action",
  },
];

const StudentListPage = () => {
  const renderRow = (item: Student) => (
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
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td className="flex items-center gap-2">
        <Button type="button" size="icon" variant="outline" asChild>
          <Link href={`/list/students/${item.id}`}>
            <Eye />
          </Link>
        </Button>
        {role === "admin" && (
          <FormModal table="student" type="delete" id={item.id} />
        )}
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Учні</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <Button
              size="icon"
              type="button"
              variant="outline"
              className="cursor-pointer"
            >
              <SlidersHorizontal />
            </Button>
            <Button
              size="icon"
              type="button"
              variant="outline"
              className="cursor-pointer"
            >
              <ArrowDownWideNarrow />
            </Button>
            {role === "admin" && <FormModal table="student" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      <Pagination />
    </div>
  );
};

export default StudentListPage;
