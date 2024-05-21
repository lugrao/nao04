export interface CompanyLogoProps {
  mobile?: boolean;
}

export const CompanyLogo = ({ mobile }: CompanyLogoProps) => (
  <div className="h-full">
    <img
      className="h-full w-full"
      src={`/capsule-corp-with-text${mobile ? "-mobile" : ""}.svg`}
      alt="Logo de Capsule Corporation"
    />
  </div>
);
