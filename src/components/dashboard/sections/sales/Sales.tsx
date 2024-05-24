import { useEffect } from "react";
import { WorldMap } from "./WorldMap";
import { SalesByCountryTable } from "./SalesByCountryTable";
import { useWindowDimensions } from "src/utils/useWindowDimensions";
import { updateScrollStatus, resetScrollStatus } from "../sectionSlice";
import { useAppDispatch } from "src/redux/hooks";
import { data } from "./salesByCountryTableData";

/**
 * Renders the Sales section displaying sales information.
 *
 * @component
 * @returns {JSX.Element} The rendered Sales component.
 */
export const Sales = (): JSX.Element => {
  const useDispatch = useAppDispatch();
  const { width } = useWindowDimensions();

  useEffect(() => {
    return () => {
      useDispatch(resetScrollStatus());
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center gap-10 overflow-scroll px-4 py-10"
      onScroll={(e) => {
        const div = e.target as HTMLDivElement;
        useDispatch(updateScrollStatus(div.scrollTop));
      }}
    >
      {width ? (
        width > 1024 && (
          <div>
            <WorldMap data={data} />
          </div>
        )
      ) : (
        <div>
          <div className="rounded-2xl bg-white px-10 shadow-md  lg:h-[54rem] lg:w-[75rem] xl:h-[50rem] 2xl:h-[40rem] 2xl:w-[65rem]"></div>
        </div>
      )}

      <SalesByCountryTable data={data} />
    </div>
  );
};
