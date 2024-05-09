export const CustomerService = () => {
  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <h2 className="text-left text-base font-semibold">
          Atención al cliente
        </h2>
        <p className="pb-3 pt-2 text-left text-sm text-stone-500">
          Nuestro equipo está disponible las 24 horas para resolver cualquier
          duda que tengas.
        </p>
        <div className="justify-left card-actions">
          <button className="btn bg-blue-200 font-semibold text-sky-700 hover:bg-blue-300">
            <div>
              <img
                src="/customer-service.svg"
                alt=""
                width={23}
                height={18}
              />
            </div>
            Conéctate ya
          </button>
        </div>
        <div className="flex flex-col gap-1 pt-12 text-left text-sm text-stone-500">
          <a href="">Términos y condiciones</a>
          <a href="">Política de privacidad</a>
        </div>
      </div>
    </div>
  );
};
