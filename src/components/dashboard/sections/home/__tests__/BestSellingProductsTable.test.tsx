import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import { BestSellingProductsTable } from "../BestSellingProductsTable";
import { data } from "../bestSellingProductsData";

describe("BestSellingProductsTable", () => {
  it("renders the BestSellingProductsTable component", () => {
    render(<BestSellingProductsTable data={data} />);

    const title = screen.getByRole("heading", {
      name: /productos más vendidos/i,
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
    render(<BestSellingProductsTable data={data} />);

    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    const firstRowCells = within(rows[1]).getAllByRole("cell");
    const secondRowCells = within(rows[2]).getAllByRole("cell");

    expect(firstRowCells[0].textContent).toBe(data[0].productName);
    expect(firstRowCells[1].textContent).toBe(
      data[0].salesPercentage.toString() + "%",
    );
    expect(secondRowCells[0].textContent).toBe(data[1].productName);
    expect(secondRowCells[1].textContent).toBe(
      data[1].salesPercentage.toString() + "%",
    );
  });
});
