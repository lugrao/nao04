import { SectionProps } from "../home/Home";
import { InvoicesTable } from "./InvoicesTable";
import { data } from "./invoicesTableData";

/**
 * Renders the Invoices section, containing a table of invoice data.
 *
 * @component
 * @param {SectionProps} props - See {@link SectionProps}.
 * @returns {JSX.Element} The rendered Invoices section component.
 */
export const Invoices = ({ onScroll }: SectionProps): JSX.Element => (
  <div
    className="flex flex-col items-center overflow-scroll px-4 py-10"
    onScroll={onScroll}
  >
    <InvoicesTable data={data} />
  </div>
);
