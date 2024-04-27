import { Sidebar } from "./Sidebar.tsx";

export const Layout = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <div className="flex h-full w-full rounded-3xl bg-white p-0.5">
        <Sidebar />
        <div className="h-full w-full rounded-3xl bg-violet-50"></div>
      </div>
    </div>
  );
};
