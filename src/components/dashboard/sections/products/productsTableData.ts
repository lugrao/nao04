import { ProductsTableData } from "./ProductsTable";
import products from "./productList.json";

export const data: ProductsTableData = [];

products.forEach((product) => {
  const sales = Math.floor(Math.random() * 10000);
  return data.push({
    product: product.product,
    category: product.category,
    numberOfSales: sales,
    totalIncome: sales * Math.floor(Math.random() * 5000),
  });
});
