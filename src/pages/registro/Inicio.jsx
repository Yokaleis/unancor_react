import { Link } from "react-router-dom";
import logo from "../../assets/LOGO/image18@2x.svg";
import "./Inicio.css";

function Inicio() {
  return (
    <>
      <div className="bg-unancor-blue flex flex-col items-end justify-center">
        <div className="flex flex-col justify-center space-y-8 mx-14 -mt-20">
          <h1 className="text-white font-medium text-5xl">
            Bienvenido a <span className="text-unancor-orange">Unancor</span>
          </h1>
          <label className="flex justify-start items-center">
            <div className="bg-white border-2 rounded border-gray-400 mt-0 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-unancor-blue">
              <input
                type="checkbox"
                className="w-8 h-8 opacity-0 absolute"
                checked
              />
              <svg
                className="fill-current hidden w-4 h-4 text-unancor-orange pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
            <div className="select-none text-white text-xl mt-2">
              Obten visibilidad en los mejores medios digitales locales e
              internacionales
            </div>
          </label>
          <label className="flex justify-start items-center">
            <div className="bg-white border-2 rounded border-gray-400 mt-0 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-unancor-blue">
              <input
                type="checkbox"
                className="w-8 h-8 opacity-0 absolute"
                checked
              />
              <svg
                className="fill-current hidden w-4 h-4 text-unancor-orange pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
            <div className="select-none text-white text-xl mt-2">
              Adquiere contenido de calidad para tu sitio web, redactado por
              profesionales
            </div>
          </label>
          <label className="flex justify-start items-center">
            <div className="bg-white border-2 rounded border-gray-400 mt-0 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-unancor-blue">
              <input
                type="checkbox"
                className="w-8 h-8 opacity-0 absolute"
                checked
              />
              <svg
                className="fill-current hidden w-4 h-4 text-unancor-orange pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
            <div className="select-none text-white text-xl mt-2">
              Aumenta el trafico de tu sitio web de forma organica mediante
              enlaces con buenas metricas SEO
            </div>
          </label>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex mt-10 ml-14 justify-between">
          <img className="w-52 h-8" src={logo} alt="Uncancor" />
          <h2 className="mr-16 text-unancor-blue">Contacto</h2>
        </div>
        <div className="text-justify mt-24 mx-28">
          <h1 className="text-4xl font-bold">
            Registra tu negocio{" "}
            <span className="text-unancor-orange">online</span>
          </h1>
          <h4 className="mt-2 mb-8 text-sm text">
            Llena el formulario y comienza ya a invertir en tu negocio para
            mejorar su crecimiento en internet.
          </h4>
          <form className="flex flex-col space-y-5">
            <input
              className="appearance-none border bg-unancor-bginput rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
              type="text"
              placeholder="Email"
            />
            <input
              className="appearance-none border bg-unancor-bginput rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
              type="text"
              placeholder="Contrase&ntilde;a"
            />
            <input
              className="appearance-none border bg-unancor-bginput rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
              type="text"
              placeholder="Repetir contrase&ntilde;a"
            />
            <label className="flex flex-row text-gray-500 text-xl">
              <span className="mr-2 material-icons-outlined">
                check_box_outline_blank
              </span>
              <p className="mr-2 text-sm leading-tight">
                Acepta los
                <span className="text-unancor-blue text-sm font-medium">
                  Terminos y condiciones
                </span>
              </p>
            </label>
            <Link
              className="bg-unancor-blue text-white text-center font-bold py-3 px-4 rounded text-sm hover:no-underline hover:text-white"
              to="/VerificaTuCuenta"
            >
              Registrar mi negocio
            </Link>
            <Link className="py-3 font-medium text-center text-sm hover:bg-gray hover:text-unancor-orange  cursor-pointer">
              Tengo una cuenta
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Inicio;
