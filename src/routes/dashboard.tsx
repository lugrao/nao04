import { Sidebar } from "src/components";
import { Topbar } from "src/components";
import { TopbarNav } from "components/dashboard/layout/topbar/TopbarNav";
import { useWindowDimensions } from "src/utils/useWindowDimensions";
import { useAppSelector } from "src/redux/hooks";
import { selectIsScrolled } from "src/components/dashboard/sections/sectionSlice";
import { Outlet } from "react-router-dom";

/**
 * Renders the main dashboard component.
 *
 * @component
 * @param {DashboardProps} props - See {@link DashboardProps}.
 * @returns {JSX.Element} The rendered Dashboard component.
 */
export const Dashboard = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const isScrolled = useAppSelector(selectIsScrolled);

  return width ? (
    <div className="flex w-full">
      {width > 1024 && <Sidebar />}
      <div className="flex w-full flex-col">
        {width <= 1024 && <TopbarNav buttonsWithText={width >= 630} />}
        <Topbar viewportWidth={width} shadowBottom={isScrolled} />
        <Outlet />
      </div>
    </div>
  ) : (
    <></>
  );
};
