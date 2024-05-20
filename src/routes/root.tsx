import "routes/root.css";
import { useAppSelector } from "src/redux/hooks";
import { selectIsLoggedIn } from "src/components/authentication/userSlice";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Renders the root component which serves as the main layout container.
 *
 * @component
 * @returns {JSX.Element} The rendered Root component.
 */
export const Root = (): JSX.Element => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    switch (pathname) {
      case "/":
        if (isLoggedIn) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
        break;
      case "/login":
        if (isLoggedIn) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
        break;
      case "/signup":
        if (isLoggedIn) {
          navigate("/dashboard");
        } else {
          navigate("/signup");
        }
        break;
      default:
        if (isLoggedIn) {
          navigate(pathname);
        } else {
          navigate("/login");
        }
        break;
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <div className="flex h-full w-full rounded-3xl bg-white p-0.5">
        <div className="flex h-full w-full overflow-hidden rounded-3xl bg-violet-50">
          {!isLoading && <Outlet />}
        </div>
      </div>
    </div>
  );
};
