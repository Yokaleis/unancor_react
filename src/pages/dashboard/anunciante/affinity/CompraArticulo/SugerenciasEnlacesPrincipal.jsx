import { Suggest } from "@blueprintjs/select";
import { MenuItem } from "@blueprintjs/core";
import { useEffect } from "react";

const items = [
  {
    title: "Noticias de Verdad",
    subtitle: "https://www.noticiasdeverdad.pe",
  },
  {
    title: "Noticias sin Fronteras",
    subtitle: "https://www.noticiassinfronteras.mx",
  },
  {
    title: "Noticias Globovisión",
    subtitle: "https://www.noticiasglobovision.com.ve",
  },
];

const renderTag = (item, { handleClick, ...rest }) => {
  return (
    <div onClick={handleClick} className="hover:bg-gray-100 cursor-pointer">
      <p className="text-lg font-semibold">{item.title}</p>
      <p className="text-xs font-normal text-unancor-blue">{item.subtitle}</p>
    </div>
  );
};

const filterLink = (query, link, _index, exactMatch) => {
  const normalizedTitle = link.title.toLowerCase();
  const normalizedSubtitle = link.subtitle.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  if (exactMatch) {
      return normalizedTitle === normalizedQuery;
  } else {
      return (normalizedTitle.indexOf(normalizedQuery) >= 0) || (normalizedSubtitle.indexOf(normalizedQuery) >= 0);
  }
};

const renderInputValue = (item) => item.subtitle;

function SugerenciasEnlacesPrincipal({ id }) {
  useEffect(() => {
    document.getElementById(id).className =
      "border p-2 bg-gray-50 border-gray-200 w-full";
  }, [id]);

  return (
    <label className="space-y-2">
      <span className="text-lg">Enlace Principal</span>
      <Suggest
        fill={true}
        itemPredicate={filterLink}
        inputProps={{ placeholder: "URL", id }}
        items={items}
        inputValueRenderer={renderInputValue}
        itemRenderer={renderTag}
        noResults={<MenuItem disabled={true} text="No results." />}
      />
    </label>
  );
}

export default SugerenciasEnlacesPrincipal;
