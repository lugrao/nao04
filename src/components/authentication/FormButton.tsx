/**
 * Renders a button with specified styles and text.
 *
 * @component
 * @returns {JSX.Element} The rendered FormButton component.
 */
export const FormButton = (): JSX.Element => (
  <button
    type="submit"
    className="text-md btn h-14 w-full bg-indigo-900 font-medium text-white hover:bg-indigo-800"
  >
    Enviar
  </button>
);
