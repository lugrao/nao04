import "routes/root.css";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import {
  selectActiveSession,
  updateActiveSession,
} from "src/components/authentication/userSlice";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./login";
import { SignUp } from "./signup";
import { Dashboard } from "./dashboard";
import { Home } from "src/components";
import { Sales } from "src/components";
import { Products } from "src/components";
import { Invoices } from "src/components";

/**
 * Renders the root component which serves as the main layout container.
 *
 * @component
 * @returns {JSX.Element} The rendered Root component.
 */
export const Root = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeSession = useAppSelector(selectActiveSession);
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
    setIsLoading(false);
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <div className="flex h-full w-full rounded-3xl bg-white p-0.5">
        <div className="flex h-full w-full overflow-hidden rounded-3xl bg-violet-50">
          {!isLoading && (
            <Routes>
              <Route
                path="/"
                element={
                  activeSession ? (
                    <Navigate replace to={"/dashboard"} />
                  ) : (
                    <Navigate replace to={"/login"} />
                  )
                }
              />
              <Route
                path="/login"
                element={
                  activeSession ? (
                    <Navigate replace to={"/dashboard"} />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  activeSession ? (
                    <Navigate replace to={"/dashboard"} />
                  ) : (
                    <SignUp />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  activeSession ? (
                    <Dashboard />
                  ) : (
                    <Navigate replace to={"/login"} />
                  )
                }
              >
                <Route path="/dashboard" element={<Home />} />
                <Route path="/dashboard/sales" element={<Sales />} />
                <Route path="/dashboard/products" element={<Products />} />
                <Route path="/dashboard/invoices" element={<Invoices />} />
                <Route
                  path="/dashboard/logout"
                  element={<Navigate replace to={"/"} />}
                />
              </Route>
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
};
