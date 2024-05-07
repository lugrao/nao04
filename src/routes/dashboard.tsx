import { useState } from "react";
import { Sidebar } from "src/components";
import { Topbar } from "src/components";
import { Home } from "src/components";
import { Sales } from "src/components";
import { useIsScrolled } from "src/utils/useIsScrolled";

export const Dashboard = () => {
  const [isScrolled, handleScroll] = useIsScrolled();
  const [activeSection, setActiveSection] = useState("dashboard");
  return (
    <div className="flex w-full">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex w-full flex-col">
        <Topbar shadowBottom={isScrolled} />
        {activeSection === "dashboard" && <Home onScroll={handleScroll} />}
        {activeSection === "sales" && <Sales />}
      </div>
    </div>
  );
};
