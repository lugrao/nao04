import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store";
import { Provider } from "react-redux";
import { SignUpForm } from "../SignUpForm";

describe("SignUpForm", () => {
  it("renders the SignUpForm component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm />,
        </BrowserRouter>
      </Provider>,
    );

    const heading1 = screen.getByRole("heading", { name: /registrarse/i });
    const firstNameInput = screen.getByRole("textbox", {
      name: /nombre/i,
    });
    const lastNameInput = screen.getByRole("textbox", {
      name: /apellido/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /correo electrónico/i,
    });
    const passwordInput = screen.getByLabelText("Contraseña");
    const passwordConfirmInput = screen.getByLabelText(/repetir contraseña/i);
    const submitButton = screen.getByRole("button", { name: /enviar/i });

    expect(heading1).toBeTruthy();
    expect(firstNameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(passwordConfirmInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });
});
