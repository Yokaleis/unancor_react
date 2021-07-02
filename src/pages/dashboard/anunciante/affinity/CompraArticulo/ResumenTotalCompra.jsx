const articulosCompra = [
  {
    title: "Artículo en Cronista",
    precio: "240 €",
  },
  {
    title: "Buster Clicks",
    precio: "32 €",
  },
  {
    title: "Buster Facebook Ads",
    precio: "25 €",
  },
  {
    title: "Buster Tier 2",
    precio: "32 €",
  },
  {
    title: "Buster Tier 2",
    precio: "32 €",
  },
  {
    title: "Buster Tier 2",
    precio: "32 €",
  },
];

function ResumenTotalCompra() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-2 mb-2">
          <p className="text-lg font-bold">Resumen de tu compra</p>
        </div>
        {articulosCompra.map(({ title, precio }) => (
          <>
            <div className="mb-2">
              <p className="text-lg">{title}</p>
            </div>
            <div className="flex justify-end items-end mb-2">
              <p className="text-lg">{precio}</p>
            </div>
          </>
        ))}
      </div>
      <hr className="my-5 mx-5" />
      <div className="grid grid-cols-2 mb-4">
        <p className="text-5xl font-bold">Total</p>
        <div className="flex justify-end items-end">
          <p className="text-5xl font-bold">240€</p>
        </div>
      </div>
    </>
  );
}

export default ResumenTotalCompra;
