import { formatUSDAmount } from "utils/formatUSDAmount";

/**
 * Props for the {@link TotalIncome} component.
 */
export interface TotalIncomeProps {
  /** The total income amount. */
  totalIncome: number;
  /** The expenses amount. */
  expenses: number;
  /** The earnings amount. */
  earnings: number;
}

/**
 * Displays total income, expenses, and earnings.
 *
 * @component
 * @param {TotalIncomeProps} props - See {@link TotalIncomeProps}.
 * @returns {JSX.Element} JSX element representing the TotalIncome component.
 */
export const TotalIncome = ({
  totalIncome,
  expenses,
  earnings,
}: TotalIncomeProps): JSX.Element => (
  <div className="flex h-max w-min gap-7 p-2">
    <div className="self-end">
      <h2 className=" text-start text-sm">Ingreso total</h2>
      <p className="text-2xl font-semibold leading-none">
        {formatUSDAmount(totalIncome)}
      </p>
    </div>
    <div className="flex gap-3 self-end">
      <div className="flex h-4 gap-1">
        <div className="flex w-4">
          <img
            width={20}
            height={20}
            src="/arrow-down.svg"
            alt=""
            className="self-center"
          />
        </div>
        <span className="self-end font-medium leading-none text-pink-500">
          {formatUSDAmount(expenses, false)}
        </span>
      </div>
      <div className="flex h-4 gap-1">
        <div className="flex w-4">
          <img
            width={20}
            height={20}
            src="/arrow-up.svg"
            alt=""
            className="self-center"
          />
        </div>
        <span className="self-end font-medium  leading-none text-green-500">
          {formatUSDAmount(earnings, false)}
        </span>
      </div>
    </div>
  </div>
);
