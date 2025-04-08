import { Logo } from "@/components/logo";
import { Menu } from "@/components/menu";
import { Navbar } from "@/components/navbar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen flex">
      <div className="p-4 w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] space-y-4">
        <Logo />
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
