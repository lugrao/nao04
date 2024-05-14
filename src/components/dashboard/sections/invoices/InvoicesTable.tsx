import { formatUSDAmount } from "utils/formatUSDAmount";

export type InvoiceEntry = {
  invoiceNumber: number;
  clientName: string;
  dateOfPurchase: string;
  status: "Pagado" | "Pendiente";
  totalAmount: number;
};

export type InvoicesTableData = InvoiceEntry[];

export interface InvoicesTableProps {
  data: InvoicesTableData;
}

export const InvoicesTable = ({ data }: InvoicesTableProps) => (
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
