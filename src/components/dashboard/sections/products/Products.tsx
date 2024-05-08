import { ProductsTable } from "./ProductsTable";
import { SectionProps } from "../home/Home";
import { data } from "./productsTableData";

export const Products = ({ onScroll }: SectionProps) => (
  <div
    className="flex flex-col items-center overflow-scroll px-4 py-10"
    onScroll={onScroll}
  >
    <ProductsTable data={data} />
  </div>
);
