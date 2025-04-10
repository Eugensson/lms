import { IoMegaphoneOutline } from "react-icons/io5";
import { MessageSquareMore, Search } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="hidden md:flex items-center gap-2 px-2 text-xs rounded-full ring-[1.5px] ring-gray-300">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Пошук..."
          className="w-50 p-2 bg-transparent outline-none"
        />
      </div>
      <div className="w-full flex items-center justify-end gap-6">
        <div className="flex items-center justify-center size-7 bg-white rounded-full cursor-pointer">
          <MessageSquareMore size={20} className="text-gray-400" />
        </div>
        <div className="relative flex items-center justify-center size-7 bg-white rounded-full cursor-pointer">
          <IoMegaphoneOutline size={20} className="text-gray-400" />
          <div className="absolute -top-3 -right-3 size-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
