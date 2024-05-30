import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store";
import { Provider } from "react-redux";
import { TopbarNav } from "../TopbarNav";

describe("TopbarNav", () => {
  it("renders the TopbarNav component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TopbarNav buttonsWithText={true} />
        </BrowserRouter>
      </Provider>,
    );

    const companyLogo = screen.getByAltText(/capsule corp. logo/i);
    const dashboardButton = screen.getByRole("button", { name: /dashboard/i });
    const salesButton = screen.getByRole("button", { name: /ventas/i });
    const productsButton = screen.getByRole("button", { name: /productos/i });
    const invoicesButton = screen.getByRole("button", { name: /recibos/i });
    const logoutButton = screen.getByRole("button", { name: /cerrar sesión/i });

    expect(companyLogo).toBeTruthy();
    expect(dashboardButton).toBeTruthy();
    expect(salesButton).toBeTruthy();
    expect(productsButton).toBeTruthy();
    expect(invoicesButton).toBeTruthy();
    expect(logoutButton).toBeTruthy();
  });
});
