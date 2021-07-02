import { useState } from "react";
import { Dialog, Tabs, Tab } from "@blueprintjs/core";

function TabUno() {
  return (
    <table className="border w-full">
      <thead>
        <tr className="opacity-50" style={{ background: "#F4F4F4" }}>
          <th className="py-2">Sugerencia</th>
          <th>Búsqueda</th>
          <th>CPC</th>
          <th>Añadir</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <tr>
            <td className="py-2 text-center">Lorem ipsum dolor sit amet</td>
            <td className="text-center">5.255</td>
            <td className="text-center">255</td>
            <td className="text-center">
              <button className="bg-unancor-blue py-1 px-4 text-white text-xs font-semibold">
                Añadir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TabDos() {
  return (
    <>
      <table className="border w-full">
        <thead>
          <tr className="opacity-50" style={{ background: "#F4F4F4" }}>
            <th className="py-2">Sugerencia</th>
            <th>Búsqueda</th>
            <th>CPC</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {[1, 2, 3, 4, 5, 6, 7].map(() => (
            <tr>
              <td className="py-2 text-center">Lorem ipsum dolor sit amet</td>
              <td className="text-center">5.255</td>
              <td className="text-center">255</td>
              <td className="text-center">
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-unancor-orange p-2 text-white px-4 font-semibold text-sm">Añadir</button>
      </div>
    </>
  );
}

function ModalSugerencias() {
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
      <button
        className="text-lg text-white px-2 bg-unancor-blue"
        onClick={handleOpen}
      >
        Ver Sugerencias
      </button>
      <Dialog
        className="bg-white"
        onClose={handleClose}
        title="Sugerencias"
        {...dialogState}
      >
        <div className="flex flex-col px-4">
          <Tabs id="Tabs" animate={true} vertical={false} renderActiveTabPanelOnly={true}>
            <Tab id="uno" title="Anchors por URL" panel={<TabUno />} />
            <Tab id="dos" title="Keyword" panel={<TabDos />} />
            <Tabs.Expander />
            <div className="inline-flex px-5 my-4">
              <input type="text" className="border flex-grow" />
              <div className="p-2 bg-unancor-blue">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9102 14H15.1202L14.8402 13.73C15.8202 12.59 16.4102 11.11 16.4102 9.5C16.4102 5.91 13.5002 3 9.91016 3C6.32016 3 3.41016 5.91 3.41016 9.5C3.41016 13.09 6.32016 16 9.91016 16C11.5202 16 13.0002 15.41 14.1402 14.43L14.4102 14.71V15.5L19.4102 20.49L20.9002 19L15.9102 14ZM9.91016 14C7.42016 14 5.41016 11.99 5.41016 9.5C5.41016 7.01 7.42016 5 9.91016 5C12.4002 5 14.4102 7.01 14.4102 9.5C14.4102 11.99 12.4002 14 9.91016 14Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </Tabs>
        </div>
      </Dialog>
    </>
  );
}

export default ModalSugerencias;
