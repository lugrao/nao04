import { WorldMap } from "./WorldMap";
import { SalesByCountryTable } from "./SalesByCountryTable";
import { data } from "./salesByCountryTableData";

export const Sales = () => (
  <div className="flex flex-col items-center gap-10 overflow-scroll px-4 py-10">
    <div>
      <WorldMap data={data} />
    </div>
    <SalesByCountryTable data={data} />
  </div>
);
