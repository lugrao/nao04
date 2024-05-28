/**
 * Displays information about customer support.
 * Provides a button to connect with customer service and links to terms and privacy policies.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the CustomerService component.
 */
export const CustomerService = (): JSX.Element => {
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
                alt="Ícono de atención al cliente"
                width={23}
                height={18}
              />
            </div>
            Conéctate ya
          </button>
        </div>
        <div className="flex flex-col gap-1 pt-12 text-left text-sm text-stone-500">
          <span className="cursor-pointer">Términos y condiciones</span>
          <span className="cursor-pointer">Política de privacidad</span>
        </div>
      </div>
    </div>
  );
};
