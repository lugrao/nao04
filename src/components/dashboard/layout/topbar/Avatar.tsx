export const Avatar = () => {
  return (
    <div className="h-min p-2">
      <div className="flex justify-center overflow-hidden rounded-full bg-white">
        <img
          width={50}
          height={50}
          src="src/assets/user.svg"
          alt="Ícono de usuario"
        />
      </div>
    </div>
  );
};
