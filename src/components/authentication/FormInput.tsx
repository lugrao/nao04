export interface FormInputProps {
  labelText: string;
  errorMessage: string;
}

export const FormInput = ({ labelText, errorMessage }: FormInputProps) => (
  <label className="form-control w-full">
    <div className="label">
      <span className="label-text text-base font-normal">{labelText}</span>
    </div>
    <input type="text" className="input input-bordered w-full h-14" />
    <div className="label">
      <span className="invisible label-text-alt">{errorMessage}</span>
    </div>
  </label>
);
