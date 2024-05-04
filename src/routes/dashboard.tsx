import { useState } from "react";
import { Sidebar } from "src/components";
import { Topbar } from "src/components";
import { Home } from "src/components";

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  return (
    <div className="flex w-full">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex w-full flex-col">
        <Topbar />
        {activeSection === "dashboard" && <Home />}
      </div>
    </div>
  );
};
