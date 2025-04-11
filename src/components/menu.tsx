import Link from "next/link";

import { role } from "@/lib/data";
import { menuItems } from "@/constants";

export const Menu = () => {
  return (
    <ul className="text-sm">
      {menuItems.map(({ title, items }) => (
        <li className="flex flex-col gap-2" key={title}>
          <span className="my-4 hidden lg:block uppercase text-gray-400 font-light">
            {title}
          </span>
          <ul>
            {items.map(({ icon: Icon, label, href, visible }) => {
              if (visible.includes(role)) {
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className="py-2 md:px-2 flex items-center justify-center lg:justify-start gap-4 text-gray-500 rounded-md hover:bg-[#edf9fd] transition-colors"
                    >
                      <Icon />
                      <span className="hidden lg:block">{label}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};
