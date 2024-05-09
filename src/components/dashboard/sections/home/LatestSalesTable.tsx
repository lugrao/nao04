import { formatUSDAmount } from "utils/formatUSDAmount";

export interface LatestSalesTableProps {
  data: { productName: string; saleAmount: number }[];
}

export const LatestSalesTable = ({ data }: LatestSalesTableProps) => (
  <div className="w-full max-w-[45rem] overflow-x-auto rounded-2xl bg-white pb-4 shadow-md lg:w-[38rem]">
    <div className="flex justify-between px-7 pb-10 pt-7">
      <h2 className="text-lg font-medium">Últimas ventas</h2>
      <a href="" className="text-sm font-semibold  text-blue-600">
        Ver todas
      </a>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th className="pl-14 text-sm font-semibold">Producto</th>
          <th className="text-sm font-semibold">Monto</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product) => {
          return (
            <tr key={product.productName + product.saleAmount}>
              <td className="pl-14 pr-72">{product.productName}</td>
              <td className="pr-14">{formatUSDAmount(product.saleAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
