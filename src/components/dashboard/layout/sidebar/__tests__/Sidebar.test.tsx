import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store";
import { Provider } from "react-redux";
import { Sidebar } from "../Sidebar";

describe("Sidebar", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar />,
      </BrowserRouter>
    </Provider>,
  );

  const companyLogo = screen.getByAltText(/capsule corp. logo/i);
  const dashboardButton = screen.getByRole("button", { name: /dashboard/i });
  const salesButton = screen.getByRole("button", { name: /ventas/i });
  const productsButton = screen.getByRole("button", { name: /productos/i });
  const invoicesButton = screen.getByRole("button", { name: /recibos/i });
  const logoutButton = screen.getByRole("button", { name: /cerrar sesión/i });
  const customerServiceHeading = screen.getByRole("heading", {
    name: /atención al cliente/i,
  });
  const connectButton = screen.getByRole("button", { name: /conéctate ya/i });

  it("renders the Sidebar component", () => {
    expect(companyLogo).toBeTruthy();
    expect(dashboardButton).toBeTruthy();
    expect(salesButton).toBeTruthy();
    expect(productsButton).toBeTruthy();
    expect(invoicesButton).toBeTruthy();
    expect(logoutButton).toBeTruthy();
    expect(customerServiceHeading).toBeTruthy();
    expect(connectButton).toBeTruthy();
  });
});
