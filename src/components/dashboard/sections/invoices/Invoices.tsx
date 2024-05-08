import { SectionProps } from "../home/Home";
import { InvoicesTable } from "./InvoicesTable";
import { data } from "./invoicesTableData";

export const Invoices = ({ onScroll }: SectionProps) => (
  <div
    className="flex flex-col items-center overflow-scroll px-4 py-10"
    onScroll={onScroll}
  >
    <InvoicesTable data={data} />
  </div>
);
