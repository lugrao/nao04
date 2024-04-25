import NavButton from "./NavButton";
import CustomerService from "./CustomerService";

const Sidebar = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log(e.currentTarget.id);

  return (
    <div className="flex w-72 flex-col items-center rounded-l-3xl bg-white pt-7">
      <div className="mb-7 mt-0 flex h-20 w-20 justify-center">
        <img src="/capsule-corp.svg" alt="Capsule Corp. logo" />
      </div>
      <div className="flex flex-col items-center overflow-scroll pt-6">
        <div className="flex flex-col gap-4 pb-7">
          <div className="mb-3">
            <NavButton
              id="dashboard"
              onClick={handleClick}
              isActive={false}
              label="Dashboard"
            />
          </div>
          <NavButton
            id="sales"
            onClick={handleClick}
            isActive={true}
            label="Ventas"
          />
          <NavButton
            id="products"
            onClick={handleClick}
            isActive={false}
            label="Productos"
          />
          <NavButton
            id="invoices"
            onClick={handleClick}
            isActive={false}
            label="Recibos"
          />
          <div className="mt-6">
            <NavButton
              id="logout"
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

export default Sidebar;
