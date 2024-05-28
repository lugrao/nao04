/**
 * Displays notification icons.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the Notifications component.
 */
export const Notifications = (): JSX.Element => (
  <div className="flex h-min gap-12 p-2">
    <div className="w-7 cursor-pointer">
      <img
        width={26}
        height={26}
        src="/notification-message.svg"
        alt="Ícono de notificación de mensajes"
      />
    </div>
    <div className="w-7 cursor-pointer">
      <img
        width={24}
        height={24}
        src="/notification-alert.svg"
        alt="Ícono de alerta de notificaciones"
      />
    </div>
  </div>
);
