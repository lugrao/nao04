export const Avatar = () => {
  return (
    <div className="h-min min-w-16 p-2">
      <div className="flex justify-center overflow-hidden rounded-full bg-white">
        <img
          width={50}
          height={50}
          src="/user.svg"
          alt="Ícono de usuario"
        />
      </div>
    </div>
  );
};
