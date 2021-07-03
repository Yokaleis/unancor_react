

function Marketplace() {
  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="absolute pt-20 pl-24 pb-4 pr-4 h-full w-full">
        <div className="bg-white h-full flex flex-col p-4">
          <div
            className="inline-flex items-start space-x-4"
            style={{ height: "7%" }}
            id="tab"
          >
            <h1 className="text-sm font-medium cursor-pointer">
              Propuestos
              <div class="bg-unancor-blue h-1 rounded-xl mt-1"></div>
            </h1>
            <h1 className="text-sm font-medium opacity-30 cursor-pointer">
              Analizados
            </h1>
            <h1 className="text-sm font-medium opacity-30">Descartados</h1>
          </div>
          {/* Control Tab */}
          {/* Barra de Accion de la tabla */}
          <div className="inline-flex mt-5" style={{ height: "7%" }}>
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
              <div className="flex inline-flex border px-4 py-2 cursor-pointer">
                <span className="text-sm">Todos</span>
                <span class="material-icons-outlined">expand_more</span>
              </div>
              <div className="flex inline-flex border px-4 py-2">
                <span className="text-sm">Nofollow</span>
                <span class="material-icons-outlined">expand_more</span>
              </div>
              <div
                className="inline-flex border px-4 py-2 space-x-2 relative cursor-pointer"
                id="buttonAffinity"
              >
                <span className="text-sm">Afinidad</span>
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
                <span class="material-icons-outlined">expand_more</span>

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
              <div className="flex flex-row border px-4 py-2 space-x-2 relative cursor-pointer">
                <span className="text-sm">Spam</span>
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
                <span class="material-icons-outlined">expand_more</span>
              </div>
              <div
                className="inline-flex border px-2 py-2 relative cursor-pinter" id="buttonFilter">
                {/* Boton de filtros */}
                <input
                  className="placeholder-black opacity-50 text-sm w-20"
                  type="text"
                  placeholder="Filtros"
                />
                <div>
                <span class="material-icons-outlined">filter_alt</span>
                </div>
                <div
                  className="p-3 bg-white z-10 hidden text-xs w-52 shadow-md top-10 right-0"
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
                <div
                  style={{ right: "88px" }}
                  className="space-y-2 w-48 top-60 absolute text-xs bg-white shadow-md p-3 z-10 flex-col hidden"
                  id="windowPestallas"
                >
                  <div className="text-unancor-blue inline-flex">
                    <svg
                      className="mr-3"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25009 9.43339L2.81759 7.00089L1.98926 7.82339L5.25009 11.0842L12.2501 4.08422L11.4276 3.26172L5.25009 9.43339Z"
                        fill="#2D72C9"
                      />
                    </svg>
                    Afinidad
                  </div>
                  <div className="ml-6">Características</div>
                  <div className="ml-6">Canal de youtube</div>
                  <div className="ml-6">Emisora</div>
                  <div className="text-unancor-blue inline-flex w-full">
                    <svg
                      className="mr-3"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25009 9.43339L2.81759 7.00089L1.98926 7.82339L5.25009 11.0842L12.2501 4.08422L11.4276 3.26172L5.25009 9.43339Z"
                        fill="#2D72C9"
                      />
                    </svg>
                    Fortalezas
                  </div>
                  <div className="text-unancor-blue inline-flex w-full">
                    <svg
                      className="mr-3"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25009 9.43339L2.81759 7.00089L1.98926 7.82339L5.25009 11.0842L12.2501 4.08422L11.4276 3.26172L5.25009 9.43339Z"
                        fill="#2D72C9"
                      />
                    </svg>
                    Idioma
                  </div>
                  <div className="text-unancor-blue inline-flex w-full">
                    <svg
                      className="mr-3"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25009 9.43339L2.81759 7.00089L1.98926 7.82339L5.25009 11.0842L12.2501 4.08422L11.4276 3.26172L5.25009 9.43339Z"
                        fill="#2D72C9"
                      />
                    </svg>
                    Nivel de spam
                  </div>
                  <div className="text-unancor-blue inline-flex w-full">
                    <svg
                      className="mr-3"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25009 9.43339L2.81759 7.00089L1.98926 7.82339L5.25009 11.0842L12.2501 4.08422L11.4276 3.26172L5.25009 9.43339Z"
                        fill="#2D72C9"
                      />
                    </svg>
                    Medio
                  </div>
                  <div className="ml-6">Streaming</div>
                </div>
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
                <div
                  className="hidden shadow-md space-y-3 z-10 absolute bg-white right-0 top-10 p-2 w-44"
                  id="moreWindow"
                >
                  <p className="p-2 text-xs hover:text-unancor-blue hover:bg-gray-100">
                    Editar
                  </p>
                  <p className="p-2 text-xs hover:text-unancor-blue hover:bg-gray-100">
                    Eliminar
                  </p>
                  <p className="p-2 text-xs hover:text-unancor-blue hover:bg-gray-100">
                    Seleccionar todos
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4" style={{ height: "80%" }}>
            {/* Cabezera */}
            <div className="grid grid-cols-13 text-xs" style={{ height: "7%" }}>
              <div className="flex justify-center items-center opacity-50">
                Seleccionar
              </div>
              <div className="flex justify-center items-center opacity-50">
                Medio
              </div>
              <div className="flex justify-center items-center opacity-50">
                Afinidad
              </div>
              <div className="flex justify-center items-center opacity-50">
                Nivel de Spam
              </div>
              <div className="inline-flex items-center justify-center opacity-50">
                Tr&aacute;fico
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center justify-center opacity-50">
                DR
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center justify-center opacity-50">
                Sistrix
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center opacity-50">
                Tipo
              </div>
              <div className="flex justify-center items-center opacity-50">
                Origen
              </div>
              <div className="inline-flex items-center justify-center opacity-50">
                Fecha
                <svg
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center justify-center opacity-50">
                <svg
                  className="mr-1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M11.0833 2.91667V11.0833H2.91667V2.91667H11.0833ZM11.0833 1.75H2.91667C2.275 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.275 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V2.91667C12.25 2.275 11.725 1.75 11.0833 1.75Z"
                      fill="black"
                    />
                    <path
                      d="M8.16732 9.91732H4.08398V8.75065H8.16732V9.91732ZM9.91732 7.58398H4.08398V6.41732H9.91732V7.58398ZM9.91732 5.25065H4.08398V4.08398H9.91732V5.25065Z"
                      fill="black"
                    />
                  </g>
                </svg>
                Art&iacute;culo
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center justify-center opacity-50">
                <svg
                  className="mr-1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M9.91602 4.08398H7.58268V5.25065H9.91602C10.8785 5.25065 11.666 6.03815 11.666 7.00065C11.666 7.96315 10.8785 8.75065 9.91602 8.75065H7.58268V9.91732H9.91602C11.526 9.91732 12.8327 8.61065 12.8327 7.00065C12.8327 5.39065 11.526 4.08398 9.91602 4.08398ZM6.41602 8.75065H4.08268C3.12018 8.75065 2.33268 7.96315 2.33268 7.00065C2.33268 6.03815 3.12018 5.25065 4.08268 5.25065H6.41602V4.08398H4.08268C2.47268 4.08398 1.16602 5.39065 1.16602 7.00065C1.16602 8.61065 2.47268 9.91732 4.08268 9.91732H6.41602V8.75065ZM4.66602 6.41732H9.33268V7.58398H4.66602V6.41732Z"
                      fill="black"
                    />
                  </g>
                </svg>
                Enlace
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center opacity-50">
                Eliminar
              </div>
              {/* Fila de ejemplo del cuerpo para ajustar los width de la cabezera a las columnnas del cuerpo */}
              <div className="flex justify-center invisible h-0">
                <input type="checkbox" />
              </div>
              <div className="inline-flex justify-center items-center invisible h-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4993 6.41732V7.58398H12.8327V6.41732H10.4993ZM9.33268 10.2732C9.89268 10.6873 10.6219 11.2357 11.1994 11.6673C11.4327 11.3581 11.666 11.0431 11.8993 10.734C11.3218 10.3023 10.5927 9.75398 10.0327 9.33398C9.79935 9.64898 9.56602 9.96398 9.33268 10.2732ZM11.8993 3.26732C11.666 2.95815 11.4327 2.64315 11.1994 2.33398C10.6219 2.76565 9.89268 3.31398 9.33268 3.73398C9.56602 4.04315 9.79935 4.35815 10.0327 4.66732C10.5927 4.24732 11.3218 3.70482 11.8993 3.26732ZM2.33268 5.25065C1.69102 5.25065 1.16602 5.77565 1.16602 6.41732V7.58398C1.16602 8.22565 1.69102 8.75065 2.33268 8.75065H2.91602V11.084H4.08268V8.75065H4.66602L7.58268 10.5007V3.50065L4.66602 5.25065H2.33268ZM9.04102 7.00065C9.04102 6.22482 8.70268 5.52482 8.16602 5.04648V8.94898C8.70268 8.47648 9.04102 7.77648 9.04102 7.00065Z"
                    fill="#2D72C9"
                  />
                </svg>
                <span className="font-bold text-xs text-unancor-blue">
                  enconosublime.com
                </span>
                <svg
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
              <div className="flex items-center justify-center invisible h-0">
                <svg
                  className="mx-auto"
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
              <div className="flex items-center justify-center invisible h-0">
                <svg
                  className="mx-auto"
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
              </div>
              <div className="flex items-center justify-center invisible h-0">
                84501
              </div>
              <div className="flex items-center justify-center invisible h-0">
                6
              </div>
              <div className="flex items-center justify-center invisible h-0">
                2.2370
              </div>
              <div className="flex items-center justify-center invisible h-0">
                Blog
              </div>
              <div className="flex items-center justify-center invisible h-0">
                inicial
              </div>
              <div className="flex items-center justify-center invisible h-0">
                19/03/2021
              </div>
              <div className="flex items-center justify-center invisible h-0">
                <button className="bg-unancor-blue rounded-sm w-full text-white font-semibold">
                  12.000 &euro;
                </button>
              </div>
              <div className="flex items-center justify-center invisible h-0">
                <button className="bg-unancor-orange rounded-sm w-full text-white font-semibold">
                  255 &euro;
                </button>
              </div>
              <div className="flex items-center justify-center invisible h-0">
                <svg
                  className="mx-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
            </div>
            {/* Cuerpo de la tabla */}
            <div
              className="grid grid-cols-13 text-xs overflow-scroll"
              style={{ height: "84%" }}
            >
              {/* Cabezera de ejemplo para ajustar los width de las columnas del cuerpo */}
              <div className="flex justify-center items-center opacity-50 invisible h-0">
                Seleccionar
              </div>
              <div className="flex justify-center items-center opacity-50 invisible h-0">
                Medio
              </div>
              <div className="flex justify-center items-center opacity-50 invisible h-0">
                Afinidad
              </div>
              <div className="flex justify-center items-center opacity-50 invisible h-0">
                Nivel de Spam
              </div>
              <div className="inline-flex items-center justify-center opacity-50 invisible h-0">
                Tr&aacute;fico
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center justify-center opacity-50 invisible h-0">
                DR
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center justify-center opacity-50 invisible h-0">
                Sistrix
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center opacity-50 invisible h-0">
                Tipo
              </div>
              <div className="flex justify-center items-center opacity-50 invisible h-0">
                Origen
              </div>
              <div className="inline-flex items-center justify-center opacity-50 invisible h-0">
                Fecha
                <svg
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center justify-center opacity-50 invisible h-0">
                <svg
                  className="mr-1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M11.0833 2.91667V11.0833H2.91667V2.91667H11.0833ZM11.0833 1.75H2.91667C2.275 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.275 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V2.91667C12.25 2.275 11.725 1.75 11.0833 1.75Z"
                      fill="black"
                    />
                    <path
                      d="M8.16732 9.91732H4.08398V8.75065H8.16732V9.91732ZM9.91732 7.58398H4.08398V6.41732H9.91732V7.58398ZM9.91732 5.25065H4.08398V4.08398H9.91732V5.25065Z"
                      fill="black"
                    />
                  </g>
                </svg>
                Art&iacute;culo
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center justify-center opacity-50 invisible h-0">
                <svg
                  className="mr-1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M9.91602 4.08398H7.58268V5.25065H9.91602C10.8785 5.25065 11.666 6.03815 11.666 7.00065C11.666 7.96315 10.8785 8.75065 9.91602 8.75065H7.58268V9.91732H9.91602C11.526 9.91732 12.8327 8.61065 12.8327 7.00065C12.8327 5.39065 11.526 4.08398 9.91602 4.08398ZM6.41602 8.75065H4.08268C3.12018 8.75065 2.33268 7.96315 2.33268 7.00065C2.33268 6.03815 3.12018 5.25065 4.08268 5.25065H6.41602V4.08398H4.08268C2.47268 4.08398 1.16602 5.39065 1.16602 7.00065C1.16602 8.61065 2.47268 9.91732 4.08268 9.91732H6.41602V8.75065ZM4.66602 6.41732H9.33268V7.58398H4.66602V6.41732Z"
                      fill="black"
                    />
                  </g>
                </svg>
                Enlace
                <svg
                  className="ml-1"
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6775 19.0115L7 21.6832L4.3225 19.0115L3.5 19.834L7 23.334L10.5 19.834L9.6775 19.0115Z"
                    fill="black"
                  />
                  <path
                    d="M4.3225 8.98852L7 6.31685L9.6775 8.98852L10.5 8.16602L7 4.66602L3.5 8.16602L4.3225 8.98852Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center opacity-50 invisible h-4">
                Eliminar
              </div>

              {/* Template usada para generar las filas de la tabla */}
              {[
                1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
                1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
              ].map((item, index) => (
                <>
                  <div className="flex justify-center">
                    <input type="checkbox" />
                  </div>
                  <div className="inline-flex justify-center items-center relative">
                    <div className="left-8 w-40 text-ss text-unancor-blue text-center shadow-md bg-white p-1 hidden">
                      Marcado como publicidad
                    </div>

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4993 6.41732V7.58398H12.8327V6.41732H10.4993ZM9.33268 10.2732C9.89268 10.6873 10.6219 11.2357 11.1994 11.6673C11.4327 11.3581 11.666 11.0431 11.8993 10.734C11.3218 10.3023 10.5927 9.75398 10.0327 9.33398C9.79935 9.64898 9.56602 9.96398 9.33268 10.2732ZM11.8993 3.26732C11.666 2.95815 11.4327 2.64315 11.1994 2.33398C10.6219 2.76565 9.89268 3.31398 9.33268 3.73398C9.56602 4.04315 9.79935 4.35815 10.0327 4.66732C10.5927 4.24732 11.3218 3.70482 11.8993 3.26732ZM2.33268 5.25065C1.69102 5.25065 1.16602 5.77565 1.16602 6.41732V7.58398C1.16602 8.22565 1.69102 8.75065 2.33268 8.75065H2.91602V11.084H4.08268V8.75065H4.66602L7.58268 10.5007V3.50065L4.66602 5.25065H2.33268ZM9.04102 7.00065C9.04102 6.22482 8.70268 5.52482 8.16602 5.04648V8.94898C8.70268 8.47648 9.04102 7.77648 9.04102 7.00065Z"
                        fill="#2D72C9"
                      />
                    </svg>
                    <span className="font-bold text-xs text-unancor-blue">
                      enconosublime.com
                    </span>
                    <svg
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
                  <div
                    className="flex items-center justify-center relative"
                  >
                    <svg
                      className="mx-auto"
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

                    <div className="bg-white shadow-md w-96 p-3 absolute z-10 left-16 hidden">
                      <div className="my-auto mx-auto">
                        <div className="bg-green-100 rounded-full px-3 py-6">
                          <svg
                            className="mx-auto"
                            width="29"
                            height="8"
                            viewBox="0 0 29 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.0761719"
                              width="8"
                              height="8"
                              rx="1"
                              fill="#81C784"
                            />
                            <rect
                              x="10.0762"
                              width="8"
                              height="8"
                              rx="1"
                              fill="#66BB6A"
                            />
                            <rect
                              x="20.0762"
                              width="8"
                              height="8"
                              rx="1"
                              fill="#4CAF50"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-col ml-4">
                        <h1 className="text-lg font-bold text-green-600 mb-1">
                          Nivel máximo de Afinidad
                        </h1>
                        <p className="text-xs">
                          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                          <br />
                          elit. Pellentesque ac libero at ipsum sagittis <br />
                          bibendum. In hac habitasse platea dictumst.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center relative cursor-pointer"
                  >
                    <svg
                      className="mx-auto"
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
                    <div className=" left-20 w-72 hidden bg-white p-3 shadow-md absolute">
                      <div className="my-auto p-2 bg-unancor-orange bg-opacity-10 rounded-full">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.875 3.125L28.75 15L21.875 26.875H8.125L1.25 15L8.125 3.125H21.875ZM13.75 18.75V21.25H16.25V18.75H13.75ZM13.75 8.75V16.25H16.25V8.75H13.75Z"
                            fill="#F44335"
                          />
                        </svg>
                      </div>
                      <div className="w-full ml-4 mr-3">
                        <span className="font-bold text-lg text-unancor-orange">
                          Niveles de Spam
                        </span>
                        <ul
                          className="w-full ml-5"
                          style={{ listStyle: "disc" }}
                        >
                          <li className="text-sm">DR igual/inferior a 5</li>
                          <li className="text-sm">
                            Radio TF/CF inferior al 0.4
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">84501</div>
                  <div className="flex items-center justify-center">6</div>
                  <div className="flex items-center justify-center">2.2370</div>
                  <div className="flex items-center justify-center">Blog</div>
                  <div className="flex items-center justify-center">
                    inicial
                  </div>
                  <div className="flex items-center justify-center">
                    19/03/2021
                  </div>
                  <div className="flex items-center justify-center p-2 relative">
                    <div className="w-96 bg-white hidden absolute shadow-md p-4 right-28">
                      <div className="bg-unancor-blue bg-opacity-20 rounded-full w-12 h-12 my-auto flex m-1 mr-4">
                        <svg
                          className="my-auto mx-auto"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.75 6.25V23.75H6.25V6.25H23.75ZM23.75 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75Z"
                            fill="#2D72C9"
                          />
                          <path
                            d="M17.5 21.25H8.75V18.75H17.5V21.25ZM21.25 16.25H8.75V13.75H21.25V16.25ZM21.25 11.25H8.75V8.75H21.25V11.25Z"
                            fill="#2D72C9"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="font-bold text-lg text-unancor-blue">
                          Compra un Art&iacute;culo
                        </h1>
                        <p className="text-unancor-blue text-xs">
                          Compra un artículo para tu sitio web con un solo{" "}
                          <br />
                          click, tú escoges la tématica y nosotros hacemos el{" "}
                          <br />
                          resto así de fácil y rápido.
                        </p>
                      </div>
                    </div>
                    <button className="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                      12.000 &euro;
                    </button>
                  </div>
                  <div className="flex items-center justify-center p-2">
                    <button className="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                      255 &euro;
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      className="mx-auto"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </>
              ))}
            </div>
            {/* Pagination */}
            <div className="inline-flex w-full mt-4" style={{ height: "9%" }}>
              <div className="w-1/3">
                <div className="inline-flex border p-3 py-1">
                  <span className="text-xs font-medium mr-3">
                    20 medios por p&aacute;gina
                  </span>
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
              </div>
              <div className="w-1/3 flex">
                <div className="mx-auto inline-flex space-x-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                      fill="#2D72C9"
                    />
                  </svg>
                  <span className="opacity-30 font-medium">1</span>
                  <span className="opacity-30 font-medium">2</span>
                  <span className="text-unancor-blue font-medium">
                    3
                    <hr className="border-unancor-blue border-1" />
                  </span>
                  <span className="opacity-30 font-medium">...</span>
                  <span className="opacity-30 font-medium">7</span>
                  <span className="opacity-30 font-medium">8</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                      fill="#2D72C9"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-1/3 flex justify-end">
                <span className="text-xs font-semibold opacity-50">
                  10/12524 en total
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;