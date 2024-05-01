export const SearchBar = () => {
  return (
    <div className="h-max p-2">
      <label className="input flex max-w-screen-sm items-center gap-2">
        <div className="h-4 w-4">
          <img
            width={17}
            height={17}
            src="src/assets/search.svg"
            alt="Ícono de búsqueda"
          />
        </div>
        <input type="text" className="grow" placeholder="Buscar" />
      </label>
    </div>
  );
};
