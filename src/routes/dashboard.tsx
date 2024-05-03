import { Sidebar } from "src/components";
import { Topbar } from "src/components";
import { Home } from "src/components";
export const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topbar />
        <Home />
      </div>
    </div>
  );
};
