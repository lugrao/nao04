/**
 * Props for the {@link FormInput} component.
 */
export interface FormInputProps {
  // The label text for the input field.
  labelText: string;
  // The error message to display.
  errorMessage: string;
}

/**
 * Renders a labeled input field with an optional error message.
 *
 * @component
 * @param {FormInputProps} props - See {@link FormInputProps}.
 * @returns {JSX.Element} The rendered FormInput component.
 */
export const FormInput = ({
  labelText,
  errorMessage,
}: FormInputProps): JSX.Element => (
  <label className="form-control w-full">
    <div className="label">
      <span className="label-text text-base font-normal">{labelText}</span>
    </div>
    <input type="text" className="input input-bordered h-14 w-full" />
    <div className="label">
      <span className="label-text-alt invisible">{errorMessage}</span>
    </div>
  </label>
);
