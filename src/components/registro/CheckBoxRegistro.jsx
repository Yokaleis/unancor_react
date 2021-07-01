import logo from "../../assets/LOGO/LogoUnancorBlanco.png";
import { useHistory } from "react-router-dom";

function CheckBoxRegistro({ pageCount, clientType }) {
  const history = useHistory()
 
  const stepsAnunciante = [
    "Regístrate y verifica tu cuenta",
    "Elige tu perfil en Unancor",
    "Elige el tipo de cliente que eres",
    "Registra tu proyecto",
    "Keywords que se ajustan a tu proyecto",
    "Felicidades! Bienvenido a Unancor",
  ];

  const strepsEditor = [
    "Regístrate y verifica tu cuenta",
    "Elige tu perfil en Unancor",
    "Crea tu primer medio",
    "Felicidades! Bienvenido a Unancor",
  ];

  const steps = clientType === "anunciante" ? stepsAnunciante : strepsEditor;
  
  return (
    <div className="bg-unancor-blue h-full flex flex-col">
      <div className="w-48 mt-10 ml-10">
        <img src={logo} alt="logo"/>
      </div>
      <div className="ml-32 mt-24 space-y-4 flex flex-col">
        {steps.map((step, index) => (
          <label className="flex justify-start items-start" key={index}>
            <div className={ index <= pageCount ? "bg-unancor-orange border-2 rounded mt-4 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-unancor-blue" : "bg-white border-2 rounded mt-4 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-unancor-blue"}>
              <input
                type="checkbox"
                className="w-8 h-8 opacity-0 absolute"
                checked
                readOnly
              />
              {index <= pageCount ? (
                <svg
                  className="fill-current hidden w-4 h-4 text-white pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              ) : (
                <span className="font-semibold text-lg text-unancor-blue">
                  {index + 1}
                </span>
              )}
            </div>
            <div
              className={
                index > pageCount
                  ? "select-none text-white text-lg mt-4 font-semibold text-opacity-50"
                  : "select-none text-white text-lg mt-4 font-semibold"
              }
            >
              {step}
            </div>
          </label>
        ))}
      </div>
      <div className="mt-32" onClick={() =>  history.goBack()}>
        <label className="flex justify-start items-start ml-16">
          <div className="w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-unancor-blue">
            <span className="material-icons-outlined text-white">arrow_back</span>
            <div className="select-none text-white uppercase text-xs mx-2 font-semibold cursor-pointer">
              Volver
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default CheckBoxRegistro;
