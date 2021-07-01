function HomeComprarArticulo() {
  return (
    <div class="bg-gray-200 h-screen relative">
      <div class="w-full h-16 bg-white absolute z-20 flex">
        <div class="inline-flex w-full">
          <div class="w-1/2 inline-flex items-center">
            <img
              class="w-40 h-5 mt-2 ml-10"
              src="/assets/LOGO/image18@2x.svg"
            />
            <h1 class="font-semibold text-2xl text-unancor-orange ml-12">
              miudev.com
            </h1>
            <svg
              class="fill-current h-4 w-4 mt-2 ml-4 mr-3"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
          <div class="w-1/2 inline-flex items-center justify-end pr-6 space-x-3">
            <h1 class="font-bold text-xl leading-7">
              Billetera: 35.021 &euro;
            </h1>
            <h1 class="font-bold text-xl leading-7">Cr&eacute;dito: 3.502</h1>
            <div class="relative h-10 w-10">
              <img
                class="absolute top-0 left-4 h-5 w-4 z-20"
                src="/assets/icons-dashboard-anunciante/Ellipse230.svg"
              />
              <img
                class="absolute top-2 left-2 z-10"
                src="/assets/icons-dashboard-anunciante/Vector.svg"
              />
              <img
                class="w-2 h-2 absolute top-1 left-5 z-30"
                src="/assets/icons-dashboard-anunciante/5.svg"
              />
            </div>
            <img
              class="h-5 w-5"
              src="/assets/icons-dashboard-anunciante/campana.svg"
            />
            <img
              class="h-10 w-10"
              src="/assets/icons-dashboard-anunciante/Ellipse282.svg"
            />
          </div>
        </div>
      </div>
      <div class="bg-unancor-blue w-20 flex flex-col h-full absolute z-10">
        <div class="flex flex-col mt-5 space-y-5">
          <div class="mt-20 mx-auto">
            <a href="/dashboard/anunciante/principal.html">
              <svg
                class="mx-auto"
                width="36"
                height="40"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2652 7H1.62983C1.31492 7 1 6.7 1 6.4V1.6C1 1.3 1.31492 1 1.62983 1H19.3702C19.6851 1 20 1.3 20 1.6V6.5C19.895 6.7 19.5801 7 19.2652 7Z"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M8.30864 19H1.59259C1.2963 19 1 18.7 1 18.4V10.6C1 10.3 1.2963 10 1.59259 10H8.40741C8.7037 10 9 10.3 9 10.6V18.5C8.90123 18.7 8.60494 19 8.30864 19Z"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M19.4074 19H12.5926C12.2963 19 12 18.7 12 18.4V10.6C12 10.3 12.2963 10 12.5926 10H19.4074C19.7037 10 20 10.3 20 10.6V18.5C20 18.7 19.7037 19 19.4074 19Z"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
              </svg>
              <p class="text-xs mx-auto text-white">Dashboard</p>
            </a>
          </div>
          <div class="text-center bg-gray-200 py-2">
            <a href="/dashboard/anunciante/affinity/">
              <svg
                class="mx-auto"
                width="36"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0816 10.7804C13.0004 10.7804 13.7452 10.0356 13.7452 9.11676C13.7452 8.19796 13.0004 7.45312 12.0816 7.45312C11.1628 7.45312 10.418 8.19796 10.418 9.11676C10.418 10.0356 11.1628 10.7804 12.0816 10.7804Z"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M15.4822 15.0621L15.0731 13.053C14.9095 12.2439 14.1913 11.6621 13.3731 11.6621H13.1458C12.864 11.9076 12.4913 12.0712 12.0822 12.0712C11.6731 12.0712 11.3095 11.9167 11.0186 11.6621H10.6276C9.80038 11.6621 9.09128 12.2439 8.92765 13.053L8.51856 15.0621C8.45492 15.3621 8.68219 15.6348 8.98219 15.6348H15.0095C15.3186 15.6348 15.5458 15.3621 15.4822 15.0621Z"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M3.81836 10.2722V4.77219C3.81836 4.37219 4.14563 4.04492 4.54563 4.04492H9.97291"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M9.91836 19.5011H4.54563C4.14563 19.5011 3.81836 19.1738 3.81836 18.7738V13.9102"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M20.1813 13.9102V18.7829C20.1813 19.1829 19.854 19.5102 19.454 19.5102H13.5449"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M13.5996 4.04492H19.4542C19.8542 4.04492 20.1814 4.37219 20.1814 4.77219V10.2722"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M13.1453 5.63636H10.8544C10.4816 5.63636 10.1816 5.33636 10.1816 4.96364V2.67273C10.1816 2.3 10.4816 2 10.8544 2H13.1453C13.518 2 13.818 2.3 13.818 2.67273V4.96364C13.818 5.33636 13.518 5.63636 13.1453 5.63636Z"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M13.1453 21.0914H10.8544C10.4816 21.0914 10.1816 20.7914 10.1816 20.4187V18.1278C10.1816 17.7551 10.4816 17.4551 10.8544 17.4551H13.1453C13.518 17.4551 13.818 17.7551 13.818 18.1278V20.4187C13.818 20.7914 13.518 21.0914 13.1453 21.0914Z"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M21.3269 13.5914H19.036C18.6633 13.5914 18.3633 13.2914 18.3633 12.9187V10.6278C18.3633 10.2551 18.6633 9.95508 19.036 9.95508H21.3269C21.6996 9.95508 21.9996 10.2551 21.9996 10.6278V12.9187C21.9996 13.2914 21.6996 13.5914 21.3269 13.5914Z"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M4.96364 13.5914H2.67273C2.3 13.5914 2 13.2914 2 12.9187V10.6278C2 10.2551 2.3 9.95508 2.67273 9.95508H4.96364C5.33636 9.95508 5.63636 10.2551 5.63636 10.6278V12.9187C5.63636 13.2914 5.33636 13.5914 4.96364 13.5914Z"
                  stroke="#2D72C9"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                />
              </svg>
              <p class="text-xs mx-auto text-unancor-blue">Affinity</p>
            </a>
          </div>
          <div class="text-center">
            <img
              class="w-9 h-10 mx-auto"
              src="/assets/icons-dashboard-anunciante/SVG-w/projectmanager-24px2@2x.svg"
            />
            <p class="text-xs mx-auto text-white">Project Manager</p>
          </div>
          <div class="text-center">
            <img
              class="w-9 h-10 mx-auto"
              src="/assets/icons-dashboard-anunciante/SVG-w/marcket-24px3@2x.svg"
            />
            <p class="text-xs mx-auto text-white">Marketplace</p>
          </div>
          <div class="text-center">
            <img
              class="w-9 h-10 mx-auto"
              src="/assets/icons-dashboard-anunciante/SVG-w/booster-24px4@2x.svg"
            />
            <p class="text-xs mx-auto text-white">Booster</p>
          </div>
          <div class="text-center">
            <img
              class="w-9 h-10 mx-auto"
              src="/assets/icons-dashboard-anunciante/SVG-w/tracker-24px@2x.svg"
            />
            <p class="text-xs mx-auto text-white">Tracker</p>
          </div>
          <div class="text-center">
            <img
              class="w-9 h-10 mx-auto"
              src="/assets/icons-dashboard-anunciante/SVG-w/control-24px6@2x.svg"
            />
            <p class="text-xs mx-auto text-white">Control de enlaces</p>
          </div>
          <div class="text-center">
            <img
              class="w-9 h-10 mx-auto"
              src="/assets/icons-dashboard-anunciante/SVG-w/control-24px6@2x.svg"
            />
            <p class="text-xs mx-auto text-white">Inversi&oacute;n</p>
          </div>
        </div>
      </div>
      <div class="absolute pt-20 pl-24 pb-4 pr-4 h-full w-full">
        <div class="bg-white h-full flex flex-col p-4">
          <div class="inline-flex justify-end py-2 space-x-4">
            <button class="px-8 py-2 bg-gray-100 font-sans text-sm font-bold">
              Propuesta
            </button>
            <button class="inline-flex p-2 bg-gray-100 opacity-30 font-sans text-sm font-bold">
              A&ntilde;adir componente
              <svg
                class="mt-1 ml-2"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="black" />
              </svg>
            </button>
            <svg
              class="my-auto"
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
          <div class="inline-flex items-start space-x-4">
            <h1 class="text-sm font-medium">
              Propuestos
              <hr class="border-unancor-blue border-4 rounded-xl mt-2" />
            </h1>
            <h1 class="text-sm font-medium opacity-30">Analizados</h1>
            <h1 class="text-sm font-medium opacity-30">Descartados</h1>
          </div>
          <div class="inline-flex mt-5">
            <div class="inline-flex w-1/2">
              <div class="border inline-flex space-x-2 pl-4 pr-6">
                <svg
                  class="my-auto"
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
                <span class="my-auto text-xs font-medium">Buscar Medio</span>
              </div>
            </div>
            <div class="inline-flex w-1/2 justify-end space-x-4">
              <div class="border inline-flex px-4 py-2">
                <span class="text-xs mr-5 my-auto">Todos</span>
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
              <div class="inline-flex border px-4 py-2">
                <span class="text-xs">Nofollow</span>
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
              <div class="inline-flex border px-4 py-2 space-x-2">
                <span class="text-xs">Afinidad:</span>
                <svg
                  class="my-auto"
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
              </div>
              <div class="inline-flex border px-4 py-2 space-x-2">
                <span class="text-xs">Spam</span>
                <svg
                  class="my-auto"
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
              <div class="inline-flex border px-2 py-2">
                <span class="opacity-50 text-xs">Filtros</span>
                <svg
                  class="ml-2"
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
              <div class="bg-unancor-blue flex px-2 rounded-sm">
                <svg
                  class="my-auto"
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
              <div class="bg-unancor-blue flex px-2 rounded-sm">
                <svg
                  class="my-auto"
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
          <div class="py-4 overflow-y-auto">
            <div class="grid grid-cols-13 text-xs">
              <div class="flex justify-center items-center py-4 opacity-50">
                Seleccionar
              </div>
              <div class="flex justify-center items-center opacity-50">
                Medio
              </div>
              <div class="flex justify-center items-center opacity-50">
                Afinidad
              </div>
              <div class="flex justify-center items-center opacity-50">
                Nivel de Spam
              </div>
              <div class="inline-flex items-center justify-center opacity-50">
                Tr&aacute;fico
                <svg
                  class="ml-1"
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
              <div class="inline-flex items-center justify-center opacity-50">
                DR
                <svg
                  class="ml-1"
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
              <div class="inline-flex items-center justify-center opacity-50">
                Sistrix
                <svg
                  class="ml-1"
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
              <div class="flex justify-center items-center opacity-50">
                Tipo
              </div>
              <div class="flex justify-center items-center opacity-50">
                Origen
              </div>
              <div class="inline-flex items-center justify-center opacity-50">
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
              <div class="inline-flex items-center justify-center opacity-50">
                <svg
                  class="mr-1"
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
                  class="ml-1"
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
              <div class="inline-flex items-center justify-center opacity-50">
                <svg
                  class="mr-1"
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
                  class="ml-1"
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
              <div class="flex justify-center items-center opacity-50">
                Eliminar
              </div>
              <div class="flex justify-center">
                <input type="checkbox" />
              </div>
              <div class="inline-flex justify-center items-center">
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
                <span class="font-bold text-xs text-unancor-blue">
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">84501</div>
              <div class="flex items-center justify-center">6</div>
              <div class="flex items-center justify-center">2.2370</div>
              <div class="flex items-center justify-center">Blog</div>
              <div class="flex items-center justify-center">inicial</div>
              <div class="flex items-center justify-center">19/03/2021</div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                  12.000 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                  255 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex justify-center">
                <input type="checkbox" />
              </div>
              <div class="inline-flex justify-center items-center">
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
                <span class="font-bold text-xs text-unancor-blue">
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">84501</div>
              <div class="flex items-center justify-center">6</div>
              <div class="flex items-center justify-center">2.2370</div>
              <div class="flex items-center justify-center">Blog</div>
              <div class="flex items-center justify-center">inicial</div>
              <div class="flex items-center justify-center">19/03/2021</div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                  12.000 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                  255 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex justify-center">
                <input type="checkbox" />
              </div>
              <div class="inline-flex justify-center items-center">
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
                <span class="font-bold text-xs text-unancor-blue">
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">84501</div>
              <div class="flex items-center justify-center">6</div>
              <div class="flex items-center justify-center">2.2370</div>
              <div class="flex items-center justify-center">Blog</div>
              <div class="flex items-center justify-center">inicial</div>
              <div class="flex items-center justify-center">19/03/2021</div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                  12.000 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                  255 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex justify-center">
                <input type="checkbox" />
              </div>
              <div class="inline-flex justify-center items-center">
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
                <span class="font-bold text-xs text-unancor-blue">
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">84501</div>
              <div class="flex items-center justify-center">6</div>
              <div class="flex items-center justify-center">2.2370</div>
              <div class="flex items-center justify-center">Blog</div>
              <div class="flex items-center justify-center">inicial</div>
              <div class="flex items-center justify-center">19/03/2021</div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                  12.000 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                  255 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex justify-center">
                <input type="checkbox" />
              </div>
              <div class="inline-flex justify-center items-center">
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
                <span class="font-bold text-xs text-unancor-blue">
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">84501</div>
              <div class="flex items-center justify-center">6</div>
              <div class="flex items-center justify-center">2.2370</div>
              <div class="flex items-center justify-center">Blog</div>
              <div class="flex items-center justify-center">inicial</div>
              <div class="flex items-center justify-center">19/03/2021</div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                  12.000 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                  255 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex justify-center">
                <input type="checkbox" />
              </div>
              <div class="inline-flex justify-center items-center">
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
                <span class="font-bold text-xs text-unancor-blue">
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">84501</div>
              <div class="flex items-center justify-center">6</div>
              <div class="flex items-center justify-center">2.2370</div>
              <div class="flex items-center justify-center">Blog</div>
              <div class="flex items-center justify-center">inicial</div>
              <div class="flex items-center justify-center">19/03/2021</div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                  12.000 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                  255 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex justify-center">
                <input type="checkbox" />
              </div>
              <div class="inline-flex justify-center items-center">
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
                <span class="font-bold text-xs text-unancor-blue">
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
              <div class="flex items-center justify-center">84501</div>
              <div class="flex items-center justify-center">6</div>
              <div class="flex items-center justify-center">2.2370</div>
              <div class="flex items-center justify-center">Blog</div>
              <div class="flex items-center justify-center">inicial</div>
              <div class="flex items-center justify-center">19/03/2021</div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-blue rounded-sm w-full py-1 text-white font-semibold">
                  12.000 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center p-2">
                <button class="bg-unancor-orange rounded-sm w-full py-1 text-white font-semibold">
                  255 &euro;
                </button>
              </div>
              <div class="flex items-center justify-center">
                <svg
                  class="mx-auto"
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
            <div class="inline-flex w-full mt-4">
              <div class="w-1/3">
                <div class="inline-flex border p-3">
                  <span class="text-xs font-medium mr-3">
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
              <div class="w-1/3 flex">
                <div class="mx-auto inline-flex space-x-4">
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
                  <span class="opacity-30 font-medium">1</span>
                  <span class="opacity-30 font-medium">2</span>
                  <span class="text-unancor-blue font-medium">
                    3
                    <hr class="border-unancor-blue border-1" />
                  </span>
                  <span class="opacity-30 font-medium">...</span>
                  <span class="opacity-30 font-medium">7</span>
                  <span class="opacity-30 font-medium">8</span>
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
              <div class="w-1/3 flex justify-end">
                <span class="text-xs font-semibold opacity-50">
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
