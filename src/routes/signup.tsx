import { useWindowDimensions } from "src/utils/useWindowDimensions";
import { SignUpForm, CompanyLogo } from "src/components";

export const SignUp = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="lg-max:overflow-x-scroll flex w-full flex-col items-center lg:flex-row">
      <div className="flex h-min w-full max-w-[50rem] items-center justify-center px-24 pb-14 pt-20 lg:h-full lg:w-6/12 lg:max-w-full lg:p-0">
        {width && <CompanyLogo mobile={width < 1024} />}
      </div>
      <div className="flex h-full w-full items-center justify-center p-5 lg:w-6/12 lg:p-0">
        <div
          className="flex h-min w-full max-w-[40rem] items-center justify-center
         rounded-2xl bg-white p-28 lg:h-full lg:max-w-full lg:rounded-none lg:p-0"
        >
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
