import { ProductsTable } from "./ProductsTable";
import { SectionProps } from "../home/Home";
import { data } from "./productsTableData";

/**
 * Renders the Products section displaying product information.
 *
 * @component
 * @param {SectionProps} props - See {@link SectionProps}.
 * @returns {JSX.Element} The rendered Products component.
 */
export const Products = ({ onScroll }: SectionProps): JSX.Element => (
  <div
    className="flex flex-col items-center overflow-scroll px-4 py-10"
    onScroll={onScroll}
  >
    <ProductsTable data={data} />
  </div>
);
