import { useState } from "react";
import { Dialog } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { MenuItem, Icon } from "@blueprintjs/core";

function ArticuloComprado({ isOpenSuccess, handleCloseSuccess }) {
  return (
    <Dialog
      className="bg-white px-5 space-y-6"
      autoFocus={true}
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      enforceFocus={true}
      isOpen={isOpenSuccess}
      usePortal={true}
      onClose={handleCloseSuccess}
      title=""
    >
      <div className="flex flex-col justify-center items-center space-y-3">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M60 120C93.0823 120 120 93.0847 120 60C120 54.2896 119.203 48.6621 117.625 43.2727C116.847 40.6226 114.08 39.1003 111.422 39.8779C108.77 40.6531 107.252 43.4302 108.027 46.0803C109.335 50.5579 110 55.2429 110 60C110 87.5696 87.5696 110 60 110C32.4304 110 10 87.5696 10 60C10 32.4304 32.4304 10 60 10C70.0195 10 79.6594 12.9297 87.8772 18.4705C90.1648 20.0146 93.2751 19.408 94.8169 17.1204C96.3599 14.8303 95.7581 11.7224 93.468 10.1794C83.5925 3.52051 72.0203 0 60 0C26.9177 0 0 26.9153 0 60C0 93.0847 26.9177 120 60 120Z"
              fill="#2D72C9"
            />
            <path
              d="M111.465 11.4639L60.0001 62.9263L43.5352 46.4639C41.5821 44.512 38.418 44.512 36.4649 46.4639C34.513 48.4171 34.513 51.5811 36.4649 53.5342L56.4649 73.5342C57.4427 74.512 58.7195 74.9991 60.0001 74.9991C61.2806 74.9991 62.5574 74.512 63.5352 73.5342L118.535 18.5342C120.487 16.5811 120.487 13.4171 118.535 11.4639C116.582 9.51202 113.418 9.51202 111.465 11.4639Z"
              fill="#2D72C9"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="120" height="120" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="font-semibold text-lg">Artículo comprado!</h1>
        <h6 className="font-medium text-sm">
          Tu compra del artículo en Cronicas. ha sido exitosa.{" "}
        </h6>
        <button className="bg-unancor-blue px-4 py-1 rounded text-white text-lg">
          Ver factura
        </button>
      </div>
    </Dialog>
  );
}

function ModalSaldoInsuficiente({
  isOpenSaldoInsuficiente,
  hableCloseSaldoInsuficiente,
}) {
  return (
    <Dialog
      className="bg-white px-5 space-y-6"
      onClose={hableCloseSaldoInsuficiente}
      title=""
      autoFocus={true}
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      enforceFocus={true}
      isOpen={isOpenSaldoInsuficiente}
      usePortal={true}
    >
      <div className="flex flex-col justify-center items-center space-y-3">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M59.9985 82.2383C56.6437 82.2383 53.8315 85.0504 53.8315 88.4052C53.8315 91.7601 56.6437 94.5722 59.9985 94.5722C63.23 94.5722 66.1655 91.7601 66.0175 88.5533C66.1655 85.0257 63.378 82.2383 59.9985 82.2383Z"
              fill="#F44335"
            />
            <path
              d="M117.08 104.09C120.953 97.4052 120.977 89.4375 117.129 82.7772L78.4994 15.878C74.6759 9.14365 67.7689 5.14746 60.0232 5.14746C52.2775 5.14746 45.3705 9.16832 41.547 15.8533L2.86776 82.8265C-0.98043 89.5609 -0.955762 97.5779 2.94176 104.263C6.78995 110.874 13.6723 114.845 21.3687 114.845H98.5297C106.251 114.845 113.182 110.825 117.08 104.09ZM108.693 99.2553C106.547 102.956 102.748 105.151 98.505 105.151H21.344C17.1504 105.151 13.3763 103.005 11.2795 99.3787C9.15806 95.7032 9.13339 91.3123 11.2548 87.6121L49.934 20.6635C52.0308 16.988 55.7803 14.8173 60.0232 14.8173C64.2414 14.8173 68.0156 17.0127 70.1123 20.6882L108.767 87.6368C110.839 91.2383 110.814 95.5798 108.693 99.2553Z"
              fill="#F44335"
            />
            <path
              d="M58.4689 38.9417C55.5334 39.7804 53.708 42.4445 53.708 45.676C53.856 47.6248 53.9794 49.5982 54.1274 51.547C54.5467 58.972 54.9661 66.249 55.3854 73.674C55.5334 76.1901 57.4822 78.0156 59.9983 78.0156C62.5144 78.0156 64.4879 76.0668 64.6112 73.526C64.6112 71.9966 64.6112 70.5905 64.7592 69.0365C65.0306 64.2756 65.3266 59.5147 65.5979 54.7538C65.7459 51.6703 66.0173 48.5868 66.1653 45.5033C66.1653 44.3933 66.0173 43.4066 65.5979 42.4198C64.3399 39.657 61.4044 38.251 58.4689 38.9417Z"
              fill="#F44335"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="120" height="120" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="font-semibold text-lg">Saldo insuficiente</h1>
        <h6 className="font-medium text-sm text-center">
          Lo sentimos, tu saldo no es suficiente para poder realizar esta
          compra, te invitamos a añadir saldo en tu cuenta Unancor.{" "}
        </h6>
        <button className="bg-unancor-blue px-4 py-1 rounded text-white text-lg">
          Añadir saldo
        </button>
      </div>
    </Dialog>
  );
}

function SelectDatosPago({ options, placeholder, label }) {
  const [selectedItem, setSelectItem] = useState(undefined);
  const renderTag = ({ direccion, razonFiscal, NIF }, { handleClick }) => {
    return (
      <div
        onClick={handleClick}
        className="hover:bg-unancor-blue hover:bg-opacity-20 cursor-pointer text-sm py-2"
        style={{ width: "400px" }}
      >
        <div
          className="inline-flex w-full pr-4"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <p className="p-1 px-5">
              <span className="font-medium">Dirección:</span> {direccion}
            </p>
            <p className="p-1 px-5">
              <span className="font-medium">Razón fiscal:</span> {razonFiscal}
            </p>
            <p className="p-1 px-5">
              <span className="font-medium">NIF:</span> {NIF}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined opacity-50">edit</span>
          </div>
        </div>
      </div>
    );
  };

  const onSelectItem = (item, event) => {
    setSelectItem(item);
  };

  //   function renderCreateFilmOption(query, active, handleClick) {
  //     return (
  //       <MenuItem
  //         icon="add"
  //         text={`Create "${query}"`}
  //         active={active}
  //         onClick={handleClick}
  //         shouldDismissPopover={false}
  //       />
  //     );
  //   }

  return (
    <label className="flex flex-col space-y-2">
      <span className="text-lg">{label}</span>
      <Select
        itemRenderer={renderTag}
        items={options}
        popoverProps={{ fill: true }}
        filterable={false}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={onSelectItem}
      >
        <div
          className="border bg-gray-50 border-gray-200 p-2 flex items-center"
          style={{ justifyContent: "space-between" }}
        >
          <span>{selectedItem ? selectedItem : placeholder}</span>
          <Icon icon="chevron-down" />
        </div>
      </Select>
    </label>
  );
}

const datosFactura = [
  {
    direccion: " Lorem ipsum, Barcelona, España",
    razonFiscal: "0102023",
    NIF: "01020322",
  },
  {
    direccion: " Lorem ipsum, Barcelona, España",
    razonFiscal: "0102023",
    NIF: "01020323",
  },
];

function ModalDatosPago() {
  const [dialogState, setDialogState] = useState({
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    isOpen: false,
    usePortal: true,
  });

  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenSaldoInsuficiente, setIsOpenSaldoInsuficiente] = useState(false);

  const handleOpenSuccess = () => setIsOpenSuccess(true);
  const handleCloseSuccess = () => setIsOpenSuccess(false);

  const handleOpenSaldoInsuficiente = () => setIsOpenSaldoInsuficiente(true);
  const hableCloseSaldoInsuficiente = () => setIsOpenSaldoInsuficiente(false);

  const handleClose = () => setDialogState({ ...dialogState, isOpen: false });
  const handleOpen = () => setDialogState({ ...dialogState, isOpen: true });

  return (
    <>
      <button className="bg-unancor-blue text-white p-2" onClick={handleOpen}>
        Comprar artículo
      </button>
      <Dialog
        className="bg-white px-5 space-y-6"
        onClose={handleClose}
        title=""
        {...dialogState}
      >
        <SelectDatosPago
          label="Método de pago"
          placeholder="Selecciona un método de pago"
          options={[]}
        />
        <SelectDatosPago
          label="Datos de facturación"
          placeholder="Selecciona una dirección"
          options={datosFactura}
        />
        <div className="text-center">
          <button
            className="bg-unancor-blue text-white px-5 py-2 w-1/2 font-medium"
            onClick={() => {
                handleOpenSuccess()
                handleOpenSaldoInsuficiente()
            }}
          >
            Continuar con la compra
          </button>
        </div>
      </Dialog>
      <ArticuloComprado
        isOpenSuccess={isOpenSuccess}
        handleCloseSuccess={handleCloseSuccess}
      />
      <ModalSaldoInsuficiente
        isOpenSaldoInsuficiente={isOpenSaldoInsuficiente}
        hableCloseSaldoInsuficiente={hableCloseSaldoInsuficiente}
      />
    </>
  );
}

export default ModalDatosPago;
