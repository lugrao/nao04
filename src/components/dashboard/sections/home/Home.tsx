import { useEffect } from "react";
import { Orders } from "./Orders";
import { LineChart } from "./LineChart";
import { BestSellingProductsTable } from "./BestSellingProductsTable";
import { LatestSalesTable } from "./LatestSalesTable";
import { updateScrollStatus, resetScrollStatus } from "../sectionSlice";
import { useAppDispatch } from "src/redux/hooks";
import { data as bestSellingProductsData } from "./bestSellingProductsData";
import { data as latestSalesData } from "./latestSalesData";
import { salesData, customersData } from "./chartData";

/**
 * Renders information about orders, line charts for sales and customers, and
 * tables for best-selling products and latest sales.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
export const Home = (): JSX.Element => {
  const useDispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      useDispatch(resetScrollStatus());
    };
  }, []);

  return (
    <div
      className="h-full overflow-y-scroll"
      onScroll={(e) => {
        const div = e.target as HTMLDivElement;
        useDispatch(updateScrollStatus(div.scrollTop));
      }}
    >
      <div className="flex flex-col items-center gap-10 px-4 py-10 lg:flex-row lg:justify-center">
        <Orders status="sent" amount={39} />
        <Orders status="pending" amount={15} />
        <Orders status="new" amount={28} />
      </div>
      <div className="flex flex-col items-center gap-10 px-5 py-10 lg:flex-row lg:justify-center">
        <div className="flex w-full flex-col items-center gap-10">
          <LineChart
            data={salesData}
            category="sales"
            totalAmount={12434.53}
            title="Ventas 2024"
          />
          <LineChart
            data={customersData}
            category="customers"
            totalAmount={1613}
            title="Clientes"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-10">
          <BestSellingProductsTable data={bestSellingProductsData} />
          <LatestSalesTable data={latestSalesData} />
        </div>
      </div>
    </div>
  );
};
