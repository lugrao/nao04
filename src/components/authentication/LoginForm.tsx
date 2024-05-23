import { useRef, useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

/**
 * Validation schema for the login form using Yup.
 *
 * Fields:
 * - `email`: Must be a valid email address and is required.
 * - `password`: Must be at least 8 characters long, contain at least one
 * number, one lowercase letter, and one uppercase letter. Is required.
 */
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Correo no válido").required("Requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe ser de 8 caracteres o más")
    .matches(/[0-9]/, "La contraseña requiere un número")
    .matches(/[a-z]/, "La contraseña requiere una letra minúscula")
    .matches(/[A-Z]/, "La contraseña requiere una letra mayúscula")
    .required("Requerido"),
});

/**
 * Renders a login form with input fields for email and password, a submit
 * button, and a link to the signup page.
 *
 * @component
 * @returns {JSX.Element} The rendered LoginForm component.
 */
export const LoginForm = (): JSX.Element => {
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
      <h1 className="mb-10 text-2xl font-bold lg:mt-24">Iniciar sesión</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form
          action=""
          className="flex h-max w-full max-w-[50rem] flex-col items-center justify-around gap-4 lg:max-w-sm"
        >
          <FormInput
            label="Correo electrónico"
            id="input-email"
            name="email"
            type="text"
          />
          <FormInput
            label="Contraseña"
            id="input-password"
            name="password"
            type="password"
          />
          <div className="mt-8 w-full">
            <FormButton />
          </div>
          <h2 className="mt-14 lg:mb-24">
            ¿No eres usuario?{" "}
            <Link className="font-semibold text-indigo-900" to="/signup">
              Crea una cuenta.
            </Link>
          </h2>
        </Form>
      </Formik>
    </div>
  );
};
