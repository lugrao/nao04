import { useState } from "react";
import { Sidebar } from "src/components";
import { Topbar } from "src/components";
import { TopbarNav } from "components/dashboard/layout/topbar/TopbarNav";
import { useIsScrolled } from "src/utils/useIsScrolled";
import { useWindowDimensions } from "src/utils/useWindowDimensions";
import { ReactNode } from "react";

/**
 * Props for the {@link Dashboard} component.
 */
export interface DashboardProps {
  children: ReactNode;
}

/**
 * Renders the main dashboard component.
 *
 * @component
 * @param {DashboardProps} props - See {@link DashboardProps}.
 * @returns {JSX.Element} The rendered Dashboard component.
 */
export const Dashboard = ({ children }: DashboardProps): JSX.Element => {
  const { width } = useWindowDimensions();
  const [isScrolled, handleScroll] = useIsScrolled();
  const [activeSection, setActiveSection] = useState("dashboard");
  return width ? (
    <div className="flex w-full">
      {width > 1024 && <Sidebar setActiveSection={setActiveSection} />}
      <div className="flex w-full flex-col">
        {width <= 1024 && (
          <TopbarNav
            setActiveSection={setActiveSection}
            buttonsWithText={width >= 630}
          />
        )}
        <Topbar viewportWidth={width} shadowBottom={isScrolled} />
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};
