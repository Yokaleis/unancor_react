import Banner from "../../../assets/bg-banner.jpg";
import Arrow from "../../../assets/icons-dashboard-anunciante/arrow.svg";
import File from "../../../assets/icons-dashboard-anunciante/file.svg";
import blackLink from "../../../assets/icons-dashboard-anunciante/link_black_24dp1.svg";
import letterC from "../../../assets/C.svg";
import React, { useState } from "react";
import Grafica from "../../../components/dashboard/Grafica"

function ButtonMenuGridSee() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex justify-end absolute top-0 right-0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className="cursor-pointer"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="18" height="18" rx="3" fill="#F4F4F4" />
        <path
          d="M9.00065 6.66732C9.64232 6.66732 10.1673 6.14232 10.1673 5.50065C10.1673 4.85898 9.64232 4.33398 9.00065 4.33398C8.35898 4.33398 7.83398 4.85898 7.83398 5.50065C7.83398 6.14232 8.35898 6.66732 9.00065 6.66732ZM9.00065 7.83398C8.35898 7.83398 7.83398 8.35898 7.83398 9.00065C7.83398 9.64232 8.35898 10.1673 9.00065 10.1673C9.64232 10.1673 10.1673 9.64232 10.1673 9.00065C10.1673 8.35898 9.64232 7.83398 9.00065 7.83398ZM9.00065 11.334C8.35898 11.334 7.83398 11.859 7.83398 12.5007C7.83398 13.1423 8.35898 13.6673 9.00065 13.6673C9.64232 13.6673 10.1673 13.1423 10.1673 12.5007C10.1673 11.859 9.64232 11.334 9.00065 11.334Z"
          fill="black"
        />
      </svg>
      {isOpen && (
        <div className="bg-white z-10 border p-3 space-y-3 w-24 right-5 top-0 absolute text-xs">
          <div>Editar</div>
          <div>Desactivar</div>
          <div>Eliminar</div>
          <hr />
          <div className="text-unancor-blue">Compartir</div>
        </div>
      )}
    </div>
  );
}


function Home() {
  const [seeType, setSeeType] = useState("grid"); // table or grid
  const OnclickSeeType = (type) => {
    setSeeType(type);
  };
  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="grid grid-cols-3 gap-4 absolute h-full pl-24 pr-4 pt-20 pb-8 w-full">
        <div className="col-span-2 flex flex-col">
          <div
            className="w-full col-span-2 h-24 rounded-lg"
            style={{
              background: "url(" + Banner + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="
              w-full
              bg-unancor-blue
              h-full
              bg-opacity-80
              rounded-lg
              inline-flex
              p-2
            "
              style={{ justifyContent: "space-between" }}
            >
              <div className="font-bold text-5xl text-white">Linkbooster</div>
              <div className="flex flex-col items-end">
                <div className="text-5xl text-white font-bold">-50%</div>
                <div className="text-xl text-white">
                  Promoci&oacute;n valida hasta 01/05/2021
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white mt-3 rounded-lg flex flex-col h-full">
            <div className="pr-5 pl-5 flex">
              <div className="w-1/2">
                <div className="text-xl font-bold mt-2">Proyectos</div>
              </div>
              <div className="w-1/2 text-right">
                <button className="bg-unancor-blue inline-flex p-2 text-white rounded-sm font-semibold text-xs items-center h-7 mt-2">
                  <svg
                    className="mr-1"
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
                  Nuevo Proyecto
                </button>
              </div>
            </div>
            <div className="pb-2 pr-2 pl-5 flex items-center w-full">
              <div className="inline-flex w-3/5 items-center">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button className="p-1 focus:outline-none focus:shadow-outline">
                      <span className="material-icons-outlined">search</span>
                    </button>
                  </span>
                  <input
                    type="search"
                    className="py-2 placeholder-black text-xs rounded-md pl-10 focus:outline-none border-2 w-36"
                    placeholder="Buscar medio"
                  />
                </div>
                <div className="ml-3 pt-4">
                  <div className="flex space-x-2 mb-1">
                    <span className="font-bold text-sm">Todos</span>
                    <span className="text-xs bg-gray-200 rounded p-1 px-2 text-unancor-blue">
                      1
                    </span>
                  </div>
                  <div
                    className="bg-unancor-blue rounded"
                    style={{ width: "70px", height: "5px" }}
                  ></div>
                </div>
                <div className="ml-6 inline-flex space-x-2">
                  <span className="opacity-50 mr-1 text-sm">Activos</span>
                  <span className="text-xs text-gray-400 bg-gray-100 rounded p-1 px-2">
                    0
                  </span>
                </div>
                <div className="ml-9 inline-flex space-x-2">
                  <span className="opacity-50 mr-1  text-sm">Inactivos</span>
                  <span className="text-xs text-gray-400 bg-gray-100 rounded p-1 px-2">
                    0
                  </span>
                </div>
                <div className="ml-7 inline-flex space-x-2">
                  <span className="opacity-50 mr-1  text-sm">Eliminados</span>
                  <span className="text-xs text-gray-400 bg-gray-100 rounded p-1 px-2">
                    0
                  </span>
                </div>
              </div>
              <div className="w-2/5 inline-flex items-center justify-end space-x-1 pr-4">
                <h1 className="ml-24">
                  <span className="opacity-50 text-sm">Ordenar</span>
                </h1>
                <div
                  className="cursor-pointer"
                  onClick={() => OnclickSeeType("table")}
                >
                  <span className="material-icons-outlined">view_list</span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => OnclickSeeType("grid")}
                >
                  <span className="material-icons-outlined">grid_view</span>
                </div>
              </div>
            </div>
            {/* Table See */}
            {seeType === "table" && (
              <div className="flex p-5 pt-0 pb-0">
                <table className="w-full bg-white text-xs border ">
                  <thead className="bg-gray-200 text-black">
                    <tr>
                      <th className="font-medium opacity-50 py-4">
                        <div className="flex items-center justify-center"></div>
                      </th>
                      <th className="font-medium opacity-50 py-4">
                        <div className="flex items-center justify-center">
                          Proyecto
                        </div>
                      </th>
                      <th className="font-medium opacity-50">
                        <div className="flex items-center justify-center">
                          Visitas
                        </div>
                      </th>
                      <th className="font-medium opacity-50">
                        <div className="flex items-center justify-center">
                          Inversi&oacute;n
                        </div>
                      </th>
                      <th className="font-medium opacity-50">
                        <div className="flex items-center justify-center">
                          DR
                        </div>
                      </th>
                      <th className="font-medium opacity-50">
                        <div className="flex items-center justify-center">
                          DA
                        </div>
                      </th>
                      <th className="font-medium opacity-50">
                        <div className="flex items-center justify-center">
                          TF
                        </div>
                      </th>
                      <th className="font-medium opacity-50">
                        <div className="flex items-center justify-center">
                          CF
                        </div>
                      </th>
                      <th className="font-medium opacity-50">
                        <div className="flex items-center justify-center">
                          Acciones
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 divide-y divide-gray-200">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                      <tr key={index}>
                        <td className="py-3 flex-col flex items-center justify-center">
                          <img src={letterC} alt="Estadisticas" />
                        </td>
                        <td className="text-center font-bold p-2 text-unancor-blue">
                          coclusion.com.ar
                        </td>
                        <td className="text-center font-bold p-2">4.5201</td>
                        <td className="text-center font-bold p-2">3.757</td>
                        <td className="text-center font-bold p-2">57</td>
                        <td className="text-center font-bold p-2">100</td>
                        <td className="text-center font-bold p-2">85</td>
                        <td className="text-center font-bold p-2">100</td>
                        <td className="relative">
                          <div className="right-10 absolute top-5">
                            <ButtonMenuGridSee />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {/* Grid See */}
            {seeType === "grid" && (
              <div className="px-3 gap-2 grid grid-cols-4">
                <div className="border p-2 relative">
                  <div className="relative">
                    <ButtonMenuGridSee />
                    <Grafica />
                  </div>
                  <div>
                    <span className="text-3xl font-bold">C</span>
                    <span className="text-sm text-unancor-blue font-bold ml-1">
                      conclusion.com.ar
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-1/2 text-left text-xs opacity-50">
                      Inversi&oacute;n
                    </div>
                    <div className="w-1/2 text-right text-sm font-bold">
                      &dollar;3.757
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/2 text-left text-sm opacity-50 mt-3">
                      DR
                    </div>
                    <div className="w-1/2 text-right text-sm font-bold">57</div>
                  </div>
                </div>
              </div>
            )}
            {/* Pagination */}
            <div className="flex items-end justify-center py-2 flex-1">
              <svg
                width="136"
                height="30"
                viewBox="0 0 136 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="136" height="30" rx="3" fill="white" />
                <path
                  d="M23.41 19.59L18.83 15L23.41 10.41L22 9L16 15L22 21L23.41 19.59Z"
                  fill="#2D72C9"
                />
                <path
                  d="M112.59 19.59L117.17 15L112.59 10.41L114 9L120 15L114 21L112.59 19.59Z"
                  fill="#2D72C9"
                />
                <path
                  d="M40.54 11.5V10.252H43.036V19H41.656V11.5H40.54Z"
                  fill="#2D72C9"
                />
                <path
                  opacity="0.35"
                  d="M61.476 17.14C62.244 16.476 62.848 15.932 63.288 15.508C63.736 15.076 64.108 14.628 64.404 14.164C64.7 13.7 64.848 13.236 64.848 12.772C64.848 12.292 64.732 11.916 64.5 11.644C64.276 11.372 63.92 11.236 63.432 11.236C62.96 11.236 62.592 11.388 62.328 11.692C62.072 11.988 61.936 12.388 61.92 12.892H60.6C60.624 11.98 60.896 11.284 61.416 10.804C61.944 10.316 62.612 10.072 63.42 10.072C64.292 10.072 64.972 10.312 65.46 10.792C65.956 11.272 66.204 11.912 66.204 12.712C66.204 13.288 66.056 13.844 65.76 14.38C65.472 14.908 65.124 15.384 64.716 15.808C64.316 16.224 63.804 16.708 63.18 17.26L62.64 17.74H66.444V18.88H60.612V17.884L61.476 17.14Z"
                  fill="black"
                />
                <path
                  opacity="0.35"
                  d="M82.696 12.412C82.744 11.668 83.028 11.088 83.548 10.672C84.076 10.256 84.748 10.048 85.564 10.048C86.124 10.048 86.608 10.148 87.016 10.348C87.424 10.548 87.732 10.82 87.94 11.164C88.148 11.508 88.252 11.896 88.252 12.328C88.252 12.824 88.12 13.248 87.856 13.6C87.592 13.952 87.276 14.188 86.908 14.308V14.356C87.38 14.5 87.748 14.764 88.012 15.148C88.276 15.524 88.408 16.008 88.408 16.6C88.408 17.072 88.3 17.492 88.084 17.86C87.868 18.228 87.548 18.52 87.124 18.736C86.7 18.944 86.192 19.048 85.6 19.048C84.736 19.048 84.024 18.828 83.464 18.388C82.912 17.94 82.616 17.3 82.576 16.468H83.896C83.928 16.892 84.092 17.24 84.388 17.512C84.684 17.776 85.084 17.908 85.588 17.908C86.076 17.908 86.452 17.776 86.716 17.512C86.98 17.24 87.112 16.892 87.112 16.468C87.112 15.908 86.932 15.512 86.572 15.28C86.22 15.04 85.676 14.92 84.94 14.92H84.628V13.792H84.952C85.6 13.784 86.092 13.676 86.428 13.468C86.772 13.26 86.944 12.932 86.944 12.484C86.944 12.1 86.82 11.796 86.572 11.572C86.324 11.34 85.972 11.224 85.516 11.224C85.068 11.224 84.72 11.34 84.472 11.572C84.224 11.796 84.076 12.076 84.028 12.412H82.696Z"
                  fill="black"
                />
                <path d="M37.5 23H47.5" stroke="#2D72C9" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col w-full bg-white rounded-lg p-3 pb-7 h-1/2">
            <div className="flex mb-6">
              <div className="float-left text-sm font-bold">
                <span className="mb-1">Medios nuevos</span>
                {/* DIVDER */}
                <div
                  className="bg-unancor-blue rounded"
                  style={{ width: "105px", height: "5px" }}
                ></div>
              </div>
              <div className="float-left text-sm opacity-50 ml-4">
                En Oferta
              </div>
            </div>
            <table className="w-full bg-white text-xs border">
              <thead className="bg-unancor-bgglobal text-black">
                <tr>
                  <th className="font-medium opacity-50">
                    <div className="flex items-center justify-center">
                      Medio
                    </div>
                  </th>
                  <th className="font-medium">
                    <div className="flex items-center justify-center">
                      <span className="opacity-50">Tr&aacute;fico</span>
                      <img className="ml-1" src={Arrow} alt="Arrow" />
                    </div>
                  </th>
                  <th className="font-medium ">
                    <div className="flex items-center justify-center">
                      <span className="opacity-50">DR</span>
                      <img className="ml-1" src={Arrow} alt="Arrow" />
                    </div>
                  </th>
                  <th className="font-medium opacity-50">
                    <div className="flex items-center justify-center">Tipo</div>
                  </th>
                  <th className="font-medium">
                    <div className="flex items-center justify-center">
                      <img className="mr-1" src={File} alt="File" />
                      <span className="opacity-50">Art&iacute;culo</span>
                      <img className="ml-1" src={Arrow} alt="Arrow" />
                    </div>
                  </th>
                  <th className="font-medium px-3">
                    <div className="flex items-center justify-center">
                      <img className="mr-1" src={blackLink} alt="BlackLink" />
                      <span className="opacity-50">Enlace</span>
                      <img className="ml-1" src={Arrow} alt="Arrow" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-2 text-unancor-blue">coclusion.com.ar</td>
                  <td className="p-2">36504</td>
                  <td className="p-2">4.2</td>
                  <td className="p-2">Blog</td>
                  <td className="p-2">
                    <button className="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                      25 &euro;
                    </button>
                  </td>
                  <td className="p-2">
                    <button className="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                      650 &euro;
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-unancor-blue">coclusion.com.ar</td>
                  <td className="p-2">36504</td>
                  <td className="p-2">3.4</td>
                  <td className="p-2">Blog</td>
                  <td className="p-2">
                    <button className="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                      25 &euro;
                    </button>
                  </td>
                  <td className="p-2">
                    <button className="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                      650 &euro;
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-unancor-blue">coclusion.com.ar</td>
                  <td className="p-2">36504</td>
                  <td className="p-2">4</td>
                  <td className="p-2">Blog</td>
                  <td className="p-2">
                    <button className="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                      25 &euro;
                    </button>
                  </td>
                  <td className="p-2">
                    <button className="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                      650 &euro;
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-unancor-blue">coclusion.com.ar</td>
                  <td className="p-2">36504</td>
                  <td className="p-2">3.4</td>
                  <td className="p-2">Blog</td>
                  <td className="p-2">
                    <button className="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                      25 &euro;
                    </button>
                  </td>
                  <td className="p-2">
                    <button className="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                      650 &euro;
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full bg-white rounded-lg p-3 pb-7 mt-3 h-1/2">
            <div className="flex mb-7">
              <div className="float-left text-sm font-bold">
                <span className="mb-1">Pendientes</span>
                {/* DIVDER */}
                <div
                  className="bg-unancor-blue rounded"
                  style={{ width: "75px", height: "5px" }}
                ></div>
              </div>
            </div>
            <table className="w-full bg-white text-xs border">
              <thead className="bg-gray-200 text-black">
                <tr>
                  <th className="font-medium opacity-50 py-2">
                    <div className="flex items-center justify-center">
                      Medio
                    </div>
                  </th>
                  <th className="font-medium opacity-50">
                    <div className="flex items-center justify-center">
                      Proyecto
                    </div>
                  </th>
                  <th className="font-medium opacity-50">
                    <div className="flex items-center justify-center">
                      Fecha
                    </div>
                  </th>
                  <th className="font-medium opacity-50">
                    <div className="flex items-center justify-center">
                      Status
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="text-center font-bold p-2 text-unancor-blue">
                    coclusion.com.ar
                  </td>
                  <td className="text-center font-bold p-2 text-unancor-orange">
                    miblog.com
                  </td>
                  <td className="text-center font-bold p-2">30/02/2021</td>
                  <td className="p-2">
                    <div className="p-2 bg-unancor-orange bg-opacity-20 font-semibold rounded-md text-center text-unancor-orange">
                      Por Pagar
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold p-2 text-unancor-blue">
                    coclusion.com.ar
                  </td>
                  <td className="text-center font-bold p-2 text-unancor-orange">
                    miblog.com
                  </td>
                  <td className="text-center font-bold p-2">30/02/2021</td>
                  <td className="p-2">
                    <div className="p-2 bg-gray-400 bg-opacity-20 font-semibold rounded-md text-center text-black">
                      Revisi&oacute;n
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold p-2 text-unancor-blue">
                    coclusion.com.ar
                  </td>
                  <td className="text-center font-bold p-2 text-unancor-orange">
                    miblog.com
                  </td>
                  <td className="text-center font-bold p-2">30/02/2021</td>
                  <td className="p-2">
                    <div className="p-2 bg-gray-400 bg-opacity-20 font-semibold rounded-md text-center text-black">
                      Revisi&oacute;n
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold p-2 text-unancor-blue">
                    coclusion.com.ar
                  </td>
                  <td className="text-center font-bold p-2 text-unancor-orange">
                    miblog.com
                  </td>
                  <td className="text-center font-bold p-2">30/02/2021</td>
                  <td className="p-2">
                    <div className="p-2 bg-unancor-orange bg-opacity-20 font-semibold rounded-md text-center text-unancor-orange">
                      Por Pagar
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
