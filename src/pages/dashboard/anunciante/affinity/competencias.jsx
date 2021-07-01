import { Link } from "react-router-dom";

function Competencias() {
  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="absolute pt-20 pl-24 pb-4 pr-4 h-full w-full">
        <div className="bg-white h-full flex flex-col p-10 space-y-6">
          <div className="inline-flex space-x-4 justify-end">
            <Link
              className="ml-1 p-2 px-10 text-sm bg-gray-200 font-bold"
              to="/HomeSerps/Propuestos"
            >
              Propuesta
            </Link>
            <button className="p-2 px-10 text-sm cursor-pointer bg-unancor-blue font-bold text-white">
              Competencia
            </button>
            <button className="p-2 px-10 text-sm bg-gray-200 font-bold ">
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
          <div
            className="inline-flex items-start space-x-4"
            style={{height: "7%"}}
          >
            <h1 className="text-sm font-medium cursor-pointer">
              Propuestos
              <hr className="border-unancor-blue border-4 rounded-xl mt-2" />
            </h1>
            <h1 className="text-sm font-medium opacity-30 cursor-pointer">
              Analizados
            </h1>
            <h1 className="text-sm font-medium opacity-30">Descartados</h1>
          </div>
          {/* Barra de Accion de la tabla */}
          <div className="inline-flex mt-5" style={{height: "7%"}}>
            <div className="inline-flex w-1/2">
              <div className="border flex">
                <svg
                  className="my-auto mx-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                    fill="black"
                  />
                </svg>
                <input
                  className="pl-4 pr-6 placeholder-black text-xs font-medium"
                  type="text"
                  placeholder="Buscar Medio"
                />
              </div>
            </div>
            <div className="inline-flex w-1/2 justify-end space-x-4">
              <div
                className="inline-flex border px-4 py-2 space-x-2 relative cursor-pointer items-center"
                id="buttonAffinity"
              >
                <span className="text-xs">Afinidad:</span>
                <svg
                  className="my-auto"
                  width="28"
                  height="8"
                  viewBox="0 0 28 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="8" height="8" rx="1" fill="#81C784" />
                  <rect x="10" width="8" height="8" rx="1" fill="#66BB6A" />
                  <rect x="20" width="8" height="8" rx="1" fill="#4CAF50" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.59 15.4102L12 10.8302L7.41 15.4102L6 14.0002L12 8.00016L18 14.0002L16.59 15.4102Z"
                    fill="black"
                  />
                </svg>

                <div
                  className="bg-white p-3 shadow-md absolute flex-col w-36 z-10 top-11 right-0 hidden"
                  id="windowsAffinity"
                >
                  <div className="p-4 hover:bg-gray-100">
                    <svg
                      width="28"
                      height="8"
                      viewBox="0 0 28 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="8" height="8" rx="1" fill="#81C784" />
                      <rect x="10" width="8" height="8" rx="1" fill="#66BB6A" />
                      <rect x="20" width="8" height="8" rx="1" fill="#4CAF50" />
                    </svg>
                  </div>
                  <div className="p-4 hover:bg-gray-100">
                    <svg
                      width="28"
                      height="8"
                      viewBox="0 0 28 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="8" height="8" rx="1" fill="#81C784" />
                      <rect x="10" width="8" height="8" rx="1" fill="#66BB6A" />
                      <rect x="20" width="8" height="8" rx="1" fill="#E7E7E7" />
                    </svg>
                  </div>
                  <div className="p-4 hover:bg-gray-100">
                    <svg
                      width="28"
                      height="8"
                      viewBox="0 0 28 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="8" height="8" rx="1" fill="#81C784" />
                      <rect x="10" width="8" height="8" rx="1" fill="#E7E7E7" />
                      <rect x="20" width="8" height="8" rx="1" fill="#E7E7E7" />
                    </svg>
                  </div>
                </div>
                {/* Menu Affinity */}
              </div>
              <div className="inline-flex border px-4 py-2 space-x-2 items-center">
                <span className="text-xs">Spam</span>
                <svg
                  className="my-auto"
                  width="28"
                  height="8"
                  viewBox="0 0 28 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="8" height="8" rx="1" fill="#EF5350" />
                  <rect x="10" width="8" height="8" rx="1" fill="#E7E7E7" />
                  <rect x="20" width="8" height="8" rx="1" fill="#E7E7E7" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                className="inline-flex border px-2 py-2 relative"
                id="buttonFilter"
              >
                {/* Boton de filtros */}
                <input
                  className="placeholder-black opacity-50 text-xs w-20"
                  type="text"
                  placeholder="Filtros"
                />
                <div>
                  <svg
                    className="ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00067 6H17.0007L11.9907 12.3L7.00067 6ZM4.25067 5.61C6.27067 8.2 10.0007 13 10.0007 13V19C10.0007 19.55 10.4507 20 11.0007 20H13.0007C13.5507 20 14.0007 19.55 14.0007 19V13C14.0007 13 17.7207 8.2 19.7407 5.61C20.2507 4.95 19.7807 4 18.9507 4H5.04067C4.21067 4 3.74067 4.95 4.25067 5.61Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div
                  className="p-3 bg-white z-10 hidden text-xs w-52 shadow-md top-16 right-0"
                  id="windowsFilter"
                >
                  <div className="hover:text-unancor-blue hover:bg-gray-100 py-2 inline-flex items-center justify-center group w-full">
                    Aplicar filtro “Filtro Marketing”
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current text-gray-400 group-hover:fill-current group-hover:text-unancor-blue"
                        d="M9.33317 5.25V11.0833H4.6665V5.25H9.33317ZM8.45817 1.75H5.5415L4.95817 2.33333H2.9165V3.5H11.0832V2.33333H9.0415L8.45817 1.75ZM10.4998 4.08333H3.49984V11.0833C3.49984 11.725 4.02484 12.25 4.6665 12.25H9.33317C9.97484 12.25 10.4998 11.725 10.4998 11.0833V4.08333Z"
                      />
                    </svg>
                  </div>
                  <div className="hover:text-unancor-blue hover:bg-gray-100 py-2 inline-flex items-center justify-center w-full group">
                    Aplicar “Filtro Negocios”
                    <svg
                      className="ml-8"
                      width="17"
                      height="17"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current text-gray-400 group-hover:fill-current group-hover:text-unancor-blue"
                        d="M9.33317 5.25V11.0833H4.6665V5.25H9.33317ZM8.45817 1.75H5.5415L4.95817 2.33333H2.9165V3.5H11.0832V2.33333H9.0415L8.45817 1.75ZM10.4998 4.08333H3.49984V11.0833C3.49984 11.725 4.02484 12.25 4.6665 12.25H9.33317C9.97484 12.25 10.4998 11.725 10.4998 11.0833V4.08333Z"
                      />
                    </svg>
                  </div>
                  <div className="hover:text-unancor-blue hover:bg-gray-100 py-2 flex items-center justify-center">
                    Crear nuevo filtro
                  </div>
                </div>
                {/* Fin Boton de filtros */}
              </div>
              <div className="bg-unancor-blue flex px-2 rounded-sm">
                <svg
                  id="buttonMenuPestallas"
                  className="my-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4308 12.98C19.4708 12.66 19.5008 12.34 19.5008 12C19.5008 11.66 19.4708 11.34 19.4308 11.02L21.5408 9.37C21.7308 9.22 21.7808 8.95 21.6608 8.73L19.6608 5.27C19.5708 5.11 19.4008 5.02 19.2208 5.02C19.1608 5.02 19.1008 5.03 19.0508 5.05L16.5608 6.05C16.0408 5.65 15.4808 5.32 14.8708 5.07L14.4908 2.42C14.4608 2.18 14.2508 2 14.0008 2H10.0008C9.75082 2 9.54082 2.18 9.51082 2.42L9.13082 5.07C8.52082 5.32 7.96082 5.66 7.44082 6.05L4.95082 5.05C4.89082 5.03 4.83082 5.02 4.77082 5.02C4.60082 5.02 4.43082 5.11 4.34082 5.27L2.34082 8.73C2.21082 8.95 2.27082 9.22 2.46082 9.37L4.57082 11.02C4.53082 11.34 4.50082 11.67 4.50082 12C4.50082 12.33 4.53082 12.66 4.57082 12.98L2.46082 14.63C2.27082 14.78 2.22082 15.05 2.34082 15.27L4.34082 18.73C4.43082 18.89 4.60082 18.98 4.78082 18.98C4.84082 18.98 4.90082 18.97 4.95082 18.95L7.44082 17.95C7.96082 18.35 8.52082 18.68 9.13082 18.93L9.51082 21.58C9.54082 21.82 9.75082 22 10.0008 22H14.0008C14.2508 22 14.4608 21.82 14.4908 21.58L14.8708 18.93C15.4808 18.68 16.0408 18.34 16.5608 17.95L19.0508 18.95C19.1108 18.97 19.1708 18.98 19.2308 18.98C19.4008 18.98 19.5708 18.89 19.6608 18.73L21.6608 15.27C21.7808 15.05 21.7308 14.78 21.5408 14.63L19.4308 12.98ZM17.4508 11.27C17.4908 11.58 17.5008 11.79 17.5008 12C17.5008 12.21 17.4808 12.43 17.4508 12.73L17.3108 13.86L18.2008 14.56L19.2808 15.4L18.5808 16.61L17.3108 16.1L16.2708 15.68L15.3708 16.36C14.9408 16.68 14.5308 16.92 14.1208 17.09L13.0608 17.52L12.9008 18.65L12.7008 20H11.3008L11.1108 18.65L10.9508 17.52L9.89082 17.09C9.46082 16.91 9.06082 16.68 8.66082 16.38L7.75082 15.68L6.69082 16.11L5.42082 16.62L4.72082 15.41L5.80082 14.57L6.69082 13.87L6.55082 12.74C6.52082 12.43 6.50082 12.2 6.50082 12C6.50082 11.8 6.52082 11.57 6.55082 11.27L6.69082 10.14L5.80082 9.44L4.72082 8.6L5.42082 7.39L6.69082 7.9L7.73082 8.32L8.63082 7.64C9.06082 7.32 9.47082 7.08 9.88082 6.91L10.9408 6.48L11.1008 5.35L11.3008 4H12.6908L12.8808 5.35L13.0408 6.48L14.1008 6.91C14.5308 7.09 14.9308 7.32 15.3308 7.62L16.2408 8.32L17.3008 7.89L18.5708 7.38L19.2708 8.59L18.2008 9.44L17.3108 10.14L17.4508 11.27ZM12.0008 8C9.79082 8 8.00082 9.79 8.00082 12C8.00082 14.21 9.79082 16 12.0008 16C14.2108 16 16.0008 14.21 16.0008 12C16.0008 9.79 14.2108 8 12.0008 8ZM12.0008 14C10.9008 14 10.0008 13.1 10.0008 12C10.0008 10.9 10.9008 10 12.0008 10C13.1008 10 14.0008 10.9 14.0008 12C14.0008 13.1 13.1008 14 12.0008 14Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                className="bg-unancor-blue flex px-2 rounded-sm relative  cursor-pointer"
                id="more"
              >
                <svg
                  className="my-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <table className="w-full text-xs border">
            <thead className="bg-gray-200 opacity-50">
              <th className="py-4 text-left pl-10">Dominio</th>
              <th>DR</th>
              <th>Eliminar</th>
              <th>Acciones</th>
            </thead>
            <tbody className="divider-y">
              <tr>
                <td className="py-4">
                  <div className="inline-flex pl-10">
                    <span className="text-unancor-blue">significados.com</span>
                    <svg
                      className="ml-4"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.25">
                        <path
                          d="M11.0833 11.0833H2.91667V2.91667H7V1.75H2.91667C2.26917 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.26917 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V7H11.0833V11.0833ZM8.16667 1.75V2.91667H10.2608L4.52667 8.65083L5.34917 9.47333L11.0833 3.73917V5.83333H12.25V1.75H8.16667Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </td>
                <td className="text-center">12</td>
                <td>
                  <div className="flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </td>
                <td className="text-center uppercase text-unancor-blue">
                  Analizar
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="inline-flex pl-10">
                    <span className="text-unancor-blue">significados.com</span>
                    <svg
                      className="ml-4"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.25">
                        <path
                          d="M11.0833 11.0833H2.91667V2.91667H7V1.75H2.91667C2.26917 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.26917 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V7H11.0833V11.0833ZM8.16667 1.75V2.91667H10.2608L4.52667 8.65083L5.34917 9.47333L11.0833 3.73917V5.83333H12.25V1.75H8.16667Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </td>
                <td className="text-center">12</td>
                <td>
                  <div className="flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </td>
                <td className="text-center uppercase text-unancor-blue">
                  Analizar
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="inline-flex pl-10">
                    <span className="text-unancor-blue">significados.com</span>
                    <svg
                      className="ml-4"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.25">
                        <path
                          d="M11.0833 11.0833H2.91667V2.91667H7V1.75H2.91667C2.26917 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.26917 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V7H11.0833V11.0833ZM8.16667 1.75V2.91667H10.2608L4.52667 8.65083L5.34917 9.47333L11.0833 3.73917V5.83333H12.25V1.75H8.16667Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </td>
                <td className="text-center">12</td>
                <td>
                  <div className="flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </td>
                <td className="text-center uppercase text-unancor-blue">
                  Analizar
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="inline-flex pl-10">
                    <span className="text-unancor-blue">significados.com</span>
                    <svg
                      className="ml-4"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.25">
                        <path
                          d="M11.0833 11.0833H2.91667V2.91667H7V1.75H2.91667C2.26917 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.26917 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V7H11.0833V11.0833ZM8.16667 1.75V2.91667H10.2608L4.52667 8.65083L5.34917 9.47333L11.0833 3.73917V5.83333H12.25V1.75H8.16667Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </td>
                <td className="text-center">12</td>
                <td>
                  <div className="flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </td>
                <td className="text-center uppercase text-unancor-blue">
                  Analizar
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="inline-flex pl-10">
                    <span className="text-unancor-blue">significados.com</span>
                    <svg
                      className="ml-4"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.25">
                        <path
                          d="M11.0833 11.0833H2.91667V2.91667H7V1.75H2.91667C2.26917 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.26917 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V7H11.0833V11.0833ZM8.16667 1.75V2.91667H10.2608L4.52667 8.65083L5.34917 9.47333L11.0833 3.73917V5.83333H12.25V1.75H8.16667Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </td>
                <td className="text-center">12</td>
                <td>
                  <div className="flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </td>
                <td className="text-center uppercase text-gray-500">Analizar</td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="inline-flex pl-10">
                    <span className="text-unancor-blue">significados.com</span>
                    <svg
                      className="ml-4"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.25">
                        <path
                          d="M11.0833 11.0833H2.91667V2.91667H7V1.75H2.91667C2.26917 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.26917 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V7H11.0833V11.0833ZM8.16667 1.75V2.91667H10.2608L4.52667 8.65083L5.34917 9.47333L11.0833 3.73917V5.83333H12.25V1.75H8.16667Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </td>
                <td className="text-center">12</td>
                <td>
                  <div className="flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </td>
                <td className="text-center uppercase text-gray-500">Analizar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Competencias;
