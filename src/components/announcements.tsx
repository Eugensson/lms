import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Announcements = () => {
  return (
    <div className="p-4 rounded-md space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Оголошення</h2>
        <span className="text-sm text-muted-foreground">Переглянути усі</span>
      </div>
      <ul className="space-y-4">
        <li>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="line-clamp-1">
                Lorem ipsum dolor sit
              </CardTitle>
              <Badge>2025-06-06</Badge>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, expedita. Rerum, quidem facilis?
              </p>
            </CardContent>
          </Card>
        </li>
        <li>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="line-clamp-1">
                Lorem ipsum dolor sit
              </CardTitle>
              <Badge>2025-06-06</Badge>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, expedita. Rerum, quidem facilis?
              </p>
            </CardContent>
          </Card>
        </li>
      </ul>
    </div>
  );
};
