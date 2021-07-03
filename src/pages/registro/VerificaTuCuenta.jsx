import buzzon from "../../assets/icons-onboarding/icon_buzon_emails@2x.svg";
import { Link } from "react-router-dom";

function VerificaTuCuenta() {
  return (
    <div className="bg-white h-full">
      <div className="px-24">
        <h1 className="mt-24 font-bold text-4xl">
          Verifica tu <span className="text-unancor-orange">cuenta</span>
        </h1>
        <h2 className="text-sm mt-1">
          Deberas verificar tu correo para continuar con tu registro.
        </h2>
        <div className="flex justify-center mt-16">
          <img style={{ with: "185px" }} src={buzzon} alt="buzon" />
        </div>
        <button className="text-sm bg-unancor-blue hover:bg-white hover:text-unancor-blue text-white font-bold py-3 px-4 border border-unancor-blue focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent rounded w-full mt-4">
          <Link className="hover:no-underline" to="/CuentaVerificada">Volver a enviar</Link>
        </button>
        <button className="text-sm font-bold bg-transparent hover:bg-unancor-orange text-unancor-orange hover:text-white py-3 px-4 border border-unancor-orange focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent rounded w-full mt-4">
          <span>Contactar a soporte</span>
        </button>
      </div>
    </div>
  );
}

export default VerificaTuCuenta;
