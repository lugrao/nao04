import { WorldMap } from "./WorldMap";
import { SalesByCountryTable } from "./SalesByCountryTable";
import { data } from "./salesByCountryTableData";
import { SectionProps } from "../home/Home";

/**
 * Props for the {@link Sales} component.
 */
export interface SalesProps extends SectionProps {
  // The width of the viewport.
  viewportWidth: number;
}

/**
 * Renders the Sales section displaying sales information.
 *
 * @component
 * @param {SalesProps} props - See {@link SalesProps}.
 * @returns {JSX.Element} The rendered Sales component.
 */
export const Sales = ({ onScroll, viewportWidth }: SalesProps) => (
  <div
    className="flex flex-col items-center gap-10 overflow-scroll px-4 py-10"
    onScroll={onScroll}
  >
    {viewportWidth > 1024 && (
      <div>
        <WorldMap data={data} />
      </div>
    )}

    <SalesByCountryTable data={data} />
  </div>
);
