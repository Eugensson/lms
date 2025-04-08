import Image from "next/image";

export const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="flex-1 space-y-4 rounded-2xl odd:bg-[#cfceff] even:bg-[#fae27c] p-4 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2025/26
        </span>
        <Image
          src="/more.png"
          alt="more"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <h2 className="text-2xl font-semibold">1,234</h2>
      <h3 className="text-sm font-medium capitalize text-gray-500">{type}</h3>
    </div>
  );
};
