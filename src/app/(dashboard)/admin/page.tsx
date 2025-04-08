import { UserCard } from "@/components/user-card";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      <div className="w-full lg:w-2/3">
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;
