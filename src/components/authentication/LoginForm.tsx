import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { Link } from "react-router-dom";

/**
 * Renders a login form with input fields for email and password, a submit 
 * button, and a link to the signup page.
 * 
 * @component
 * @returns {JSX.Element} The rendered LoginForm component.
 */
export const LoginForm = (): JSX.Element => (
  <div className="flex w-full max-w-sm flex-col items-center gap-10 bg-white">
    <h1 className="mb-10 text-2xl font-bold">Iniciar sesión</h1>
    <form
      action=""
      className="flex w-full max-w-[50rem] flex-col items-center gap-4"
    >
      <FormInput labelText="Correo electrónico" errorMessage="Error" />
      <FormInput labelText="Contraseña" errorMessage="Error" />
      <div className="mt-8 w-full">
        <FormButton />
      </div>
    </form>
    <h2 className="mt-14">
      ¿No eres usuario?{" "}
      <Link className="font-semibold text-indigo-900" to="/signup">
        Crea una cuenta.
      </Link>
    </h2>
  </div>
);
