import { Orders } from "./Orders";

export const Home = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <Orders status="sent" amount={39} />
    </div>
  );
};
