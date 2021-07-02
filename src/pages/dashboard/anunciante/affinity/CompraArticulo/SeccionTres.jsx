import { useState, useEffect } from "react";
import { DateInput } from "@blueprintjs/datetime";
import moment from "moment";
import { Icon } from "@blueprintjs/core";

function DataPicker() {
    useEffect(() => {
        document.getElementById("DatePicker").className =
          "border p-2 bg-gray-50 border-gray-200";
      }, []);
    
    return (
        <div className="inline-flex items-center">
        <span className="opacity-50 text-xs mr-2">Selecciona una fecha</span>
        <div>
          <DateInput
            formatDate={(date) => moment(date).format("DD-MM-YYYY")}
            parseDate={(str) => new Date(str)}
            inputProps={{ id: "DatePicker" }}
            defaultValue={new Date()}
            rightElement={<Icon className="mt-3 mr-2" icon="chevron-down" />}
          />
        </div>
      </div>
    )
}

function SeccionTres() {
  const [checkboxs, setCheckboxs] = useState([
    {
      label: "Quiero revisar el artículo antes de enviárselo al medio",
      checked: false,
    },
    {
      label: "Programar la publicidad del artículo",
      checked: false,
    },
  ]);

  const onChangeCheckbox = (event) => {
    const nameCheckBox = event.target.name;
    const currentChecked = event.target.checked;
    setCheckboxs(
      checkboxs.map(({ label, checked }) =>
        label === nameCheckBox
          ? { label, checked: currentChecked }
          : { label, checked }
      )
    );
  };

  const validateAllChecbox = () => {
    for (let { checked } of checkboxs) {
      if (!checked) return false;
    }
    return true;
  };

  return (
    <div className="px-5 flex flex-col space-y-2">
      {checkboxs.map(({ label, checked }, index) => (
        <label className="space-x-2" key={index}>
          <input
            type="checkbox"
            name={label}
            onChange={onChangeCheckbox}
            checked={checked}
          />
          <span className={checked ? "text-lg" : "text-lg opacity-30"}>
            {label}
          </span>
        </label>
      ))}
      {validateAllChecbox() && <DataPicker/>}
    </div>
  );
}

export default SeccionTres;
