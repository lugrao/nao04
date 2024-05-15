import { InvoicesTable } from "./InvoicesTable";
import { useSectionIsScrolled } from "src/utils/useSectionIsScrolled";
import { data } from "./invoicesTableData";

/**
 * Renders the Invoices section, containing a table of invoice data.
 *
 * @component
 * @returns {JSX.Element} The rendered Invoices section component.
 */
export const Invoices = (): JSX.Element => {
  const [, handleScroll] = useSectionIsScrolled();
  return (
    <div
      className="flex flex-col items-center overflow-scroll px-4 py-10"
      onScroll={handleScroll}
    >
      <InvoicesTable data={data} />
    </div>
  );
};
