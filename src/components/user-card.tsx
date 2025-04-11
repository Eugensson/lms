import { MoreHorizontal } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const UserCard = ({ type }: { type: string }) => {
  return (
    <Card className="flex-1">
      <CardContent className="flex items-center justify-between">
        <Badge>2025/26</Badge>
        <MoreHorizontal
          size={24}
          className="ttext-muted-foreground cursor-pointer"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-2xl">106</CardTitle>
        <CardDescription className="capitalize">{type}</CardDescription>
      </CardHeader>
    </Card>
  );
};
