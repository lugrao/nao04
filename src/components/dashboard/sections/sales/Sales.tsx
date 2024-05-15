import { WorldMap } from "./WorldMap";
import { SalesByCountryTable } from "./SalesByCountryTable";
import { useSectionIsScrolled } from "src/utils/useSectionIsScrolled";
import { useWindowDimensions } from "src/utils/useWindowDimensions";
import { data } from "./salesByCountryTableData";

/**
 * Renders the Sales section displaying sales information.
 *
 * @component
 * @returns {JSX.Element} The rendered Sales component.
 */
export const Sales = (): JSX.Element => {
  const [, handleScroll] = useSectionIsScrolled();
  const { width } = useWindowDimensions();
  return (
    <div
      className="flex flex-col items-center gap-10 overflow-scroll px-4 py-10"
      onScroll={handleScroll}
    >
      {width && width > 1024 && (
        <div>
          <WorldMap data={data} />
        </div>
      )}

      <SalesByCountryTable data={data} />
    </div>
  );
};
