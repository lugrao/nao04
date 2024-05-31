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
    expect(cells[0].textContent).toBe(data[0].productName);
    expect(cells[1].textContent).toBe(data[0].salesPercentage.toString() + "%");
  });
});
