import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import { store } from "src/redux/store";
import { Provider } from "react-redux";
import { Products } from "../Products";
import { data } from "../productsTableData";
import { formatUSDAmount } from "src/utils/formatUSDAmount";

describe("Products", () => {
  it("renders the Invoices component", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>,
    );
    const title = screen.getByRole("heading", { name: /productos/i });
    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    const cells = within(rows[1]).getAllByRole("cell");

    expect(title).toBeTruthy();
    expect(table).toBeTruthy();
    expect(rows).toBeTruthy();
    expect(cells).toBeTruthy();
  });

  it("renders the ProductsTable data", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>,
    );

    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    const firstRowCells = within(rows[1]).getAllByRole("cell");
    const secondRowCells = within(rows[2]).getAllByRole("cell");

    expect(firstRowCells[0].textContent).toBe(data[0].product);
    expect(firstRowCells[1].textContent).toBe(data[0].category);
    expect(firstRowCells[2].textContent).toBe(data[0].numberOfSales.toString());
    expect(firstRowCells[3].textContent).toBe(
      formatUSDAmount(data[0].totalIncome, false),
    );
    expect(secondRowCells[0].textContent).toBe(data[1].product);
    expect(secondRowCells[1].textContent).toBe(data[1].category);
    expect(secondRowCells[2].textContent).toBe(
      data[1].numberOfSales.toString(),
    );
    expect(secondRowCells[3].textContent).toBe(
      formatUSDAmount(data[1].totalIncome, false),
    );
  });
});
