const CustomerService = () => {
  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-base">Atención al cliente</h2>
        <p className="text-sm text-stone-500">
          Nuestro equipo está disponible las 24 horas para resolver cualquier
          duda que tengas.
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-blue-200 font-semibold text-sky-700 hover:bg-blue-300">
            <div>
              <img
                src="src/assets/atención-al-cliente.svg"
                alt=""
                width={23}
                height={18}
              />
            </div>
            Conéctate ya
          </button>
        </div>
      </div>
      <a className="text-sm text-stone-500" href="">
        Términos y condiciones
      </a>
      <a className="text-sm text-stone-500" href="">
        Política de privacidad
      </a>
    </div>
  );
};

export default CustomerService;
