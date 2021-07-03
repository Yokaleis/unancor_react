import { Link } from "react-router-dom";

function RegistroProyecto() {
  return (
    <div class="bg-white h-full">
      <div class="mt-10 mx-24">
        <h1 class="text-4xl font-bold mt-24">
          Nos <span class="text-unancor-orange">adaptamos</span> a tu negocio
        </h1>
        <p class="mt-1 text-sm">
          Completa los datos de tu negocio para adaptar todos los m&oacute; de
          <span class="text-unancor-orange">Unancor</span>. Toda la
          informaci&oacute;n suministrada es confidencial, solo podr&aacute;s
          registrar un proyecto por dominio.
          <br />
          Una vez registrado tendr&aacute;s control de tus enlaces, rankings y
          adem&aacute;s te proporcionamos sugerencias relacionadas a tu dominio.
        </p>
        <form class="mt-7 space-y-5 flex flex-col">
          <input
            class="appearance-none border bg-unancor-bginput rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
            type="text"
            placeholder="Nombre del proyecto"
          />
          <input
            class="appearance-none border bg-unancor-bginput rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
            type="text"
            placeholder="URL del proyecto"
          />
          <div class="relative">
            <input
              type="checkbox"
              id="sortboxLanguage"
              class="hidden absolute"
            />
            <label
              for="sortboxLanguage"
              class="bg-unancor-bginput flex items-center space-x-1 cursor-pointer h-11 appearance-none border rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
            >
              Espa&ntilde;ol
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </label>
            <div
              id="sortboxmenuLanguage"
              class="absolute mt-1 w-full shadow rounded hidden bg-white transition delay-75 ease-in-out z-10"
            >
              <ul class="text-right text-gray-900 flex flex-col content-start overflow-y-scroll h-48">
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Ingles
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Frances
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    class="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Italiano
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Ruso
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    class="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Japones
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Mandarin
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Portugues
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Aleman
                </li>
              </ul>
            </div>
          </div>
          <div class="relative">
            <input
              type="checkbox"
              id="sortboxTematica"
              class="absolute hidden"
            />
            <label
              for="sortboxTematica"
              class="bg-unancor-bginput flex items-center space-x-1 cursor-pointer h-11 appearance-none border rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
            >
              Arte, Cultura, idiomas, Educaci&oacute;n, Medios de
              comunicaci&oacute;n, Ciencia
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </label>
            <div
              id="sortboxmenuTematica"
              class="absolute mt-1 w-full shadow rounded hidden bg-white transition delay-75 ease-in-out z-10"
            >
              <ul class="text-right text-gray-900 flex flex-col content-start overflow-y-scroll h-24">
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Arte, Cultura
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Ciencia
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    class="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Econom&iacute;a y Finanzas
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Educaci&oacute;n
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    class="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Geopol&iacute;tica
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Idiomas
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Libros y Comics
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    class="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Medios de comunicaci&oacute;n
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    class="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Relaciones empresariales
                </li>
                <li class="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    class="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Tecnolog&iacute;a
                </li>
              </ul>
            </div>
          </div>
        </form>
        <div class="mt-10">
          <button class="text-sm bg-unancor-blue hover:bg-white hover:text-unancor-blue text-white font-bold py-3 px-4 border-2 border-unancor-blue rounded w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent">
            <Link className="hover:no-underline" to="/SeleccionarKeywords"> Continuar</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistroProyecto;
