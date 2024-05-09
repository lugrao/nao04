export const SearchBar = () => {
  return (
    <div className="h-max p-2">
      <label className="input flex h-9 items-center gap-2">
        <div className="h-4 w-4">
          <img
            width={17}
            height={17}
            src="public/search.svg"
            alt="Ícono de búsqueda"
          />
        </div>
        <input type="text" className="grow" placeholder="Buscar" />
      </label>
    </div>
  );
};
