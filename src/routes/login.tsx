import { LoginForm, CompanyLogo } from "src/components";
export const Login = () => (
  <div className="flex w-full flex-col lg:flex-row">
    <div className="flex h-2/6 w-full items-center justify-center px-40 py-36 lg:h-full lg:w-6/12">
      <CompanyLogo />
    </div>
    <div className="flex h-full w-full items-center justify-center bg-white lg:w-6/12">
      <LoginForm />
    </div>
  </div>
);
