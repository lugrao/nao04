import "routes/root.css";
import { Outlet } from "react-router-dom";
import { Dashboard } from "routes/dashboard";

/**
 * Renders the root component which serves as the main layout container.
 *
 * @component
 * @returns {JSX.Element} The rendered Root component.
 */
export const Root = (): JSX.Element => (
  <div className="flex h-full w-full items-center justify-center p-2">
    <div className="flex h-full w-full rounded-3xl bg-white p-0.5">
      <div className="flex h-full w-full overflow-hidden rounded-3xl bg-violet-50">
        <Dashboard>
          <Outlet />
        </Dashboard>
      </div>
    </div>
  </div>
);
