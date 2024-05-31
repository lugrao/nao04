import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import { LatestSalesTable } from "../LatestSalesTable";
import { data } from "../latestSalesData";
import { formatUSDAmount } from "src/utils/formatUSDAmount";

describe("LatestSalesTable", () => {
  it("renders the LatestSalesTable component", () => {
    render(<LatestSalesTable data={data} />);

    const title = screen.getByRole("heading", {
      name: /últimas ventas/i,
    });
    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    const cells = within(rows[1]).getAllByRole("cell");

    expect(title).toBeTruthy();
    expect(table).toBeTruthy();
    expect(rows).toBeTruthy();
    expect(cells).toBeTruthy();
  });

  it("renders the data correctly", () => {
    render(<LatestSalesTable data={data} />);

    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    const firstRowCells = within(rows[1]).getAllByRole("cell");
    const secondRowCells = within(rows[2]).getAllByRole("cell");

    expect(firstRowCells[0].textContent).toBe(data[0].productName);
    expect(firstRowCells[1].textContent).toBe(
      formatUSDAmount(data[0].saleAmount),
    );
    expect(secondRowCells[0].textContent).toBe(data[1].productName);
    expect(secondRowCells[1].textContent).toBe(
      formatUSDAmount(data[1].saleAmount),
    );
  });
});
