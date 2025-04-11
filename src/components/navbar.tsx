import { IoMegaphoneOutline, IoChatboxEllipsesOutline } from "react-icons/io5";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/forms/search-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <SearchForm />
      <div className="w-full flex items-center justify-end gap-6">
        <Button
          variant="outline"
          size="icon"
          className="relative cursor-pointer"
        >
          <IoChatboxEllipsesOutline />
          <Badge
            variant="destructive"
            className="absolute -top-3 -right-3 size-5 rounded-full"
          >
            5
          </Badge>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="relative cursor-pointer"
        >
          <IoMegaphoneOutline />
          <Badge
            variant="destructive"
            className="absolute -top-3 -right-3 size-5 rounded-full"
          >
            4
          </Badge>
        </Button>

        <div className="text-xs">
          <p className="font-medium leading-3">John Doe</p>
          <p className="text-muted-foreground text-right">Admin</p>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
