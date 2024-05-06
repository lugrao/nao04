import { Orders } from "./Orders";
import { LineChart } from "./LineChart";

export const Home = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="flex justify-evenly gap-3 px-4 py-10">
        <Orders status="sent" amount={39} />
        <Orders status="pending" amount={15} />
        <Orders status="new" amount={28} />
      </div>

      <div className="flex flex-col gap-10">
        <LineChart
          category="sales"
          totalAmount={12434.53}
          title="Ventas 2024"
        />
        <LineChart category="customers" totalAmount={1613} title="Clientes" />
      </div>
    </div>
  );
};
