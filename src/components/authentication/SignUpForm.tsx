import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

/**
 * Renders a sign-up form with multiple input fields and a submit button.
 *
 * @component
 * @returns {JSX.Element} The rendered SignUpForm component.
 */
export const SignUpForm = (): JSX.Element => (
  <div className="flex h-full w-full flex-col items-center gap-10 overflow-scroll bg-white lg:py-20">
    <h1 className="mb-10 text-2xl font-bold">Registrarse</h1>
    <form
      action=""
      className="flex h-max w-full max-w-[50rem] flex-col items-center gap-4 lg:max-w-sm"
    >
      <FormInput labelText="Nombre" errorMessage="Error" />
      <FormInput labelText="Apellido" errorMessage="Error" />
      <FormInput labelText="Correo electrónico" errorMessage="Error" />
      <FormInput labelText="Contraseña" errorMessage="Error" />
      <FormInput labelText="Repetir contraseña" errorMessage="Error" />
      <div className="mt-8 w-full">
        <FormButton />
      </div>
    </form>
  </div>
);
