import { useField } from "formik";

/**
 * Props for the {@link FormInput} component.
 */
export interface FormInputProps {
  // The ID of the input field
  id: string;
  // The label text for the input field
  label: string;
  // The name attribute of the input field
  name: string;
  // The type attribute of the input field
  type: string;
}

/**
 * Renders a labeled input field with an optional error message.
 *
 * @component
 * @param {FormInputProps} props - See {@link FormInputProps}.
 * @returns {JSX.Element} The rendered FormInput component.
 */
export const FormInput = ({
  id,
  label,
  name,
  type,
}: FormInputProps): JSX.Element => {
  const [field, meta] = useField({ name, type, id });
  return (
    <label htmlFor={id} className="form-control w-full">
      <div className="label">
        <span className="label-text text-base font-normal">{label}</span>
      </div>
      <input
        type={type}
        id={id}
        className="input input-bordered h-14 w-full"
        {...field}
        aria-describedby={`${id}-error`}
      />
      <div className="label">
        {meta.touched && meta.error ? (
          <span
            id={`${id}-error`}
            role="alert"
            className="h-3 text-sm text-red-600"
          >
            {meta.error}
          </span>
        ) : (
          <span className="h-3"></span>
        )}
      </div>
    </label>
  );
};
