import { Link } from "react-router-dom";
import success from "../../assets/icon_success@2x.svg";

function Felicidades({ clientType }) {
  return (
    <div class="bg-white h-full flex flex-col text-center">
      <div class="mt-36 mx-24">
        <img class="mx-auto" src={success} alt="success" />
        <h1 class="mt-14">Gracias, tu cuenta ha sido creada y configurada</h1>
        <button
          class="text-sm bg-unancor-blue hover:bg-white hover:text-unancor-blue text-white font-bold py-3 px-4 border-2 border-unancor-blue rounded w-full mt-10 
            focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
        >
          <Link
            to={clientType === "anunciante" ? "/HomeAnunciante" : "/HomeEditor"}
          >
            Ir al Dashboard
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Felicidades;
