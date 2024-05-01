import { TotalIncome } from "./TotalIncome";
import { SearchBar } from "./SearchBar";

export const Topbar = () => {
  return (
    <div className="flex h-36 w-full bg-violet-50">
      <TotalIncome totalIncome={71813.26} expenses={1294} earnings={1294} />
      <SearchBar />
    </div>
  );
};
