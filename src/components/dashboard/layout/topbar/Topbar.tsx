import { TotalIncome } from "./TotalIncome";
import { SearchBar } from "./SearchBar";
import { Notifications } from "./Notifications";
import { Avatar } from "./Avatar";

export interface TopbarProps {
  shadowBottom: boolean;
}

export const Topbar = ({ shadowBottom }: TopbarProps) => {
  return (
    <div
      className={`${shadowBottom && "shadow-bottom"} z-10 flex h-min w-full items-center justify-between bg-violet-50 p-5`}
    >
      <TotalIncome totalIncome={71813.26} expenses={1294} earnings={1294} />
      <div className="w-5/12">
        <SearchBar />
      </div>
      <div className="flex items-center gap-6">
        <Notifications />
        <Avatar />
      </div>
    </div>
  );
};
