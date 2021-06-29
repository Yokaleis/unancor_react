import CheckBoxRegistro from "../../components/registro/CheckBoxRegistro";
import success from "../../assets/icon_success@2x.svg"
import { Link } from "react-router-dom";

function CuentaVerificada({ clientType }) {
  return (
    <div className="grid grid-cols-2 h-full">
      <CheckBoxRegistro pageCount={0} clientType={clientType}/>
      <div className="bg-white h-full">
        <div className="px-24">
          <div className="flex justify-center mt-40 m-10">
            <img src={success} alt="check" />
          </div>

          <h2 className="text-sm mt-1 m-10 text-center">
            Deberas verificar tu correo para continuar con tu registro.
          </h2>

          <Link to="/TipoRegistro">
            <button className="text-sm bg-unancor-blue hover:bg-white hover:text-unancor-blue text-white font-bold py-2 px-4 border border-unancor-blue rounded w-full mt-8">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CuentaVerificada;
