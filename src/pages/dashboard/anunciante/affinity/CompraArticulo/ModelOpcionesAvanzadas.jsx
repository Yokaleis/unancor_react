import { Dialog } from "@blueprintjs/core";
import { useState } from "react";

function CustomInputText({ label, placeholder}) {
    return (
        <label className="flex flex-col">
            <span className="text-base">{label}</span>
        <input type="text" placeholder={placeholder} className="border bg-gray-50 border-gray-200 p-2"/>
      </label>
    )
}

function ModelOpcionesAvanzadas() {
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
        className="text-lg text-unancor-blue mt-3 font-medium cursor-pointer"
        onClick={handleOpen}
      >
        Opciones avanzadas
      </div>
      <Dialog
        className="bg-white"
        onClose={handleClose}
        style={{ width: "800px" }}
        title="Opciones avanzadas"
        {...dialogState}
      >
        <div className="grid grid-cols-2 gap-5 p-4">
          <div className="flex flex-col">
            <CustomInputText label="Titulo" placeholder="Agrega un titulo principal"/>
            <CustomInputText label="Subtitulo" placeholder="Agrega un subtitulo"/>
            <div className="inline-flex justify-end items-start">
              <span className="text-unancor-blue font-medium text-sm">Añadir otros subtitulos</span>
            </div>
            <label className="flex flex-col">
                <span className="text-lg">Keywords</span>
              <textarea placeholder="Economía" className="border bg-gray-50 border-gray-200 p-2"></textarea>
            </label>
          </div>
          <div>
            <CustomInputText label="Términos a evitar" placeholder="Menciona algunos términos que se deberían evitar"/>
          </div>
        </div>
        <div className="flex justify-end py-0 p-4 rounded">
            <button className="bg-unancor-orange text-white px-6 py-2">
                Guardar
            </button>
        </div>
      </Dialog>
    </>
  );
}

export default ModelOpcionesAvanzadas;
