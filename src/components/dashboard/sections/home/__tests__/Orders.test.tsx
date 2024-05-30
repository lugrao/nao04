import { render, screen } from "@testing-library/react";
import { Orders } from "../Orders";

describe("Orders", () => {
  const ordersAmount = 123;

  it("renders a title heading", () => {
    render(<Orders amount={ordersAmount} status="new" />);
    const ordersNew = screen.getByRole("heading", { name: /pedidos nuevos/i });
    expect(ordersNew).toBeTruthy();
  });

  it("renders the background image", () => {
    render(<Orders amount={ordersAmount} status="new" />);
    const image = screen.getByAltText(/bolsa de compras/i);
    expect(image).toBeTruthy();
  });

  it("renders the number of orders", () => {
    render(<Orders amount={ordersAmount} status="new" />);
    const numberOfOrders = screen.getByRole("heading", {
      name: ordersAmount.toString(),
    });
    expect(numberOfOrders).toBeTruthy();
  });
});
