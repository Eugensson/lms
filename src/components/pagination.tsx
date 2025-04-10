import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = () => {
  return (
    <div className="px-2 py-4 flex items-center justify-center text-gray-500">
      <button
        disabled
        className="p-1 rounded-md bg-slate-100 text-xs font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft />
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-[#c3ebfa]">1</button>
        <button className="px-2 rounded-sm ">2</button>
        <button className="px-2 rounded-sm ">3</button>
        ...
        <button className="px-2 rounded-sm ">10</button>
      </div>
      <button className="p-1 rounded-md bg-slate-100 text-xs font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
        <ChevronRight />
      </button>
    </div>
  );
};
