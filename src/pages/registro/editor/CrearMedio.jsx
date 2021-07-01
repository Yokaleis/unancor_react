import { Link } from "react-router-dom";
import "./CrearMedio.css";

function CrearMedio({ clientType }) {
  return (
    <div className="bg-white h-full">
      <div className="mt-10 mx-24">
        <h1 className="text-4xl font-bold mt-24">
          Crea tu primer <span className="text-unancor-orange">medio</span>
        </h1>
        <p className="mt-1 text-sm">
          Completa los datos b&aacute;asicos de tu primer medio en Unancor.
          Posteriormente podr&aacute;s completas la creaci&oacute;n de este
          medio
        </p>
        <form className="mt-7 space-y-5 flex flex-col">
          <input
            className="appearance-none border bg-unancor-bginput rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
            type="text"
            placeholder="Nombre del proyecto"
          />
          <input
            className="appearance-none border bg-unancor-bginput rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
            type="text"
            placeholder="URL del proyecto"
          />

          <div className="relative">
            <input
              type="checkbox"
              id="sortboxLanguage"
              className="hidden absolute"
            />
            <label
              htmlFor="sortboxLanguage"
              className="bg-unancor-bginput flex items-center space-x-1 cursor-pointer h-11 appearance-none border rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
            >
              Espa&ntilde;ol
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </label>
            <div
              id="sortboxmenuLanguage"
              className="absolute mt-1 w-full shadow rounded hidden bg-white transition delay-75 ease-in-out z-10"
            >
              <ul className="text-right text-gray-900 flex flex-col content-start overflow-y-scroll h-48">
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Ingles
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Frances
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    className="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Italiano
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Ruso
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    className="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Japones
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Mandarin
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Portugues
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Aleman
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              id="sortboxTematica"
              className="absolute hidden"
            />
            <label
              htmlFor="sortboxTematica"
              className=" bg-unancor-bginput flex items-center space-x-1 cursor-pointer h-11 appearance-none border rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
            >
              Arte, Cultura, idiomas, Educaci&oacute;n, Medios de
              comunicaci&oacute;n, Ciencia
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </label>
            <div
              id="sortboxmenuTematica"
              className="absolute mt-1 w-full shadow rounded hidden bg-white transition delay-75 ease-in-out z-10"
            >
              <ul className="text-right text-gray-900 flex flex-col content-start overflow-y-scroll h-48">
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Arte, Cultura
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Ciencia
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    className="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Econom&iacute;a y Finanzas
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Educaci&oacute;n
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    className="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Geopol&iacute;tica
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Idiomas
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Libros y Comics
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200 text-unancor-blue">
                  <svg
                    className="mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Medios de comunicaci&oacute;n
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    className="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  Relaciones empresariales
                </li>
                <li className="inline-flex content-start px-3 py-2 hover:bg-gray-200">
                  <svg
                    className="invisible mt-1 mr-2 fill-current w-4 h-4 text-unancor-blue pointer-events-none"
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
        <div className="mt-10">
          <button className="text-sm bg-unancor-blue hover:bg-white hover:text-unancor-blue text-white font-bold py-3 px-4 border-2 border-unancor-blue rounded w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent">
            <Link to="/Felicidades"> Continuar</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrearMedio;
