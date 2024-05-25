import "routes/root.css";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import {
  selectActiveSession,
  updateActiveSession,
} from "src/components/authentication/userSlice";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Renders the root component which serves as the main layout container.
 *
 * @component
 * @returns {JSX.Element} The rendered Root component.
 */
export const Root = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeSession = useAppSelector(selectActiveSession);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  /**
   * When the document reloads, redux state resets. This effect retrieves the
   * active session from local storage so the user can stayed logged in after
   * reloads.
   */
  useEffect(() => {
    if (!activeSession) {
      dispatch(updateActiveSession());
    }
  }, []);

  useEffect(() => {
    switch (pathname) {
      case "/":
        if (activeSession) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
        break;
      case "/login":
        if (activeSession) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
        break;
      case "/signup":
        if (activeSession) {
          navigate("/dashboard");
        } else {
          navigate("/signup");
        }
        break;
      default:
        if (activeSession) {
          navigate(pathname);
        } else {
          navigate("/login");
        }
        break;
    }
    setIsLoading(false);
  }, [activeSession]);

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
