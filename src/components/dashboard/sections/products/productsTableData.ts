import { ProductsTableData } from "./ProductsTable";
import products from "./productList.json";

export const data: ProductsTableData = [];

products.forEach((product) =>
  data.push({
    product: product.product,
    category: product.category,
    numberOfSales: 1,
    totalIncome: 1,
  }),
);
