import { logUserOut } from "src/components/authentication/userSlice";
import { useAppDispatch } from "src/redux/hooks";

/**
 * Props for the {@link LogoutButton} component.
 */
export interface LogoutButtonProps {
  // Indicates whether the button should display text alongside the icon.
  withText: boolean;
}

/**
 * Renders a logout button component for user authentication.
 *
 * @component
 * @param {LogoutButtonProps} props - See {@link LogoutButtonProps}.
 * @returns {JSX.Element} JSX element representing the LogoutButton.
 */
export const LogoutButton = ({ withText }: LogoutButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(logUserOut());
      }}
      id="btn-logout"
      className={`btn flex border-white bg-white shadow-none hover:border-neutral-200 hover:bg-neutral-200
      ${withText ? "w-44 justify-start" : "w-min"}      
      `}
    >
      <div className="w-5">
        <img
          width={20}
          height={20}
          src={`/logout-inactive.svg`}
          alt={`Ícono de cerrar sesión`}
        />
      </div>
      {withText && (
        <div className="pl-4 text-sm font-medium text-indigo-300">
          Cerrar sesión
        </div>
      )}
    </button>
  );
};
