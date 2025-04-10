import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";

import { Table } from "@/components/table";
import { FormModal } from "@/components/form-modal";
import { Pagination } from "@/components/pagination";
import { TableSearch } from "@/components/table-search";

import { eventsData, role } from "@/lib/data";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Назва",
    accessor: "title",
  },
  {
    header: "Клас",
    accessor: "class",
  },
  {
    header: "Дата",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Початок",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Закінчення",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Дії",
    accessor: "action",
  },
];

const EventListPage = () => {
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#f1f0ff]"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Події</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fae27c] cursor-pointer">
              <SlidersHorizontal size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fae27c] cursor-pointer">
              <ArrowDownWideNarrow size={16} />
            </button>
            {role === "admin" && <FormModal table="event" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      <Pagination />
    </div>
  );
};

export default EventListPage;
