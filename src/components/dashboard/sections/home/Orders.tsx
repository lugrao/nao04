export type OrderStatus = "sent" | "pending" | "new";

export interface OrdersProps {
  status: OrderStatus;
  amount: number;
}

const orders: Record<
  OrderStatus,
  { gradientColors: string; icon: string; text: string }
> = {
  sent: {
    gradientColors: "from-blue-400 to-blue-600",
    icon: "truck",
    text: "enviados",
  },
  pending: {
    gradientColors: "from-red-400 to-pink-500",
    icon: "kart",
    text: "pendientes",
  },
  new: {
    gradientColors: "from-fuchsia-500 to-purple-600",
    icon: "bag",
    text: "nuevos",
  },
};

export const Orders = ({ status, amount }: OrdersProps) => {
  const gradientColors = orders[status].gradientColors;
  return (
    <div
      className={`relative h-32 w-80 rounded-2xl bg-gradient-to-br text-white  ${gradientColors}`}
    >
      <h3 className="absolute left-6 top-5 text-xl font-bold">
        Pedidos {orders[status].text}
      </h3>
      <div className="absolute bottom-[-0.5rem] left-2 ">
        <img src={`src/assets/${orders[status].icon}.svg`} alt="Camión" />
      </div>
      <h4 className="absolute bottom-5 right-5 text-6xl font-semibold">
        {amount}
      </h4>
    </div>
  );
};
