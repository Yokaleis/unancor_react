import CheckBoxRegistro from "../../components/registro/CheckBoxRegistro";

function Felicidades() {
  return (
    <div class="grid grid-cols-2 h-full">
      <CheckBoxRegistro />
      <div class="bg-white h-full flex flex-col text-center">
        <div class="mx-28 mt-32">
          <img class="mx-auto" src="/assets/icon_success@2x.svg" alt="succes" />
          <h1 class="mt-14">Gracias, tu cuenta ha sido creada y configurada</h1>
          <button
            class="text-sm bg-unancor-blue hover:bg-white hover:text-unancor-blue text-white font-bold py-3 px-4 border-2 border-unancor-blue rounded w-full mt-10 
            focus:outline-none focus:ring-2 focus:ring-unancor-blue focus:border-transparent"
          >
            <a href="/dashboard/editor/index.html">Ir al Dashboard</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Felicidades;
