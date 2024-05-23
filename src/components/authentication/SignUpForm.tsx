import { useRef, useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { Formik, Form } from "formik";
import * as Yup from "yup";

/**
 * Validation schema for the sign-up form using Yup.
 *
 * Fields:
 * - `firstName`: Must be at least 1 character long and is required.
 * - `lastName`: Must be at least 1 character long and is required.
 * - `email`: Must be a valid email address and is required.
 * - `password`: Must be at least 8 characters long, contain at least one
 * number, one lowercase letter, and one uppercase letter. Is required.
 * - `passwordConfirm`: Must match the `password` field. Is required.
 */
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "El nombre debe ser de 1 caracter o más")
    .required("Requerido"),
  lastName: Yup.string()
    .min(1, "El apellido debe ser de 1 caracter o más")
    .required("Requerido"),
  email: Yup.string().email("Correo no válido").required("Requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe ser de 8 caracteres o más")
    .matches(/[0-9]/, "La contraseña requiere un número")
    .matches(/[a-z]/, "La contraseña requiere una letra minúscula")
    .matches(/[A-Z]/, "La contraseña requiere una letra mayúscula")
    .required("Requerido"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Requerido"),
});

/**
 * Renders a sign-up form with multiple input fields and a submit button.
 *
 * @component
 * @returns {JSX.Element} The rendered SignUpForm component.
 */
export const SignUpForm = (): JSX.Element => {
  const formRef = useRef(null);

  // State to track if the form content is overflowing its container.
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    /**
     * Checks if the form content is overflowing its container and updates
     * the state.
     */
    const checkOverflow = () => {
      if (formRef.current) {
        const { scrollHeight, clientHeight } = formRef.current;
        setIsOverflowing(scrollHeight > clientHeight);
      }
    };

    // Check overflow on mount
    checkOverflow();

    // Add event listener to recheck overflow on window resize
    window.addEventListener("resize", checkOverflow);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div
      className={`flex h-full w-full flex-col items-center gap-10 bg-white p-28 ${!isOverflowing ? "justify-center" : ""}`}
      ref={formRef}
    >
      <h1 className="mb-10 text-2xl font-bold lg:mt-24">Registrarse</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form
          action=""
          className="flex h-max w-full max-w-[50rem] flex-col items-center justify-around gap-4 lg:max-w-sm"
        >
          <FormInput
            label="Nombre"
            id="input-first-name"
            name="firstName"
            type="text"
          />
          <FormInput
            label="Apellido"
            id="input-last-name"
            name="lastName"
            type="text"
          />
          <FormInput
            label="Correo electrónico"
            id="input-email"
            name="email"
            type="email"
          />
          <FormInput
            label="Contraseña"
            id="input-password"
            name="password"
            type="password"
          />
          <FormInput
            label="Repetir contraseña"
            id="input-password-confirm"
            name="passwordConfirm"
            type="password"
          />
          <div className="mt-8 w-full lg:mb-24">
            <FormButton />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
