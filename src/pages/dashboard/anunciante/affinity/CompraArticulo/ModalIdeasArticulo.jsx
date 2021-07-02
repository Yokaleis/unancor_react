import { Dialog, Tabs, Tab, Icon } from "@blueprintjs/core";
import { useState } from "react";

function TabUno() {
  return (
    <div className="border flex justify-start">
      <ul className="p-5" style={{ listStyle: "disc" }}>
        {[1, 2, 3, 4].map(() => (
          <li>Lorem ipsum dolor sit amet</li>
        ))}
      </ul>
    </div>
  );
}

function TabDos() {
  const columsNames = ["¿Qué?", "¿Quién?", "¿Cuándo?", "¿Por qué?"];
  return (
    <div className="grid grid-cols-4 gap-5">
      {columsNames.map((name, index) => (
        <div className="flex flex-col justify-center" key={index}>
          <div className="bg-unancor-orange bg-opacity-30  py-4 font-bold text-sm text-center">
            {name}
          </div>
          <div className="border px-5">
            <ul style={{ listStyle: "disc" }}>
              {[1, 2, 3, 4].map(() => (
                <li className="text-xs">Lorem ipsum dolor sit amet</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function ModalIdeasArticulo() {
  const [dialogState, setDialogState] = useState({
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    isOpen: false,
    usePortal: true,
  });
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClose = () => setDialogState({ ...dialogState, isOpen: false });
  const handleOpen = () => setDialogState({ ...dialogState, isOpen: true });

  const onChangeInputSearch = (event) => {
    if (event.target.value === "") {
      setIsSearching(false);
    } else if (event.target.value !== "") {
      setIsSearching(true);
    }
    setSearchValue(event.target.value);
  };

  return (
    <>
      <span
        className="text-unancor-orange text-sm font-medium place cursor-pointer"
        onClick={handleOpen}
      >
        ¿Sobre que escribir?
      </span>
      <Dialog
        className="bg-white p-2 px-4 pb-4"
        style={{ width: "700px" }}
        onClose={handleClose}
        title="Obtén ideas para tu artículo"
        {...dialogState}
      >
        <div className="inline-flex px-5 my-4">
          <input
            type="text"
            className="border flex-grow"
            placeholder="Buscar"
            onChange={onChangeInputSearch}
            value={searchValue}
          />
          <div className="p-2 bg-unancor-blue">
            <Icon icon="search" />
          </div>
        </div>
        {isSearching ? (
          <Tabs
            id="TabsDos"
            animate={true}
            vertical={false}
            renderActiveTabPanelOnly={true}
          >
            <Tab id="uno" title="Relacinados" panel={<TabUno />} />
            <Tab id="dos" title="Preguntas" panel={<TabDos />} />
            <Tab id="" title="Preposiciones" disabled panel={<TabDos />} />
            <Tab id="" title="Comparaciones" disabled panel={<TabDos />} />
            <Tab id="" title="Orden alfabético" disabled panel={<TabDos />} />
          </Tabs>
        ) : (
          <div className="flex justify-center items-center w-full h-96">
            <p className="text-xs opacity-50">Comienza una búsqueda de ideas</p>
          </div>
        )}
      </Dialog>
    </>
  );
}

export default ModalIdeasArticulo;
