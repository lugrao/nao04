import { formatUSDAmount } from "utils/formatUSDAmount";

export type InvoicesTableData = {
  invoiceNumber: number;
  clientName: string;
  dateOfPurchase: string;
  status: "Pagado" | "Pendiente";
  totalAmount: number;
}[];

export interface InvoicesTableProps {
  data: InvoicesTableData;
}

export const InvoicesTable = ({ data }: InvoicesTableProps) => (
  <div className="w-[70rem] rounded-2xl bg-white pb-4 shadow-md">
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
              <td className="">{invoice.clientName}</td>
              <td className="">{invoice.dateOfPurchase}</td>
              <td className="">{invoice.status}</td>
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
