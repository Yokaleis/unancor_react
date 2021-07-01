import Estadistica from "../../../../../assets/Serps/Estadistica.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function DominioTD() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select-none cursor-pointer inline-flex justify-center items-center w-full text-unancor-blue relative" onClick={() => setIsOpen(!isOpen)}>
      <span className="font-bold">es.wikipedia.com</span>
      <svg
        className="ml-3"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.35">
          <path
            d="M11.0833 11.0833H2.91667V2.91667H7V1.75H2.91667C2.26917 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.26917 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V7H11.0833V11.0833ZM8.16667 1.75V2.91667H10.2608L4.52667 8.65083L5.34917 9.47333L11.0833 3.73917V5.83333H12.25V1.75H8.16667Z"
            fill="black"
          />
        </g>
      </svg>
      {isOpen && (
        <div className="absolute bg-white flex-col p-3 shadow-md left-24 z-10 w-72">
          <table className="w-full">
            <thead className="text-xs opacity-50">
              <th className="text-left">Medio</th>
              <th className="text-left">País</th>
              <th className="text-left">Precio</th>
            </thead>
            <tbody>
              <tr>
                <td className="text-xs text-unancor-blue font-bold">
                  es.wikipedia.com
                </td>
                <td className="font-bold text-sm text-black">España</td>
                <td className="font-bold text-sm text-black">€175.00</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-5 text-black mb-5">
            Este diario que ustedes leen nació con un claro objetivo: informar a
            los vecinos y vecinas de la comarca de L’Horta de todas las noticias
            que se producen en sus municipios.
          </p>
          <Link to="/HomeSerps/PopUpAnalisisFull">
            <img src={Estadistica} alt="estadistica" />
          </Link>
        </div>
      )}
    </div>
  );
}

function PopUpAnalisis() {
  const [isOpenMenuMoreOptions, setIsOpenMenuMoreOptions] = useState(false);
  const [checkValues, setCheckValues] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const history = useHistory()

  const onClickSelectAllCheckBox = (event) => {
    setCheckValues(checkValues.map((item) => !item));
  };
  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="absolute pt-20 pl-24 pb-4 pr-4 h-full w-full">
        <div className="bg-white h-full flex flex-col p-10 space-y-6">
          <div className="inline-flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20L13.41 18.59L7.83 13L20 13V11L7.83 11L13.42 5.42L12 4L4 12L12 20Z"
                fill="#2D72C9"
              />
            </svg>
            <div
              className="ml-2 text-sm font-medium text-unancor-blue cursor-pointer"
              onClick={() => history.goBack()}
            >
              Volver
            </div>
          </div>
          <div className="inline-flex">
            <div className="w-1/2 inline-flex items-center space-x-6">
              <div className="inline-flex border text-xs py-2 px-4 pr-10 items-center justify-start">
                <svg
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                    fill="black"
                  />
                </svg>
                Buscar
              </div>
              <button className="bg-unancor-blue text-xs font-medium text-white inline-flex items-center p-2 rounded">
                Todos los proyectos
                <svg
                  className="ml-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="w-1/2 inline-flex items-center justify-end relative">
              <button
                className="p-1 bg-unancor-blue rounded-sm"
                onClick={() => setIsOpenMenuMoreOptions(!isOpenMenuMoreOptions)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="buttonExpandMenu"
                >
                  <path
                    d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                    fill="white"
                  />
                </svg>
              </button>
              {isOpenMenuMoreOptions && (
                <div className="right-0 top-9 absolute text-xs flex flex-col bg-white z-10 w-36 p-2 shadow-md">
                  <div className="p-2 text-left">Editar</div>
                  <div className="p-2 text-left">Eliminar</div>
                  <div
                    className="text-unancor-blue text-left bg-gray-200 p-2 cursor-pointer"
                    onClick={onClickSelectAllCheckBox}
                  >
                    Seleccionar todos
                  </div>
                </div>
              )}
            </div>
          </div>
          <table className="border">
            <thead className="text-xs bg-gray-100 opacity-50">
              <tr>
                <th className="p-4">Seleccionar</th>
                <th>Dominio</th>
                <th>DR</th>
                <th>Tráfico</th>
                <th>Nivel de Spam</th>
                <th>Keywords</th>
                <th>Pos</th>
                <th>Fecha</th>
                <th>Analizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {checkValues.map((checkboxValue, index) => (
                <tr key={index}>
                  <td className="py-6">
                    <div className="flex flex-col justify-center items-center">
                      <input type="checkbox" checked={checkboxValue} readOnly/>
                    </div>
                  </td>
                  <td>
                    <DominioTD />
                  </td>
                  <td className="text-center">12</td>
                  <td className="text-center">1.252</td>
                  <td>
                    <div className="flex justify-center items-center">
                      <svg
                        width="28"
                        height="8"
                        viewBox="0 0 28 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="8" height="8" rx="1" fill="#EF5350" />
                        <rect
                          x="10"
                          width="8"
                          height="8"
                          rx="1"
                          fill="#F44335"
                        />
                        <rect
                          x="20"
                          width="8"
                          height="8"
                          rx="1"
                          fill="#E53935"
                        />
                      </svg>
                    </div>
                  </td>
                  <td className="text-center">
                    Noticias, Economía, Política internacional,
                    <br />
                    Ciencias políticas, Relaciones internacionales
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">05/05/2021</td>
                  <td>
                    <div className="flex justify-center items-center"></div>
                  </td>
                  <td>
                    <div className="flex justify-center items-cente">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PopUpAnalisis;
