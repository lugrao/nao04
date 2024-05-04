export type OrderStatus = "sent" | "pending" | "new";

export interface OrdersProps {
  status: OrderStatus;
  amount: number;
}

const orders: Record<
  OrderStatus,
  { color: string; icon: string; text: string }
> = {
  sent: { color: "blue", icon: "truck", text: "enviados" },
  pending: { color: "pink", icon: "kart", text: "pendientes" },
  new: { color: "purple", icon: "bag", text: "nuevos" },
};

export const Orders = ({ status, amount }: OrdersProps) => {
  const color = orders[status].color;
  return (
    <div
      className={`relative h-32  w-72 rounded-2xl bg-gradient-to-br text-white from-${color}-400 to-${color}-500`}
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
