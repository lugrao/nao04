/**
 * Reders a search input field.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the SearchBar component.
 */
export const SearchBar = (): JSX.Element => (
  <div className="h-max p-2">
    <label htmlFor="input-search" className="sr-only">
      Buscar
    </label>
    <label className="input flex h-9 items-center gap-2">
      <div className="h-4 w-4">
        <img width={17} height={17} src="/search.svg" alt="Ícono de búsqueda" />
      </div>
      <input
        id="input-search"
        type="text"
        className="grow"
        placeholder="Buscar"
      />
    </label>
  </div>
);
