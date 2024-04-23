import Sidebar from "./Sidebar.tsx";

const Layout = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <div className="h-full w-full rounded-3xl bg-white p-0.5 flex">
        <Sidebar />
        <div className="h-full w-full rounded-3xl bg-violet-50"></div>
      </div>
    </div>
  );
};

export default Layout;
