export const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Оголошення</h2>
        <span className="text-xs text-gray-400">Переглянути усі</span>
      </div>
      <ul className="flex flex-col gap-4 mt-4">
        <li className="bg-[#edf9fd] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate">Lorem ipsum dolor sit</h3>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-06-06
            </span>
          </div>
          <p className="line-clamp-2 text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </li>
        <li className="bg-[#f1f0ff] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate">Lorem ipsum dolor sit</h3>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-06-06
            </span>
          </div>
          <p className="line-clamp-2 text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </li>
        <li className="bg-[#fefce8] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate">Lorem ipsum dolor sit</h3>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-06-06
            </span>
          </div>
          <p className="line-clamp-2 text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </li>
      </ul>
    </div>
  );
};
