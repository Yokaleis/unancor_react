import ModalSugerencias from "./ModalSugerencias";
import SugerenciasEnlacesPrincipal from "./SugerenciasEnlacesPrincipal";
import CustomSelect from "./CustomSelect"
import ModalEnlacesExtras from './ModalEnlacesExtras' 
import ContextoEnlace from './ContextoEnlace' 
import ModalIdeasArticulo from "./ModalIdeasArticulo"
import ModelOpcionesAvanzadas from "./ModelOpcionesAvanzadas"

function TituloSeccion({ number, existHr, titulo, subtitulo }) {
  return (
    <>
      {existHr && <hr className="my-5" />}
      <div className="inline-flex space-x-2 mb-2">
        <div className="px-3 py-1 bg-unancor-blue text-white rounded font-bold text-lg">
          {number}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg">{titulo}</span>
          {subtitulo && <span className="text-xs">{subtitulo}</span>}
        </div>
      </div>
    </>
  );
}

function CustomCheckBox({ title, subtitle }) {
  return (
    <label className="inline-flex">
      <input type="checkbox" className="mt-2 mr-2" />
      <div>
        <p>{title}</p>
        <p className="opacity-50 text-xs">{subtitle}</p>
      </div>
    </label>
  );
}

function CompraArticulo() {
  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="absolute pt-20 pl-24 pb-4 pr-4 h-full w-full">
        <div className="bg-white h-full p-4 flex flex-col">
          <div className="">
            <h1 className="font-semibold text-3xl">Artículo en Cronista</h1>
            <ul
              className="pl-5 text-xs font-normal"
              style={{ listStyle: "disc" }}
            >
              <li>(Máximo 2 enlaces)</li>
              <li>Tiempo medio de publicacion 12 años</li>
            </ul>
          </div>
          <hr className="my-5" />
          <div className="flex flex-col overflow-auto">
            <TituloSeccion
              number="1"
              titulo="Enlaces y menciones"
              existHr={false}
            />
            <div className="px-5">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <CustomSelect
                    label="Opciones de enlaces"
                    options={[
                      "DoFollow",
                      "NoFollow",
                      "Sponsores",
                      "Mención",
                    ]}
                    placeholder="Seleccione una opcion"
                  />
                  <ContextoEnlace/>
                  <ModalEnlacesExtras/>
                </div>
                <div>
                  <SugerenciasEnlacesPrincipal id="principal"/>
                  <label className="flex flex-col">
                    <span className="text-lg mt-3">Anchor o palabra clave</span>
                    <div className="inline-flex space-x-5">
                      <input
                        type="text"
                        placeholder="Economia"
                        className="border p-2 bg-gray-50 border-gray-200 flex-grow"
                      />
                      <ModalSugerencias />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <TituloSeccion
              number="2"
              titulo="Briefing"
              subtitulo="Datos generados del articulo"
              existHr={true}
            />
            <div className="flex flex-col px-5">
              <div className="inline-flex"  style={{ justifyContent: "space-between"}}>
                <div className="w-96">
                  <CustomSelect
                    label="Tematica"
                    options={[
                      "Arte, Cultura, idiomas, Ciencia",
                      "Arte, Cultura, idiomas, Ciencia",
                      "Arte, Cultura, idiomas, Ciencia",
                      "Arte, Cultura, idiomas, Ciencia",
                      "Arte, Cultura, idiomas, Ciencia",
                    ]}
                    placeholder="Seleccione una temática"
                  />
                </div>
                <div className="inline-flex items-end ml-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0003 3C11.5403 3 11.0703 3.04 10.6003 3.14C7.84032 3.67 5.64032 5.9 5.12032 8.66C4.64032 11.27 5.60032 13.67 7.34032 15.22C7.77032 15.6 8.00032 16.13 8.00032 16.69V19C8.00032 20.1 8.90032 21 10.0003 21H10.2803C10.6303 21.6 11.2603 22 12.0003 22C12.7403 22 13.3803 21.6 13.7203 21H14.0003C15.1003 21 16.0003 20.1 16.0003 19V16.69C16.0003 16.14 16.2203 15.6 16.6403 15.23C18.0903 13.95 19.0003 12.08 19.0003 10C19.0003 6.13 15.8703 3 12.0003 3ZM14.0003 17H10.0003V16H14.0003V17ZM10.0003 19V18H14.0003V19H10.0003ZM15.3103 13.74C15.2203 13.82 15.1503 13.92 15.0703 14H8.92032C8.84032 13.91 8.77032 13.81 8.68032 13.73C7.36032 12.55 6.77032 10.79 7.09032 9.03C7.45032 7.09 9.05032 5.48 10.9803 5.1C11.3203 5.03 11.6603 5 12.0003 5C14.7603 5 17.0003 7.24 17.0003 10C17.0003 11.43 16.3903 12.79 15.3103 13.74Z"
                      fill="#FF6139"
                    />
                    <path d="M12.5 11H11.5V14H12.5V11Z" fill="#FF6139" />
                    <path
                      d="M10.38 8.87395L9.67285 9.58105L11.7942 11.7024L12.5013 10.9953L10.38 8.87395Z"
                      fill="#FF6139"
                    />
                    <path
                      d="M11.5019 11.0058L12.209 11.7129L14.3303 9.59159L13.6232 8.88449L11.5019 11.0058Z"
                      fill="#FF6139"
                    />
                  </svg>
                  <ModalIdeasArticulo/>
                </div>
              </div>
              <textarea
                placeholder="Explicanos de que quieres que hable hable el artículo"
                className="border p-2 bg-gray-50 border-gray-200 w-full mt-3"
              ></textarea>
              <ModelOpcionesAvanzadas/>
            </div>
            <TituloSeccion
              number="3"
              titulo="Opciones"
              subtitulo="opciones complementarias a considerar"
              existHr={true}
            />
            <div className="px-5 flex flex-col">
              <label className="space-x-2">
                <input type="checkbox" />
                <span className="text-lg opacity-30">
                  Quiero revisar el artículo antes de enviárselo al medio
                </span>
              </label>
              <label className="space-x-2">
                <input type="checkbox" />
                <span className="text-lg opacity-30">
                  Programar la publicidad del artículo
                </span>
              </label>
            </div>
            <TituloSeccion
              number="4"
              titulo="Link Booster"
              subtitulo="Con este servicio potenciamos el artículo que creamos, con lo que ayudamos a su indexación y a darle más a sus enlaces"
              existHr={true}
            />
            <div className="grid grid-cols-3 px-5">
              <div className="col-span-2 flex flex-col space-y-5">
                <CustomCheckBox
                  title="Campaña Facebook Ads"
                  subtitle="Nuestro experto en Marketing Social realizara una campaña de Facebook Ads con el artículo publicado en el medio de nuestra Fanpage con mas de 100K de seguidores"
                />
                <CustomCheckBox
                  title="Campaña de Enlaces Naturales (Tier2)"
                  subtitle="Refuerza el artículo publicado en el medio o blog con una capa de enlaces naturales para potenciar su linkjuice. Solo enlaces manuales"
                />
                <CustomCheckBox
                  title="Campaña Tráfico"
                  subtitle="Campaña de compra de tráfico no social"
                />
                <CustomCheckBox
                  title="Campaña de clicks"
                  subtitle="Campaña de clicks a los enlaces con visitas 100% reales navegando por tu web"
                />
              </div>
              <div className="col-span-1 grid grid-cols-2">
                <div className="flex flex-col justify-end">
                  <div className="space-y-5">
                    <h1 className="text-lg">URL del sitio</h1>
                    <p className="text-sm opacity-30">Aún no tines enlace</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <CustomSelect
                    label="Presupuesto"
                    options={["10&euro;", "10&euro;", "10&euro;", "10&euro;"]}
                    placeholder="10&euro;"
                  />
                  <CustomSelect
                    label="Presupuesto(Enlaces)"
                    options={["10&euro;", "10&euro;", "10&euro;", "10&euro;"]}
                    placeholder="10&euro;"
                  />
                  <CustomSelect
                    label="Presupuesto"
                    options={["10&euro;", "10&euro;", "10&euro;", "10&euro;"]}
                    placeholder="10&euro;"
                  />
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col text-center">
                      <span>Clicks</span>
                      <input
                        type="text"
                        placeholder="10"
                        className="border p-2 bg-gray-50 border-gray-200 m-"
                      />
                    </div>
                    <div className="flex flex-col text-center">
                      <span>Precio</span>
                      <input
                        type="text"
                        placeholder="10&euro;"
                        className="border p-2 bg-gray-50 border-gray-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-3">
              <div className="flex flex-col col-span-1 col-start-3 px-5">
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-lg font-bold">Resumen de tu compra</p>
                    <p className="text-lg">Artículo en Cronista</p>
                  </div>
                  <div className="flex justify-end items-end">
                    <p className="text-lg">240 €</p>
                  </div>
                </div>
                <hr className="my-5 mx-5" />
                <div className="grid grid-cols-2 mb-4">
                  <p className="text-5xl font-bold">Total</p>
                  <div className="flex justify-end items-end">
                    <p className="text-5xl font-bold">240€</p>
                  </div>
                </div>
                <label className="space-y-2">
                  <span className="text-lg px-5">
                    Agrega un cupón de descuento
                  </span>
                  <input
                    type="text"
                    placeholder="Código de cupón"
                    className="border p-2 bg-gray-50 border-gray-200 w-full"
                  />
                </label>
                <div className="grid grid-cols-2 my-5 text-lg font-semibold gap-5">
                  <button className="border border-unancor-blue text-unancor-blue p-2">
                    Añadir al carrito
                  </button>
                  <button className="bg-unancor-blue text-white p-2">
                    Comprar artículo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompraArticulo;
