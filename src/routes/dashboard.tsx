import { Sidebar } from "../components/dashboard/layout/sidebar/Sidebar.tsx";

export const Dashboard = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <div className="flex h-full w-full rounded-3xl bg-white p-0.5">
        <div className="flex h-full w-full rounded-3xl bg-violet-50">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
