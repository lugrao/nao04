export type OrderStatus = "sent" | "pending" | "new";

export interface OrdersProps {
  status: OrderStatus;
  amount: number;
}

const orders: Record<OrderStatus, { color: string; icon: string }> = {
  sent: { color: "blue", icon: "truck" },
  pending: { color: "pink", icon: "kart" },
  new: { color: "purple", icon: "bag" },
};

export const Orders = ({ status, amount }: OrdersProps) => {
  const color = orders[status].color;
  return (
    <div
      className={`relative  h-32 w-72 rounded-2xl bg-gradient-to-br from-${color}-400 to-${color}-500`}
    >
      <div className="absolute bottom-[-0.5rem] left-2 ">
        <img src={`src/assets/${orders[status].icon}.svg`} alt="Camión" />
      </div>
    </div>
  );
};
