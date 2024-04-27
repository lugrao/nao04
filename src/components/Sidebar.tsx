import { useState } from "react";
import { NavButton } from "./NavButton";
import { CustomerService } from "./CustomerService";
import { ButtonId } from "./NavButton";

interface ButtonIds {
  [K: string]: ButtonId;
}

const btnIds: ButtonIds = {
  dashboard: "btn-dashboard",
  sales: "btn-sales",
  products: "btn-products",
  invoices: "btn-invoices",
  logout: "btn-logout",
};

export const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("btn-dashboard");
  const [isScrolled, setIsScrolled] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setActiveButton(id);
    if (id === btnIds.logout) return console.log("logged out");
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement;
    if (div.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className="flex w-72 flex-col items-center rounded-l-3xl bg-white pt-7">
      <div
        className={`${isScrolled && "shadow-bottom"} z-10 flex  w-full justify-center`}
      >
        <div className="mb-7 mt-0 flex h-20 w-20 justify-center">
          <img src="/capsule-corp.svg" alt="Capsule Corp. logo" />
        </div>
      </div>
      <div
        className="flex flex-col items-center overflow-scroll pt-6"
        onScroll={handleScroll}
      >
        <div className="flex flex-col gap-4 pb-7">
          <div className="mb-3">
            <NavButton
              id={btnIds.dashboard}
              onClick={handleClick}
              isActive={activeButton === btnIds.dashboard}
              label="Dashboard"
            />
          </div>
          <NavButton
            id={btnIds.sales}
            onClick={handleClick}
            isActive={activeButton === btnIds.sales}
            label="Ventas"
          />
          <NavButton
            id={btnIds.products}
            onClick={handleClick}
            isActive={activeButton === btnIds.products}
            label="Productos"
          />
          <NavButton
            id={btnIds.invoices}
            onClick={handleClick}
            isActive={activeButton === btnIds.invoices}
            label="Recibos"
          />
          <div className="mt-6">
            <NavButton
              id={btnIds.logout}
              onClick={handleClick}
              isActive={false}
              label="Cerrar sesión"
            />
          </div>
        </div>
        <CustomerService />
      </div>
    </div>
  );
};
