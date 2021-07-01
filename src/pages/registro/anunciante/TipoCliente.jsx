import { Link } from "react-router-dom";

function TipoCliente() {
  return (
    <div class="bg-white h-full">
      <div class="mt-10 mx-24">
        <h1 class="font-bold text-4xl leading-10">
          Seleccione que tipo de{" "}
          <span class="text-unancor-orange">cliente</span> eres
        </h1>
        <h2 class="text-xl mt-2">
          En Unancor tu perfil se ajusta a tus necesidades y al tipo de cliente
          que seas
        </h2>
      </div>
      <div class="flex flex-col space-y-8 mt-12 mx-40">
        <Link
          to="/RegistroProyecto"
          className="group hover:bg-unancor-orange w-full h-24 relative bg-transparent border-2 border-unancor-orange font-bold rounded-lg inline-flex items-center"
        >
          <div class="absolute z-30 w-20 h-20 top-1.5 left-4 bg-unancor-orange opacity-10 group-hover:bg-white"></div>
          <svg
            viewBox="0 0 76 80"
            fill="none"
            class="absolute z-20 w-14 h-14 top-5 left-7"
          >
            <g
              clipPath="url(#clip0)"
              stroke="#FF6139"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            >
              <path
                class="group-hover:stroke-current group-hover:text-white"
                d="M65.039.785H7.375c-3.594 0-6.59 2.996-6.59 6.59v51.673c0 3.594 2.996 6.59 6.59 6.59h20.969l6.14 9.136c.9 1.348 2.846 1.348 3.595 0l6.141-9.136h20.969c3.594 0 6.59-2.996 6.59-6.59V7.375c-.15-3.594-3.146-6.59-6.74-6.59z"
              />
              <path
                class="group-hover:stroke-current group-hover:text-white"
                d="M58.748 25.948l-14.08-5.692M57.55 9.023c-3.895-1.648-8.388.15-9.886 4.044L35.982 41.075c-.15.3-.15.749-.15 1.048l1.048 11.533c.15 1.797 2.247 2.546 3.595 1.498l8.987-7.34c.3-.299.449-.449.599-.898.3-.749 11.383-27.559 11.532-27.858 1.648-3.894-.3-8.387-4.044-10.035zM36.58 25.948c0-1.198-1.048-2.247-2.246-2.247H12.317c-1.198 0-2.247 1.049-2.247 2.247s1.049 2.246 2.247 2.246h22.167c1.198 0 2.096-1.048 2.096-2.246zM42.572 15.463c0-1.198-1.049-2.246-2.247-2.246H12.317c-1.198 0-2.247 1.048-2.247 2.246 0 1.199 1.049 2.247 2.247 2.247h28.158c1.198 0 2.097-1.048 2.097-2.247zM12.317 39.128H29.69c1.198 0 2.247-1.048 2.247-2.247 0-1.198-1.049-2.246-2.247-2.246H12.317c-1.198 0-2.247 1.048-2.247 2.246.15 1.199 1.049 2.247 2.247 2.247zM31.039 45.568H12.317c-1.198 0-2.247 1.049-2.247 2.247s1.049 2.247 2.247 2.247h18.572c1.198 0 2.247-1.049 2.247-2.247s-.899-2.247-2.097-2.247zM38.678 43.92l7.489 2.995"
              />
            </g>
          </svg>
          <span class="absolute z-10 left-40  font-bold text-unancor-orange text-2xl group-hover:text-white">
            Agenda SEO
          </span>
        </Link>
        <Link
          to="/RegistroProyecto"
          class="group relative bg-transparent border-2 hover:bg-unancor-blue border-unancor-blue font-bold py-2 px-4 rounded-lg inline-flex items-center w-full h-24 mt-16"
        >
          <div class="absolute z-30 w-20 h-20 top-1.5 left-4 bg-unancor-blue opacity-10 group-hover:bg-white"></div>
          <svg
            width="76"
            height="80"
            viewBox="0 0 76 80"
            fill="none"
            class="absolute z-20 w-14 h-14 top-5 left-7"
          >
            <path
              class="group-hover:stroke-current group-hover:text-white"
              d="M66.2536 2H8.59012C4.99551 2 2 4.99551 2 8.59012V60.2626C2 63.8572 4.99551 66.8527 8.59012 66.8527H29.5587L35.6995 75.989C36.5981 77.337 38.5452 77.337 39.2941 75.989L45.4348 66.8527H66.4034C69.998 66.8527 72.9935 63.8572 72.9935 60.2626V8.59012C72.8437 4.99551 69.8482 2 66.2536 2Z"
              stroke="#2D72C9"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              class="group-hover:stroke-current group-hover:text-white"
              d="M21.9194 50.5263H30.9059M58.4646 11.4349L40.6413 18.6241H21.1705C16.827 18.7739 13.2324 22.3685 13.2324 26.712V33.9012C13.2324 38.2447 16.6773 41.8393 21.0207 41.8393L18.4746 55.3191C18.175 56.667 19.2234 57.8653 20.7212 57.8653H29.5579C30.6064 57.8653 31.505 57.1164 31.6548 56.0679L34.3507 41.8393H40.7911L58.6143 49.0285C60.1121 49.6276 61.6099 48.5792 61.6099 46.9317V13.5318C61.6099 12.034 59.9623 10.8358 58.4646 11.4349ZM57.1166 43.7864L43.3373 38.2447V22.3685L57.1166 16.8268V43.7864ZM23.4171 46.033H29.4082H23.4171Z"
              stroke="#2D72C9"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              class="group-hover:stroke-current group-hover:text-white"
              d="M26.4129 37.0484C29.7216 37.0484 32.4039 34.3662 32.4039 31.0574C32.4039 27.7487 29.7216 25.0664 26.4129 25.0664C23.1041 25.0664 20.4219 27.7487 20.4219 31.0574C20.4219 34.3662 23.1041 37.0484 26.4129 37.0484Z"
              stroke="#2D72C9"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
          <span class="absolute z-10 left-48  font-bold text-unancor-blue text-2xl group-hover:text-white">
            Negocio
          </span>
        </Link>
        <Link
          to="/RegistroProyecto"
          class="group hover:bg-unancor-orange w-full h-24 relative bg-transparent border-2 border-unancor-orange font-bold rounded-lg inline-flex items-center"
        >
          <div class="absolute z-30 w-20 h-20 top-1.5 left-4 bg-unancor-orange opacity-10 group-hover:bg-white"></div>
          <svg
            viewBox="0 0 76 80"
            fill="none"
            class="absolute z-20 w-14 h-14 top-5 left-7"
          >
            <g
              clipPath="url(#clip0)"
              stroke="#FF6139"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            >
              <path
                class="group-hover:stroke-current group-hover:text-white"
                d="M65.039.785H7.375c-3.594 0-6.59 2.996-6.59 6.59v51.673c0 3.594 2.996 6.59 6.59 6.59h20.969l6.14 9.136c.9 1.348 2.846 1.348 3.595 0l6.141-9.136h20.969c3.594 0 6.59-2.996 6.59-6.59V7.375c-.15-3.594-3.146-6.59-6.74-6.59z"
              />
              <path
                class="group-hover:stroke-current group-hover:text-white"
                d="M58.748 25.948l-14.08-5.692M57.55 9.023c-3.895-1.648-8.388.15-9.886 4.044L35.982 41.075c-.15.3-.15.749-.15 1.048l1.048 11.533c.15 1.797 2.247 2.546 3.595 1.498l8.987-7.34c.3-.299.449-.449.599-.898.3-.749 11.383-27.559 11.532-27.858 1.648-3.894-.3-8.387-4.044-10.035zM36.58 25.948c0-1.198-1.048-2.247-2.246-2.247H12.317c-1.198 0-2.247 1.049-2.247 2.247s1.049 2.246 2.247 2.246h22.167c1.198 0 2.096-1.048 2.096-2.246zM42.572 15.463c0-1.198-1.049-2.246-2.247-2.246H12.317c-1.198 0-2.247 1.048-2.247 2.246 0 1.199 1.049 2.247 2.247 2.247h28.158c1.198 0 2.097-1.048 2.097-2.247zM12.317 39.128H29.69c1.198 0 2.247-1.048 2.247-2.247 0-1.198-1.049-2.246-2.247-2.246H12.317c-1.198 0-2.247 1.048-2.247 2.246.15 1.199 1.049 2.247 2.247 2.247zM31.039 45.568H12.317c-1.198 0-2.247 1.049-2.247 2.247s1.049 2.247 2.247 2.247h18.572c1.198 0 2.247-1.049 2.247-2.247s-.899-2.247-2.097-2.247zM38.678 43.92l7.489 2.995"
              />
            </g>
          </svg>
          <span class="absolute z-10 left-48 font-bold text-unancor-orange text-2xl group-hover:text-white">
            Nichero
          </span>
        </Link>
      </div>
    </div>
  );
}

export default TipoCliente;
