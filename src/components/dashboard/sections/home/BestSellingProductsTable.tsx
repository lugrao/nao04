/**
 * Props for the BestSellingProductsTable component.
 */
export interface BestSellingProductsTableProps {
  /** Array of data for the best selling products table. Each element contains
   * a product name and the sales percentage. */
  data: { productName: string; salesPercentage: number }[];
}

/**
 * Displays a table of best selling products.
 *
 * @component
 * @param {BestSellingProductsTableProps} props - See {@link BestSellingProductsTableProps}.
 * @returns {JSX.Element} JSX element representing the BestSellingProductsTable component.
 */
export const BestSellingProductsTable = ({
  data,
}: BestSellingProductsTableProps): JSX.Element => (
  <div className="w-full max-w-[45rem] overflow-x-auto rounded-2xl bg-white pb-4 shadow-md lg:w-[38rem]">
    <div className="flex justify-between px-7 pt-7">
      <h2 className="text-lg font-medium">Productos más vendidos</h2>
      <a href="" className="text-sm font-semibold  text-blue-600">
        Ver todos
      </a>
    </div>
    <table className="table">
      <thead>
        <tr className="invisible border-b-white">
          <th>Posición</th>
          <th>Producto</th>
          <th>Performance</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => {
          const isNegativePercentage = product.salesPercentage < 0;
          const salesPercentageColor = isNegativePercentage
            ? "text-pink-500"
            : "text-green-500";
          const icon = {
            filename: isNegativePercentage ? "arrow-down.svg" : "arrow-up.svg",
            alt: isNegativePercentage ? "Flecha abajo" : "Flecha arriba",
          };
          return (
            <tr key={product.productName}>
              <th className="pl-10">{index + 1}</th>
              <td className="text-center">{product.productName}</td>
              <td className="pr-10">
                <div className="flex justify-end">
                  <div className="flex h-4 w-14 justify-start gap-1">
                    <div className="flex w-4">
                      <img
                        width={20}
                        height={20}
                        src={`/${icon.filename}`}
                        alt={icon.alt}
                        className="self-center"
                      />
                    </div>
                    <span
                      className={`self-end font-medium leading-none ${salesPercentageColor}`}
                    >
                      {product.salesPercentage}%
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
