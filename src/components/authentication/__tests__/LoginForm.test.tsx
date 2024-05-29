import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store";
import { Provider } from "react-redux";
import { LoginForm } from "../LoginForm";

describe("LoginForm", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginForm />,
      </BrowserRouter>
    </Provider>,
  );

  const heading1 = screen.getByRole("heading", { name: /iniciar sesión/i });
  const emailInput = screen.getByRole("textbox", {
    name: /correo electrónico/i,
  });
  const passwordInput = screen.getByLabelText(/contraseña/i);
  const submitButton = screen.getByRole("button", { name: /enviar/i });
  const heading2 = screen.getByRole("heading", { name: /no eres usuario/i });
  const link = screen.getByRole("link", { name: /crea una cuenta/i });

  it("renders the LoginForm component", () => {
    expect(heading1).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(heading2).toBeTruthy();
    expect(link).toBeTruthy();
  });
});
