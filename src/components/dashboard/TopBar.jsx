import Logo from "../../assets/LOGO/image18@2x.svg";
import PerfilImage from "../../assets/icons-dashboard-anunciante/Ellipse282.svg";
import Circle from "../../assets/icons-dashboard-anunciante/Ellipse230.svg";
import { Classes, Popover2 } from "@blueprintjs/popover2";
import { Button } from "@blueprintjs/core";
import Campana  from "../../assets/icons-dashboard-anunciante/campana.svg"
import Cinco from "../../assets/icons-dashboard-anunciante/5.svg"
import vector from "../../assets/icons-dashboard-anunciante/Vector.svg"

function TopBar() {
  return (
    <div className="w-full h-16 bg-white absolute z-20 flex">
      <div className="inline-flex w-full">
        <div className="w-1/2 inline-flex items-center relative">
          <img className="w-40 h-5 mt-2 ml-10 mr-5" src={Logo} />
          <Popover2
            interactionKind="click"
            popoverClassName={Classes.POPOVER2_CONTENT_SIZING}
            placement="bottom"
            content={
              <div
                className="
                flex-col
                w-56
                space-y-4
                bg-white
                shadow-md
                p-2
              "
              >
                <button
                  className="
                  bg-unancor-blue
                  px-4
                  py-2
                  font-semibold
                  text-xs text-white text-center
                  w-full
                "
                >
                  Crear nuevo proyecto
                </button>
                <div className="inline-flex border p-2">
                  <div className="w-1/12 mr-5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                        fill="#C1C1C1"
                      />
                    </svg>
                  </div>
                  <input
                    className="w-11/12 text-xs"
                    type="text"
                    placeholder="Buscar tu proyecto"
                  />
                </div>
                <div className="text-base pl-2 space-y-2">
                  <div>moda.ar</div>
                  <div className="block font-medium text-unancor-orange py-2 bg-gray-100">
                    muyfanaticos.es
                  </div>
                  <div>nightmarerock.net</div>
                  <div>nightstop.store.com</div>
                  <div className="opacity-50">nightstop.com</div>
                  <div>nosedimetu.com.ve</div>
                </div>
              </div>
            }
            renderTarget={({ isOpen, ref, ...targetProps }) => (
              <Button
                {...targetProps}
                elementRef={ref}
                rightIcon="chevron-down"
                className="font-semibold text-2xl text-unancor-orange inline-flex items-center"
                text="miudev.com"
              />
            )}
          />
        </div>
        <div className="w-1/2 inline-flex items-center justify-end pr-6 space-x-3">
          <h1 className="font-bold text-base leading-7">
            Billetera: 35.021 &euro;
          </h1>
          <h1 className="font-bold text-xl leading-7">Cr&eacute;dito: 3.502</h1>
          <div className="relative h-10 w-10">
            <img
              className="absolute top-0 left-4 h-5 w-4 z-20"
              src={Circle}
            />
            <img
              className="absolute top-2 left-2 z-10"
              src={vector}
            />
            <img
              className="w-2 h-2 absolute top-1 left-5 z-30"
              src={Cinco}
            />
          </div>
          <img
            className="h-5 w-5"
            src={Campana}
          />
          <img
            className="h-10 w-10"
            src={PerfilImage}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
