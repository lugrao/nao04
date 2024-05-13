import { TotalIncome } from "./TotalIncome";
import { SearchBar } from "./SearchBar";
import { Notifications } from "./Notifications";
import { Avatar } from "./Avatar";

export interface TopbarProps {
  shadowBottom: boolean;
  viewportWidth: number;
}

export const Topbar = ({ shadowBottom, viewportWidth }: TopbarProps) => {
  return viewportWidth > 599 ? (
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
  ) : (
    <div
      className={`${shadowBottom && "shadow-bottom"} z-10 flex h-min w-full flex-col items-center bg-violet-50 p-5`}
    >
      <div className="flex  w-full items-center justify-between">
        <TotalIncome totalIncome={71813.26} expenses={1294} earnings={1294} />
        <div className="flex items-center gap-6">
          <Notifications />
          <Avatar />
        </div>
      </div>
      <div className="w-full pt-3">
        <SearchBar />
      </div>
    </div>
  );
};
