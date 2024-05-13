/**
 * Renders a user avatar.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the Avatar component.
 */
export const Avatar = (): JSX.Element => (
  <div className="h-min min-w-16 p-2">
    <div className="flex justify-center overflow-hidden rounded-full bg-white">
      <img width={50} height={50} src="/user.svg" alt="Ícono de usuario" />
    </div>
  </div>
);
