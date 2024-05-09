export type OrderStatus = "sent" | "pending" | "new";

export interface OrdersProps {
  status: OrderStatus;
  amount: number;
}

const orders: Record<
  OrderStatus,
  {
    gradientColors: string;
    img: { filename: string; alt: string };
    text: string;
  }
> = {
  sent: {
    gradientColors: "from-blue-400 to-blue-600",
    img: { filename: "truck.svg", alt: "Camión" },
    text: "enviados",
  },
  pending: {
    gradientColors: "from-red-400 to-pink-500",
    img: { filename: "cart.svg", alt: "Carrito de compras" },
    text: "pendientes",
  },
  new: {
    gradientColors: "from-fuchsia-500 to-purple-600",
    img: { filename: "bag.svg", alt: "Bolsa de compras" },
    text: "nuevos",
  },
};

export const Orders = ({ status, amount }: OrdersProps) => {
  const gradientColors = orders[status].gradientColors;
  const img = orders[status].img;
  return (
    <div
      className={`relative h-32 w-full max-w-[45rem] rounded-2xl bg-gradient-to-br text-white lg:w-80  ${gradientColors}`}
    >
      <h3 className="absolute left-6 top-5 text-xl font-bold">
        Pedidos {orders[status].text}
      </h3>
      <div className="absolute bottom-[-0.5rem] left-2 ">
        <img src={`/${img.filename}`} alt={img.alt} />
      </div>
      <h4 className="absolute bottom-5 right-5 text-6xl font-semibold">
        {amount}
      </h4>
    </div>
  );
};
