import { WorldMap } from "./WorldMap";
import { SalesByCountryTable } from "./SalesByCountryTable";
import { data } from "./salesByCountryTableData";
import { SectionProps } from "../home/Home";

export const Sales = ({
  onScroll,
  viewportWidth,
}: SectionProps & { viewportWidth: number }) => (
  <div
    className="flex flex-col items-center gap-10 overflow-scroll px-4 py-10"
    onScroll={onScroll}
  >
    {viewportWidth > 767 && (
      <div>
        <WorldMap data={data} />
      </div>
    )}

    <SalesByCountryTable data={data} />
  </div>
);
