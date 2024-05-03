export const Notifications = () => {
  return (
    <div className="flex gap-12">
      <div className="w-7">
        <img
          width={26}
          height={26}
          src="src/assets/notification-message.svg"
          alt="Ícono de notificación de mensajes"
        />
      </div>
      <div className="w-7">
        <img
          width={24}
          height={24}
          src="src/assets/notification-alert.svg"
          alt="Ícono de alerta de notificaciones"
        />
      </div>
    </div>
  );
};
