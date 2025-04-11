import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";

import { Table } from "@/components/table";
import { Button } from "@/components/ui/button";
import { FormModal } from "@/components/form-modal";
import { Pagination } from "@/components/pagination";
import { TableSearch } from "@/components/table-search";

import { assignmentsData, role } from "@/lib/data";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Предмет",
    accessor: "name",
  },
  {
    header: "Клас",
    accessor: "class",
  },
  {
    header: "Викладач",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Термін виконання",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Дії",
    accessor: "action",
  },
];

const AssignmentListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#f1f0ff]"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="assignment" type="update" data={item} />
              <FormModal table="assignment" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Завдання</h1>
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
            {role === "admin" && <FormModal table="assignment" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;
