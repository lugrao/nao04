import { formatUSDAmount } from "utils/formatUSDAmount";

export type SalesByCountryTableData = {
  countryCode: string;
  countryName: string;
  numberOfSales: number;
  totalIncome: number;
}[];

export interface SalesByCountryTableProps {
  data: SalesByCountryTableData;
}

export const SalesByCountryTable = ({ data }: SalesByCountryTableProps) => (
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
