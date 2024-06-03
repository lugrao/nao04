import { useEffect } from "react";
import { ProductsTable } from "./ProductsTable";
import { updateScrollStatus, resetScrollStatus } from "../sectionSlice";
import { useAppDispatch } from "src/redux/hooks";
import { data } from "./productsTableData";

/**
 * Renders the Products section displaying product information.
 *
 * @component
 * @returns {JSX.Element} The rendered Products component.
 */

export const Products = (): JSX.Element => {
  const useDispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      useDispatch(resetScrollStatus());
    };
  }, []);

  return (
    <section
      className="flex flex-col items-center overflow-scroll px-4 py-10"
      onScroll={(e) => {
        const div = e.target as HTMLDivElement;
        useDispatch(updateScrollStatus(div.scrollTop));
      }}
    >
      <ProductsTable data={data} />
    </section>
  );
};
