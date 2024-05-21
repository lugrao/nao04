import { useWindowDimensions } from "src/utils/useWindowDimensions";
import { LoginForm, CompanyLogo } from "src/components";

export const Login = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="flex w-full flex-col items-center lg:flex-row">
      <div className="flex h-min w-full max-w-[50rem] items-center justify-center px-24 pt-20 lg:h-full lg:w-6/12 lg:max-w-full lg:p-0">
        {width && <CompanyLogo mobile={width < 1024} />}
      </div>
      <div className="flex h-full w-full items-center justify-center p-5 lg:w-6/12 lg:p-0">
        <div className="flex h-min w-full max-w-[40rem] items-center justify-center rounded-2xl bg-white p-28 lg:h-full  lg:max-w-full lg:rounded-none">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
