import ModalEnlacesExtras from "./ModalEnlacesExtras";

function EnlaceExtra({ contexto, title, keywords }) {
  return (
    <div className="">
      <div className="inline-flex w-full" style={{ justifyContent: "space-between" }}>
        <div className="inline-flex">
          <span className="material-icons-outlined">attachment</span>
          <h1 className="ml-2 font-bold text-lg">{title}</h1>
        </div>
        <span className="material-icons-outlined">more_vert</span>
      </div>
      <div className="space-y-2">
        <h6 className="opacity-50 text-xs font-medium">Contexto</h6>
        <p className="text-xs">{contexto}</p>
        <h6 className="opacity-50 text-xs font-medium">Keywords</h6>
        <p className="text-xs">{keywords}</p>
      </div>
    </div>
  );
}

function SeccionEnlacesExtras({ enlacesExtras }) {
  return (
    <div className="w-full">
      <h1 className="text-lg font-bold my-4">Enlaces Extras</h1>
      <div className="grid grid-cols-2 gap-5 mb-10">
        {enlacesExtras.map(({ title, contexto, keywords }) => (
          <EnlaceExtra title={title} contexto={contexto} keywords={keywords} />
        ))}
      </div>
      <ModalEnlacesExtras />
    </div>
  );
}

export default SeccionEnlacesExtras;
