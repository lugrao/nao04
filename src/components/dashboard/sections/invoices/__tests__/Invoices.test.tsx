import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import { store } from "src/redux/store";
import { Provider } from "react-redux";
import { Invoices } from "../Invoices";
import { data } from "../invoicesTableData";
import { formatUSDAmount } from "src/utils/formatUSDAmount";

describe("Invoices", () => {
  it("renders the Invoices component", () => {
    render(
      <Provider store={store}>
        <Invoices />
      </Provider>,
    );

    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    const cells = within(rows[1]).getAllByRole("cell");

    expect(table).toBeTruthy();
    expect(rows).toBeTruthy();
    expect(cells).toBeTruthy();
  });

  it("renders the InvoicesTable data", () => {
    render(
      <Provider store={store}>
        <Invoices />
      </Provider>,
    );

    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    const firstRowCells = within(rows[1]).getAllByRole("cell");
    const secondRowCells = within(rows[2]).getAllByRole("cell");

    expect(firstRowCells[0].textContent).toBe(data[0].invoiceNumber.toString());
    expect(firstRowCells[1].textContent).toBe(data[0].clientName);
    expect(firstRowCells[2].textContent).toBe(data[0].dateOfPurchase);
    expect(firstRowCells[3].textContent).toBe(data[0].status);
    expect(firstRowCells[4].textContent).toBe(
      formatUSDAmount(data[0].totalAmount, false),
    );
    expect(secondRowCells[0].textContent).toBe(
      data[1].invoiceNumber.toString(),
    );
    expect(secondRowCells[1].textContent).toBe(data[1].clientName);
    expect(secondRowCells[2].textContent).toBe(data[1].dateOfPurchase);
    expect(secondRowCells[3].textContent).toBe(data[1].status);
    expect(secondRowCells[4].textContent).toBe(
      formatUSDAmount(data[1].totalAmount, false),
    );
  });
});
