import { Orders } from "./Orders";
import { LineChart } from "./LineChart";
import { BestSellingProductsTable } from "./BestSellingProductsTable";
import { data } from "./bestSellingProductsData";

export interface HomeProps {
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

export const Home = ({ onScroll }: HomeProps) => {
  return (
    <div className="h-full overflow-y-scroll" onScroll={onScroll}>
      <div className="flex justify-center gap-10 px-4 py-10">
        <Orders status="sent" amount={39} />
        <Orders status="pending" amount={15} />
        <Orders status="new" amount={28} />
      </div>
      <div className="flex justify-center gap-10 px-5 py-10">
        <div className="flex flex-col gap-10">
          <LineChart
            category="sales"
            totalAmount={12434.53}
            title="Ventas 2024"
          />
          <LineChart category="customers" totalAmount={1613} title="Clientes" />
        </div>
        <div className="flex flex-col gap-10">
          <BestSellingProductsTable data={data} />
        </div>
      </div>
    </div>
  );
};
