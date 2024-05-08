import { SectionProps } from "../home/Home";
import { InvoicesTable } from "./InvoicesTable";
import { data } from "./invoicesTableData";

export const Invoices = ({ onScroll }: SectionProps) => (
  <div onScroll={onScroll}>
    <InvoicesTable data={data} />
  </div>
);
