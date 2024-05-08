import { formatUSDAmount } from "utils/formatUSDAmount";

export type ProductsTableData = {
  product: string;
  category: string;
  numberOfSales: number;
  totalIncome: number;
}[];

export interface ProductsTableProps {
  data: ProductsTableData;
}

export const ProductsTable = ({ data }: ProductsTableProps) => (
  <div className="w-[70rem] rounded-2xl bg-white pb-4 shadow-md">
    <div className="flex justify-between px-7 pb-10 pt-7">
      <h2 className="text-lg font-medium">Productos</h2>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th className="pl-14 text-sm font-semibold">Producto</th>
          <th className="text-sm font-semibold">Categoría</th>
          <th className="text-sm font-semibold">Ventas</th>
          <th className="text-sm font-semibold">Ingresos</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product) => {
          return (
            <tr key={product.product}>
              <td className="pl-14">{product.product}</td>
              <td className="">{product.category}</td>
              <td className="">{product.numberOfSales}</td>
              <td className="pr-14">{formatUSDAmount(product.totalIncome)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
