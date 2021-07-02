import { Select } from "@blueprintjs/select";
import { MenuItem, Icon } from "@blueprintjs/core";
import { useState } from "react"

function CustomSelect({ options, placeholder, label }) {
  const [selectedItem, setSelectItem] = useState(undefined)
  const renderTag = (item, { handleClick, ...rest }, tres) => {
    return (
      <p
        className="text-lg font-semibold hover:bg-gray-100 hover:text-unancor-blue cursor-pointer p-1 px-5"
        onClick={handleClick}
      >
        {item}
      </p>
    );
  };

  const onSelectItem = (item, event) => {
    setSelectItem(item)
  }

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
        <div className="border bg-gray-50 border-gray-200 p-2 flex items-center" style={{justifyContent: "space-between"}}>
          <span>{selectedItem ? selectedItem : placeholder}</span>
          <Icon icon="chevron-down"/>
        </div>
      </Select>
    </label>
  );
}

export default CustomSelect;