import { ProductsTable } from "./ProductsTable";
import { useSectionIsScrolled } from "src/utils/useSectionIsScrolled";
import { data } from "./productsTableData";

/**
 * Renders the Products section displaying product information.
 *
 * @component
 * @returns {JSX.Element} The rendered Products component.
 */
export const Products = (): JSX.Element => {
  const [, handleScroll] = useSectionIsScrolled();
  return (
    <div
      className="flex flex-col items-center overflow-scroll px-4 py-10"
      onScroll={handleScroll}
    >
      <ProductsTable data={data} />
    </div>
  );
};
