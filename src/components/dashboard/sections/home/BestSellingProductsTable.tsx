export interface BestSellingProductsTableProps {
  data: { productName: string; salesPercentage: number }[];
}

export const BestSellingProductsTable = ({
  data,
}: BestSellingProductsTableProps) => (
  <div className="w-full max-w-[45rem] lg:w-[38rem] overflow-x-auto rounded-2xl bg-white pb-4 shadow-md">
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
                  <div className="flex h-4 w-14 gap-1 justify-start">
                    <div className="flex w-4">
                      <img
                        width={20}
                        height={20}
                        src={`public/${icon.filename}`}
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
