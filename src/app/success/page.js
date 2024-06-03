"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function SuccessPage() {
  const clientData = useSelector((state) => state.dataClient);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <CircleCheckIcon className="mx-auto h-12 w-12 text-green-600" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Gracias por registrarse con nosotros
          </h2>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            A continuacion le mostramos un resumen de los datos registrados.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow px-6 py-8 sm:px-10">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                Sumario
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Nombre: {clientData.full_name}</li>
                <li>Correo electrónico: {clientData.email}</li>
                <li>País: {clientData.country}</li>
                <li>Ciudad: {clientData.city}</li>
                <li>Dirección: {clientData.street_address}</li>
                <li>Teléfono: {clientData.phone_number}</li>
              </ul>
              {clientData?.business_info && (
                <>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Datos de la compa#ia
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                    Datos de la compañía:{" "}
                      {clientData.business_info.company_name}
                    </li>
                    <li>
                      Cantidad de empleados:{" "}
                      {clientData.business_info.company_size}
                    </li>
                    <li>Rol {clientData.business_info.role_in_company}</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-400"
            prefetch={false}
          >
            Ir a pagina principal
          </Link>
        </div>
      </div>
    </div>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
