import { useState } from "react";
import { Sidebar } from "src/components";
import { Topbar } from "src/components";
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
          <Topbar shadowBottom={isScrolled} />
          {activeSection === "dashboard" && <Home onScroll={handleScroll} />}
          {activeSection === "sales" && <Sales onScroll={handleScroll} />}
          {activeSection === "products" && <Products onScroll={handleScroll} />}
          {activeSection === "invoices" && <Invoices onScroll={handleScroll} />}
        </div>
      </div>
    )
  );
};
