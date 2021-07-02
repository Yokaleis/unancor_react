function ResumenEnlacesExtras({ enlacesExtras }) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-lg">URL del sitio</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mb-3">
        <div className="text-center">
          <span>Clicks</span>
        </div>
        <div className="text-center">
          <span>Precio</span>
        </div>
      </div>
      {enlacesExtras.map(({ clicks, precio, title }) => (
        <>
          <div className="inline-flex mb-3 items-center">
              <span className="material-icons-outlined">attachment</span>
              <p className="text-xs ml-2 font-bold">{title}</p>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-3">
            <div className="flex flex-col text-center">
              <div className="border p-1 bg-gray-50 border-gray-200 items-center justify-center w-full">
                {clicks}
              </div>
            </div>
            <div className="flex flex-col text-center">
              <div className="border p-1 bg-gray-50 border-gray-200">
                {precio}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default ResumenEnlacesExtras;
