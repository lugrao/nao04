import { formatUSDAmount } from "utils/formatUSDAmount";

/**
 * Represents a single entry in the {@link SalesByCountryTable}.
 */
export interface SalesByCountryEntry {
  // The country code.
  countryCode: string;
  // The name of the country.
  countryName: string;
  // The number of sales.
  numberOfSales: number;
  // The total income from sales.
  totalIncome: number;
}

/**
 * Represents the data structure for the {@link SalesByCountryTable} component.
 */
export type SalesByCountryTableData = SalesByCountryEntry[];

export interface SalesByCountryTableProps {
  // Array of sales by country data objects.
  data: SalesByCountryTableData;
}

/**
 * Renders a table displaying sales information by country.
 *
 * @component
 * @param {SalesByCountryTableProps} props - See {@link SalesByCountryTableProps}.
 * @returns {JSX.Element} The rendered SalesByCountryTable component.
 */
export const SalesByCountryTable = ({
  data,
}: SalesByCountryTableProps): JSX.Element => (
  <div className="w-full max-w-[75rem] rounded-2xl bg-white pb-4 shadow-md 2xl:w-[65rem]">
    <div className="flex justify-between pb-7 pl-11 pt-7">
      <h2 className="text-lg font-bold">Ventas por país</h2>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th className="pl-14 text-sm font-semibold">País</th>
          <th className="text-sm font-semibold">Cantidad de ventas</th>
          <th className="text-sm font-semibold">Ingresos</th>
        </tr>
      </thead>
      <tbody>
        {data.map((country) => {
          return (
            <tr key={country.countryName}>
              <td className="pl-14">{country.countryName}</td>
              <td>{country.numberOfSales}</td>
              <td className="pr-14">
                {formatUSDAmount(country.totalIncome, false)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
