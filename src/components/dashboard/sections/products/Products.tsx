import { ProductsTable } from "./ProductsTable";
import { SectionProps } from "../home/Home";

export const Products = ({ onScroll }: SectionProps) => (
  <div onScroll={onScroll}>
    <ProductsTable />
  </div>
);
