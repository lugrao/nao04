/**
 * Props for the {@link CompanyLogo} component.
 */
export interface CompanyLogoProps {
  // Optional flag to determine if the mobile version of the logo should be used.
  mobile?: boolean;
}

/**
 * Renders the company logo.
 *
 * @component
 * @param {CompanyLogoProps} props - See {@link CompanyLogoProps}.
 * @returns {JSX.Element} The rendered CompanyLogo component.
 */
export const CompanyLogo = ({ mobile }: CompanyLogoProps): JSX.Element => (
  <div className="h-full">
    <img
      className="h-full w-full"
      src={`/capsule-corp-with-text${mobile ? "-mobile" : ""}.svg`}
      alt="Logo de Capsule Corporation"
    />
  </div>
);
