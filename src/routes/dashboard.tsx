import { useState } from "react";
import { Sidebar } from "src/components";
import { Topbar } from "src/components";
import { TopbarNav } from "components/dashboard/layout/topbar/TopbarNav";
import { Home } from "src/components";
import { Sales } from "src/components";
import { Products } from "src/components";
import { Invoices } from "src/components";
import { useIsScrolled } from "src/utils/useIsScrolled";
import { useWindowDimensions } from "src/utils/useWindowDimensions";

export const Dashboard = () => {
  const { width } = useWindowDimensions();
  const [isScrolled, handleScroll] = useIsScrolled();
  const [activeSection, setActiveSection] = useState("dashboard");
  return (
    width && (
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
          {activeSection === "dashboard" && <Home onScroll={handleScroll} />}
          {activeSection === "sales" && (
            <Sales viewportWidth={width} onScroll={handleScroll} />
          )}
          {activeSection === "products" && <Products onScroll={handleScroll} />}
          {activeSection === "invoices" && <Invoices onScroll={handleScroll} />}
        </div>
      </div>
    )
  );
};
