import { useWindowDimensions } from "src/utils/useWindowDimensions";
import { SignUpForm, CompanyLogo } from "src/components";

/**
 * Renders the sign-up page layout with the company logo and the sign-up form.
 *
 * @component
 * @returns {JSX.Element} The rendered SignUp component.
 */
export const SignUp = (): JSX.Element => {
  const { width } = useWindowDimensions();
  return (
    <div className="flex h-full w-full flex-col items-center lg:flex-row lg-max:overflow-y-auto">
      <div className="flex h-min w-full max-w-[50rem] items-center justify-center px-24 pb-14 pt-20 lg:w-6/12 lg:max-w-full lg:p-0">
        {width && <CompanyLogo mobile={width < 1024} />}
      </div>
      <div className="flex w-full grow items-center justify-center px-5 pb-20 pt-5 lg:h-full lg:w-6/12 lg:p-0">
        <div className="flex h-min w-full max-w-[40rem] items-center justify-center overflow-y-auto   rounded-2xl bg-white lg:h-full lg:max-w-full  lg:rounded-none lg:p-0">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
