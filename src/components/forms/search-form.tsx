import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const SearchForm = () => {
  return (
    <div className="hidden md:block relative w-full max-w-60">
      <Search
        size={16}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-muted-foreground"
      />
      <Input type="text" placeholder="Пошук..." className="pl-10" />
    </div>
  );
};
