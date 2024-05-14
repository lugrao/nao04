import { formatUSDAmount } from "utils/formatUSDAmount";

/**
 * Represents a single entry in the {@link InvoicesTable}.
 */
export type InvoiceEntry = {
  // The invoice number.
  invoiceNumber: number;
  // The name of the client.
  clientName: string;
  // The date of purchase.
  dateOfPurchase: string;
  // The status of the invoice.
  status: "Pagado" | "Pendiente";
  // The total amount of the invoice.
  totalAmount: number;
};

/**
 * Represents the data structure for the {@link InvoicesTable} component.
 */
export type InvoicesTableData = InvoiceEntry[];

/**
 * Props for the {@link InvoicesTable} component.
 */
export interface InvoicesTableProps {
  // Array of invoice data objects.
  data: InvoicesTableData;
}

/**
 * Renders a table displaying invoice data.
 *
 * @component
 * @param {InvoicesTableProps} props - See {@link InvoicesTableProps}.
 * @returns {JSX.Element} The rendered InvoicesTable component.
 */
export const InvoicesTable = ({ data }: InvoicesTableProps): JSX.Element => (
  <div className="w-full max-w-[70rem] rounded-2xl bg-white pb-4 shadow-md xs-max:overflow-scroll">
    <div className="flex justify-between pb-7 pl-11 pt-7">
      <h2 className="text-lg font-bold">Recibos</h2>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th className="pl-14 text-sm font-semibold">Número</th>
          <th className="text-sm font-semibold">Cliente</th>
          <th className="text-sm font-semibold">Fecha</th>
          <th className="text-sm font-semibold">Estado</th>
          <th className="text-sm font-semibold">Monto</th>
        </tr>
      </thead>
      <tbody>
        {data.map((invoice) => {
          return (
            <tr key={invoice.invoiceNumber}>
              <td className="pl-14">{invoice.invoiceNumber}</td>
              <td>{invoice.clientName}</td>
              <td>{invoice.dateOfPurchase}</td>
              <td
                className={`${invoice.status === "Pendiente" ? "text-orange-700" : "text-lime-700"}`}
              >
                {invoice.status}
              </td>
              <td className="pr-14">
                {formatUSDAmount(invoice.totalAmount, false)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
