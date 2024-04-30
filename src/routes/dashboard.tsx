import { Sidebar } from "../components/dashboard/layout/sidebar/Sidebar.tsx";
import { Topbar } from "../components/dashboard/layout/topbar/Topbar.tsx";

export const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Topbar />
    </div>
  );
};
