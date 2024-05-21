import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

export const SignUpForm = () => (
  <div className="flex h-full w-full flex-col items-center gap-10 overflow-scroll bg-white lg:py-20">
    <h1 className="mb-10 text-2xl font-bold">Registrarse</h1>
    <form
      action=""
      className="flex h-max w-full max-w-[50rem] lg:max-w-sm flex-col items-center gap-4"
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
