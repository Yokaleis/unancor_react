import { Link } from "react-router-dom";

function SeleccionarKeywords() {
  return (
    <div class="bg-white h-full">
      <div class="mt-10 mx-24">
        <h1 class="text-4xl font-bold mt-24">
          Selecciona tus <span class="text-unancor-orange">Keywords</span>
        </h1>
        <p class="text-sm mt-1">
          A continuaci&oacute;n selecciona las keywrds con las que deseas que tu
          sitio web sea{" "}
          <span class="text-unancor-orange font-bold">posicionado</span>
        </p>
        <h6 class="mt-8 font-bold">Keywords</h6>
        <p class="mt-1 text-xs">
          A&ntilde;ade las Keywords que posicionar&aacute;n tu proyecto
          (presiona enter despues de cada keyword).
        </p>
        <textarea
          placeholder="econom&iacute;a productiva"
          class="appearance-none border bg-unancor-bginput rounded w-full py-2 px-3 text-gray-700 leading-tight mt-3 focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
        ></textarea>
        <button class="text-sm bg-unancor-blue hover:bg-white hover:text-unancor-blue text-white font-bold py-3 px-4 mt-10 border-2 border-unancor-blue rounded w-full focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent">
          <Link to="/Felicidades">Finalizar registro</Link>
        </button>
      </div>
    </div>
  );
}

export default SeleccionarKeywords;
