import { TotalIncome } from "./TotalIncome";

export const Topbar = () => {
  return (
    <div className="h-36 w-full bg-violet-50 ">
      <TotalIncome totalIncome={71813.26} expenses={1294} earnings={1294} />
    </div>
  );
};
