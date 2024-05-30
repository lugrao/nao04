import { render, screen } from "@testing-library/react";
import { Topbar } from "../Topbar";

describe("Topbar", () => {
  it("renders the Topbar component", () => {
    render(<Topbar shadowBottom={true} viewportWidth={1500} />);

    const totalIncomeHeading = screen.getByRole("heading", {
      name: /ingreso total/i,
    });
    const searchBar = screen.getByRole("textbox", { name: /buscar/i });
    const messages = screen.getByAltText(/mensajes/i);
    const notifications = screen.getByAltText(/alerta/i);
    const userAvatar = screen.getByAltText(/usuario/i);

    expect(totalIncomeHeading).toBeTruthy();
    expect(searchBar).toBeTruthy();
    expect(messages).toBeTruthy();
    expect(notifications).toBeTruthy();
    expect(userAvatar).toBeTruthy();
  });
});
