import { useState } from "react";
import { Dialog } from "@blueprintjs/core";
import SugerenciasEnlacesPrincipal from "./SugerenciasEnlacesPrincipal";
import ContextoEnlace from "./ContextoEnlace";
import ModalSugerencias from "./ModalSugerencias";

function ModalEnlacesExtras() {
  const [dialogState, setDialogState] = useState({
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    isOpen: false,
    usePortal: true,
  });

  const handleClose = () => setDialogState({ ...dialogState, isOpen: false });

  const handleOpen = () => setDialogState({ ...dialogState, isOpen: true });

  return (
    <>
      <div
        className="font-medium text-lg text-unancor-blue mt-3 cursor-pointer"
        onClick={handleOpen}
      >
        Añadir enlace extra(Recomendado)
      </div>
      <Dialog
        className="bg-white"
        onClose={handleClose}
        title="Añadir enlace extra"
        {...dialogState}
      >
        <div className="p-4">
          <SugerenciasEnlacesPrincipal id="secundario" />
          <ContextoEnlace />
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
          <div className="flex justify-end mt-5">
            <button className="bg-unancor-orange px-4 text-white py-2 rounded">
              Añadir
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ModalEnlacesExtras;
