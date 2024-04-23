import NavButton from "./NavButton";

const Sidebar = () => {
  return (
    <div className="flex h-full w-72 flex-col justify-center rounded-l-3xl bg-white py-9">
      <div className="mt-0 flex h-20 w-20 justify-center">
        <img src="/capsule-corp.svg" alt="Capsule Corp. logo" />
      </div>
      <NavButton isActive={true} label="Dashboard" />
    </div>
  );
};

export default Sidebar;
