import "routes/root.css";
import { Dashboard } from "routes/dashboard";

export const Root = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <div className="flex h-full w-full rounded-3xl bg-white p-0.5">
        <div className="flex h-full w-full overflow-hidden rounded-3xl bg-violet-50">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};
