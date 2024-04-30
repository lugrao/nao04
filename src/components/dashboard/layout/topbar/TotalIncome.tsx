export const TotalIncome = () => {
  return (
    <div className="flex w-min gap-7">
      <div>
        <h2 className="text-start text-sm">Ingreso total</h2>
        <p className="text-2xl font-semibold">$71,813.26</p>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1">
          <span className="self-end">icon</span>
          <span className="self-end font-medium text-pink-500">$1.294</span>
        </div>
        <div className="flex gap-1">
          <span className="self-end">icon</span>
          <span className="self-end  font-medium text-green-500">$1.294</span>
        </div>
      </div>
    </div>
  );
};
