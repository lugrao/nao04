import { useEffect } from "react";
import { InvoicesTable } from "./InvoicesTable";
import { updateScrollStatus, resetScrollStatus } from "../sectionSlice";
import { useAppDispatch } from "src/redux/hooks";
import { data } from "./invoicesTableData";

/**
 * Renders the Invoices section, containing a table of invoice data.
 *
 * @component
 * @returns {JSX.Element} The rendered Invoices section component.
 */
export const Invoices = (): JSX.Element => {
  const useDispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      useDispatch(resetScrollStatus());
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center overflow-scroll px-4 py-10"
      onScroll={(e) => {
        const div = e.target as HTMLDivElement;
        useDispatch(updateScrollStatus(div.scrollTop));
      }}
    >
      <InvoicesTable data={data} />
    </div>
  );
};
