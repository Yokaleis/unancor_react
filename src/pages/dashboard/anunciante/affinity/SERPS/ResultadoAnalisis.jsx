import Cuadro from "../../../../../assets/icons-dashboard-anunciante/cuadros.svg";
import Table from "../../../../../assets/icons-dashboard-anunciante/table.svg";
import { Link } from "react-router-dom";

function ResultadoAnalisis() {
  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="absolute pt-20 pl-24 pb-4 pr-4 h-full w-full">
        <div className="bg-white h-full flex flex-col p-10 space-y-6">
          <div className="inline-flex space-x-4 justify-end">
            <button className="ml-1 p-2 px-10 text-sm bg-gray-200 font-bold">
              Propuesta
            </button>
            <Link
              className="p-2 px-10 text-sm bg-gray-200 font-bold cursor-pointer"
              to="/HomeSerps/Competencias"
            >
              Competencia
            </Link>
            <button className="p-2 px-10 text-sm bg-unancor-blue font-bold text-white">
              SERP
            </button>
            <svg
              className="mx-auto my-auto float-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4308 12.98C19.4708 12.66 19.5008 12.34 19.5008 12C19.5008 11.66 19.4708 11.34 19.4308 11.02L21.5408 9.37C21.7308 9.22 21.7808 8.95 21.6608 8.73L19.6608 5.27C19.5708 5.11 19.4008 5.02 19.2208 5.02C19.1608 5.02 19.1008 5.03 19.0508 5.05L16.5608 6.05C16.0408 5.65 15.4808 5.32 14.8708 5.07L14.4908 2.42C14.4608 2.18 14.2508 2 14.0008 2H10.0008C9.75082 2 9.54082 2.18 9.51082 2.42L9.13082 5.07C8.52082 5.32 7.96082 5.66 7.44082 6.05L4.95082 5.05C4.89082 5.03 4.83082 5.02 4.77082 5.02C4.60082 5.02 4.43082 5.11 4.34082 5.27L2.34082 8.73C2.21082 8.95 2.27082 9.22 2.46082 9.37L4.57082 11.02C4.53082 11.34 4.50082 11.67 4.50082 12C4.50082 12.33 4.53082 12.66 4.57082 12.98L2.46082 14.63C2.27082 14.78 2.22082 15.05 2.34082 15.27L4.34082 18.73C4.43082 18.89 4.60082 18.98 4.78082 18.98C4.84082 18.98 4.90082 18.97 4.95082 18.95L7.44082 17.95C7.96082 18.35 8.52082 18.68 9.13082 18.93L9.51082 21.58C9.54082 21.82 9.75082 22 10.0008 22H14.0008C14.2508 22 14.4608 21.82 14.4908 21.58L14.8708 18.93C15.4808 18.68 16.0408 18.34 16.5608 17.95L19.0508 18.95C19.1108 18.97 19.1708 18.98 19.2308 18.98C19.4008 18.98 19.5708 18.89 19.6608 18.73L21.6608 15.27C21.7808 15.05 21.7308 14.78 21.5408 14.63L19.4308 12.98ZM17.4508 11.27C17.4908 11.58 17.5008 11.79 17.5008 12C17.5008 12.21 17.4808 12.43 17.4508 12.73L17.3108 13.86L18.2008 14.56L19.2808 15.4L18.5808 16.61L17.3108 16.1L16.2708 15.68L15.3708 16.36C14.9408 16.68 14.5308 16.92 14.1208 17.09L13.0608 17.52L12.9008 18.65L12.7008 20H11.3008L11.1108 18.65L10.9508 17.52L9.89082 17.09C9.46082 16.91 9.06082 16.68 8.66082 16.38L7.75082 15.68L6.69082 16.11L5.42082 16.62L4.72082 15.41L5.80082 14.57L6.69082 13.87L6.55082 12.74C6.52082 12.43 6.50082 12.2 6.50082 12C6.50082 11.8 6.52082 11.57 6.55082 11.27L6.69082 10.14L5.80082 9.44L4.72082 8.6L5.42082 7.39L6.69082 7.9L7.73082 8.32L8.63082 7.64C9.06082 7.32 9.47082 7.08 9.88082 6.91L10.9408 6.48L11.1008 5.35L11.3008 4H12.6908L12.8808 5.35L13.0408 6.48L14.1008 6.91C14.5308 7.09 14.9308 7.32 15.3308 7.62L16.2408 8.32L17.3008 7.89L18.5708 7.38L19.2708 8.59L18.2008 9.44L17.3108 10.14L17.4508 11.27ZM12.0008 8C9.79082 8 8.00082 9.79 8.00082 12C8.00082 14.21 9.79082 16 12.0008 16C14.2108 16 16.0008 14.21 16.0008 12C16.0008 9.79 14.2108 8 12.0008 8ZM12.0008 14C10.9008 14 10.0008 13.1 10.0008 12C10.0008 10.9 10.9008 10 12.0008 10C13.1008 10 14.0008 10.9 14.0008 12C14.0008 13.1 13.1008 14 12.0008 14Z"
                fill="#2D72C9"
              />
            </svg>
          </div>
          <div className="inline-flex">
            <div className="w-1/2 font-semibold text-2xl">Análisis realizados</div>
            <div className="w-1/2 inline-flex justify-end">
              <button className="p-2 bg-unancor-blue inline-flex text-white font-semibold rounded-sm">
                <svg
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                    fill="white"
                  />
                </svg>
                Nuevo análisis
              </button>
            </div>
          </div>
          <div className="pb-5 pr-2 pl-5 mt-5 flex items-center w-full">
            <div className="inline-flex w-2/5 items-center">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button className="p-1 focus:outline-none focus:shadow-outline">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  className="py-2 text-xs rounded-md pl-10 focus:outline-none border-2 w-36 placeholder-black"
                  placeholder="Buscar"
                />
              </div>
            </div>
            <div className="w-3/5 inline-flex items-center justify-end space-x-4 pr-4">
              <div className="inline-flex p-1">
                <span className="opacity-50 text-xs my-auto mr-2">Desde</span>
                <div className="text-sm border p-2 inline-flex">
                  18/03/2021
                  <svg
                    className="ml-10"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="inline-flex p-1">
                <span className="opacity-50 text-xs my-auto mr-2">Hasta</span>
                <div className="text-sm border p-2 inline-flex">
                  18/04/2021
                  <svg
                    className="ml-10"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="ml-24">
                <span className="opacity-50">Ordenar</span>
              </h1>
              <img src={Table} alt="table" />
              <a href="/dashboard/anunciante/ordenar.html">
                <img src={Cuadro} alt="Cuadro" />
              </a>
            </div>
          </div>
          <table className="border">
            <thead className="bg-gray-100 opacity-50 text-xs font-medium">
              <tr>
                <th className="py-4">Fecha</th>
                <th>Keywords</th>
                <th>Dominios en Propuestas</th>
                <th>Dominios Encotrados</th>
                <th>Dominios Inviables</th>
                <th>Dominios Analizados</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index}>
                  <td className="text-xs text-center">05/05/2021</td>
                  <td className="text-xs text-center font-bold">
                    <Link to="/HomeSerps/PopUpAnalisis">
                      Noticias, Economía, Política internacional,
                      <br />
                      Ciencias políticas, Relaciones internacionales
                    </Link>
                  </td>
                  <td className="text-xs text-center font-bold">25.000</td>
                  <td className="text-xs text-center font-bold">25.000</td>
                  <td className="text-xs text-center font-bold">25.000</td>
                  <td className="text-xs text-center font-bold">25.000</td>
                  <td className="py-3 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                        fill="black"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mx-auto divide-x divide-white bg-unancor-blue inline-flex w-14 justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                fill="white"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultadoAnalisis;
