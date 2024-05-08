import { WorldMap } from "./WorldMap";
import { SalesByCountryTable } from "./SalesByCountryTable";
import { data } from "./salesByCountryTableData";

export const Sales = () => (
  <div className="flex flex-col items-center overflow-scroll gap-10">
    <WorldMap />
    <SalesByCountryTable data={data} />
  </div>
);
