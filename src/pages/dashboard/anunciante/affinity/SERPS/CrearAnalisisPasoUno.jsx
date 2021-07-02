import CrearAnalisisImage from "../../../../../assets/Serps/Inicio.svg"
import { Link } from "react-router-dom";
import TopBarAffinity from "../../../../../components/dashboard/TopBarAffinity";

function HomeSerps() {
  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="absolute pt-20 pl-24 pb-4 pr-4 h-full w-full">
        <div className="bg-white h-full flex flex-col p-4">
          <TopBarAffinity/>
          <h1 className="text-4xl font-semibold text-center mt-10">
            Crea tu primer{" "}
            <span className="text-unancor-orange">an&aacute;lisis</span>
          </h1>
          <div className="inline-flex justify-center items-center mt-20">
            <div className="flex flex-col mr-10">
              <p className="text-lg font-normal w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sem ligula, mollis sed leo vel, scelerisque pretium lectus.
                Suspendisse ullamcorper urna dui, ac tempus nibh venenatis a.
                Integer sit amet commodo purus. In at dolor tincidunt, molestie
                enim id, volutpat erat. Donec mollis at nunc eu rutrum.
              </p>
              <Link
                className="bg-unancor-orange mt-10 font-bold text-2xl mx-auto p-3 text-white w-full text-center"
                to="/HomeSerps/CrearAnalisisPasoDos"
              >
                Crear an&aacute;lisis
              </Link>
            </div>
            <img src={CrearAnalisisImage} alt="inicio"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSerps;