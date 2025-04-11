import { UserCard } from "@/components/user-card";
import { CountChart } from "@/components/count-chart";
import { FinanceChart } from "@/components/finance-chart";
import { Announcements } from "@/components/announcements";
import { EventCalendar } from "@/components/event-calendar";
import { AttendanceChart } from "@/components/attendance-chart";

const AdminPage = () => {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <li>
            <UserCard type="student" />
          </li>
          <li>
            <UserCard type="teacher" />
          </li>
          <li>
            <UserCard type="parent" />
          </li>
          <li>
            <UserCard type="staff" />
          </li>
        </ul>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li>
            <CountChart />
          </li>
          <li>
            <AttendanceChart />
          </li>
          <li className="md:col-span-2">
            <FinanceChart />
          </li>
        </ul>
      </div>
      <div className="space-y-6">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
