import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";

import { Table } from "@/components/table";
import { FormModal } from "@/components/form-modal";
import { Pagination } from "@/components/pagination";
import { TableSearch } from "@/components/table-search";

import { parentsData, role } from "@/lib/data";

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Інформація",
    accessor: "info",
  },
  {
    header: "Імена учнів",
    accessor: "students",
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
    header: "Дії",
    accessor: "action",
  },
];

const ParentListPage = () => {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#f1f0ff]"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Батьки</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fae27c] cursor-pointer">
              <SlidersHorizontal size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fae27c] cursor-pointer">
              <ArrowDownWideNarrow size={16} />
            </button>
            {role === "admin" && <FormModal table="parent" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      <Pagination />
    </div>
  );
};

export default ParentListPage;
