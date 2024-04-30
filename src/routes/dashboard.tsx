import { Sidebar } from "src/components";
import { Topbar } from "src/components";

export const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Topbar />
    </div>
  );
};
