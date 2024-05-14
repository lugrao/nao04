import { formatUSDAmount } from "utils/formatUSDAmount";

/**
 * Props for the {@link LatestSalesTable} component.
 */
export interface LatestSalesTableProps {
  // Data containing product name and sale amount for the latest sales.
  data: { productName: string; saleAmount: number }[];
}

/**
 * Renders a table with information about the latest sales.
 *
 * @component
 * @param {LatestSalesTableProps} props - See {@link LatestSalesTableProps}.
 * @returns {JSX.Element} The rendered LatestSalesTable component.
 */
export const LatestSalesTable = ({
  data,
}: LatestSalesTableProps): JSX.Element => (
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
