import { UserCard } from "@/components/user-card";
import { CountChart } from "@/components/count-chart";
import { FinanceChart } from "@/components/finance-chart";
import { Announcements } from "@/components/announcements";
import { EventCalendar } from "@/components/event-calendar";
import { AttendanceChart } from "@/components/attendance-chart";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/3 h-110">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-110">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-125">
          <FinanceChart />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
