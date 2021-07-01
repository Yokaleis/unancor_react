import { Link } from "react-router-dom";
import Inversion from "../../../../../assets/Serps/Inversion.svg";

function CrearAnalisis() {
  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="absolute pt-20 pl-24 pb-4 pr-4 h-full w-full">
        <div className="bg-white h-full flex flex-col p-10">
          <h1 className="text-2xl font-semibold">Cree un nuevo análisis</h1>
          <p className="text-xs">
            Introduce al menos 5 palabras claves para realizar el análisis.
          </p>
          <h6 className="text-lg font-bold mt-10">Keywords</h6>
          <textarea
            className="text-lg bg-gray-100 mt-5 h-full placeholder-black"
            placeholder={
              "cronicas economica\npotencias economicas\nprincipales actividades economicas en\ncomo se clasifican las actividades economicas\npotencias mundiales\nprincipales actividades econoomicas en\ncronicas economicas\npotencias economicas\nprincipales actividades economicas en\ncomo se clasifican las actividades economicas\npotencias mundiales\nprincipales actividades econoomicas en"
            }
          ></textarea>
          <div className="flex flex-grow items-center">
            <Link
              className="mt-10 rounded-md w-44 text-sm font-semibold p-2 text-white bg-unancor-orange text-center"
              to="/HomeSerps/AnalisisEspera"
            >
              Realizar nuevo análisis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearAnalisis;
