import { useRef, useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

/**
 * Renders a sign-up form with multiple input fields and a submit button.
 *
 * @component
 * @returns {JSX.Element} The rendered SignUpForm component.
 */
export const SignUpForm = (): JSX.Element => {
  const formRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (formRef.current) {
        const { scrollHeight, clientHeight } = formRef.current;
        setIsOverflowing(scrollHeight > clientHeight);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  });

  return (
    <div
      className={`flex h-full w-full flex-col items-center gap-10 bg-white p-28 ${!isOverflowing ? "justify-center" : ""}`}
      ref={formRef}
    >
      <h1 className="mb-10 text-2xl font-bold lg:mt-24">Registrarse</h1>
      <form
        action=""
        className="flex h-max w-full max-w-[50rem] flex-col items-center justify-around gap-4 lg:max-w-sm"
      >
        <FormInput labelText="Nombre" errorMessage="Error" />
        <FormInput labelText="Apellido" errorMessage="Error" />
        <FormInput labelText="Correo electrónico" errorMessage="Error" />
        <FormInput labelText="Contraseña" errorMessage="Error" />
        <FormInput labelText="Repetir contraseña" errorMessage="Error" />
        <div className="mt-8 w-full lg:mb-24">
          <FormButton />
        </div>
      </form>
    </div>
  );
};
