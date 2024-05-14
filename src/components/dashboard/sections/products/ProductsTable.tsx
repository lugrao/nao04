import { formatUSDAmount } from "utils/formatUSDAmount";

/**
 * Represents a single entry in the {@link ProductsTable}.
 */
export interface ProductEntry {
  // The name of the product.
  product: string;
  // The category of the product.
  category: string;
  // The number of sales for the product.
  numberOfSales: number;
  // The number of sales for the product.
  totalIncome: number;
}

/**
 * Represents the data structure for the {@link ProductsTable} component.
 */
export type ProductsTableData = ProductEntry[];

/**
 * Props for the {@link ProductsTable} component.
 */
export interface ProductsTableProps {
  // Array of product data objects.
  data: ProductsTableData;
}

/**
 * Renders a table displaying product information.
 *
 * @component
 * @param {ProductsTableProps} props - See {@link ProductsTableProps}.
 * @returns {JSX.Element} The rendered ProductsTable component.
 */
export const ProductsTable = ({ data }: ProductsTableProps) => (
  <div className="w-full max-w-[70rem] rounded-2xl bg-white pb-4 shadow-md xs-max:overflow-scroll">
    <div className="flex justify-between pb-7 pl-11 pt-7">
      <h2 className="text-lg font-bold">Productos</h2>
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
              <td className="pr-14">
                {formatUSDAmount(product.totalIncome, false)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
