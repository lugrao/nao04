export const TotalIncome = () => {
  return (
    <div className="flex w-min gap-7 ">
      <div className="self-end">
        <h2 className=" text-start text-sm">Ingreso total</h2>
        <p className="text-2xl font-semibold leading-none">$71,813.26</p>
      </div>
      <div className="flex gap-3 self-end">
        <div className="flex h-4 gap-1">
          <div className="flex w-4">
            <img
              width={20}
              height={20}
              src="src/assets/expenses.svg"
              alt=""
              className="self-center"
            />
          </div>
          <span className="self-end font-medium leading-none text-pink-500">
            $1.294
          </span>
        </div>
        <div className="flex h-4 gap-1">
          <div className="flex w-4">
            <img
              width={20}
              height={20}
              src="src/assets/earnings.svg"
              alt=""
              className="self-center"
            />
          </div>
          <span className="self-end font-medium  leading-none text-green-500">
            $1.294
          </span>
        </div>
      </div>
    </div>
  );
};
