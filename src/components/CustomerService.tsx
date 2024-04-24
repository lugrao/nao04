const CustomerService = () => {
  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <h2 className="card-title">Atención al cliente</h2>
        <p>
          Nuestro equipo está disponible las 24 horas para resolver cualquier
          duda que tengas.
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-blue-200 font-semibold text-sky-700">
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
      <a href="">Términos y condiciones</a>
      <a href="">Política de privacidad</a>
    </div>
  );
};

export default CustomerService;
