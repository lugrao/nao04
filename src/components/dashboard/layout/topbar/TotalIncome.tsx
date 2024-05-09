import { formatUSDAmount } from "utils/formatUSDAmount";

export interface TotalIncomeProps {
  totalIncome: number;
  expenses: number;
  earnings: number;
}

export const TotalIncome = ({
  totalIncome,
  expenses,
  earnings,
}: TotalIncomeProps) => {
  return (
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
              src="public/arrow-down.svg"
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
              src="public/arrow-up.svg"
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
};
