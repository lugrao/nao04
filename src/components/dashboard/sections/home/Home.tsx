import { Orders } from "./Orders";

export const Home = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="flex justify-evenly gap-3 px-4 py-10">
        <Orders status="sent" amount={39} />
        <Orders status="pending" amount={15} />
        <Orders status="new" amount={28} />
      </div>
    </div>
  );
};
