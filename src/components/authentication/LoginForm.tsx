import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

export const LoginForm = () => (
  <div className="flex w-full max-w-sm flex-col items-center gap-10 bg-white">
    <h1 className="text-2xl font-bold">Iniciar sesión</h1>
    <form
      action=""
      className="flex w-full max-w-[50rem] flex-col items-center gap-6"
    >
      <FormInput labelText="Correo electrónico" errorMessage="Error" />
      <FormInput labelText="Contraseña" errorMessage="Error" />
      <FormButton />
    </form>
  </div>
);
