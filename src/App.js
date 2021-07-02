import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Inicio,
  CuentaVerificada,
  TipoRegistro,
  VerificaTuCuenta,
  CrearMedio,
  RegistroProyecto,
  SeleccionarKeywords,
  TipoCliente,
  Felicidades,
  HomeAnunciante,
  AnalisisEspera,
  PopUpAnalisis,
  PopUpAnalisisFull,
  ResultadoAnalisis,
  Competencias,
  Propuestos,
  CompraArticulo,
  CrearAnalisisPasoDos,
  CrearAnalisisPasoUno,
} from "./pages/index";

import Topbar from "./components/dashboard/TopBar";
import Sidebar from "./components/dashboard/Sidebar";
import CheckBoxRegistro from "./components/registro/CheckBoxRegistro";

function App() {
  const [clientType, setClientType] = useState("anunciante"); // editor o anunciante

  const selectTypeClient = (clientType) => {
    setClientType(clientType);
  };

  return (
    <div className="h-screen">
      <Router>
        <Switch>
          <Route path="/Inicio">
            <div className="grid grid-cols-2 h-full">
              <Inicio />
            </div>
          </Route>
          <Route path="/CuentaVerificada">
            <div className="grid grid-cols-2 h-full">
              <CheckBoxRegistro pageCount={0} clientType={clientType} />
              <CuentaVerificada />
            </div>
          </Route>
          <Route path="/TipoRegistro">
            <div className="grid grid-cols-2 h-full">
              <CheckBoxRegistro pageCount={0} clientType={clientType} />
              <TipoRegistro
                clientType={clientType}
                selectTypeClient={selectTypeClient}
              />
            </div>
          </Route>
          <Route path="/VerificaTuCuenta">
            <div className="grid grid-cols-2 h-full">
              <CheckBoxRegistro pageCount={0} clientType={clientType} />
              <VerificaTuCuenta />
            </div>
          </Route>
          <Route path="/CrearMedio">
            <div className="grid grid-cols-2 h-full">
              <CheckBoxRegistro pageCount={1} clientType={clientType} />
              <CrearMedio />
            </div>
          </Route>
          <Route path="/RegistroProyecto">
            <div className="grid grid-cols-2 h-full">
              <CheckBoxRegistro pageCount={2} clientType={clientType} />
              <RegistroProyecto />
            </div>
          </Route>
          <Route path="/SeleccionarKeywords">
            <div className="grid grid-cols-2 h-full">
              <CheckBoxRegistro pageCount={3} clientType={clientType} />
              <SeleccionarKeywords />
            </div>
          </Route>
          <Route path="/TipoCliente">
            <div className="grid grid-cols-2 h-full">
              <CheckBoxRegistro pageCount={1} clientType={clientType} />
              <TipoCliente />
            </div>
          </Route>
          <Route path="/Felicidades">
            <div className="grid grid-cols-2 h-full">
              <CheckBoxRegistro pageCount={5} clientType={clientType} />
              <Felicidades clientType={clientType} />
            </div>
          </Route>
          <Route path="/HomeAnunciante">
            <Topbar />
            <Sidebar />
            <HomeAnunciante />
          </Route>
          <Route path="/HomeSerps">
            <Switch>
              <Route path="/HomeSerps/CrearAnalisisPasoUno">
                <Topbar />
                <Sidebar />
                <CrearAnalisisPasoUno />
              </Route>
              <Route exact path="/HomeSerps/AnalisisEspera">
                <Topbar />
                <Sidebar />
                <AnalisisEspera />
              </Route>
              <Route exact path="/HomeSerps/ResultadoAnalisis">
                <Topbar />
                <Sidebar />
                <ResultadoAnalisis />
              </Route>
              <Route path="/HomeSerps/PopUpAnalisis">
                <Topbar />
                <Sidebar />
                <PopUpAnalisis />
              </Route>
              <Route path="/HomeSerps/PopUpAnalisisFull">
                <Topbar />
                <Sidebar />
                <PopUpAnalisisFull />
              </Route>
              <Route path="/HomeSerps/CrearAnalisisPasoDos">
                <Topbar />
                <Sidebar />
                <CrearAnalisisPasoDos />
              </Route>
              <Route path="/HomeSerps/Competencias">
                <Topbar />
                <Sidebar />
                <Competencias />
              </Route>
              <Route path="/HomeSerps/Propuestos">
                <Topbar />
                <Sidebar />
                <Propuestos />
              </Route>
            </Switch>
          </Route>
          <Route path="/CompraArticulo">
            <Topbar />
            <Sidebar />
            <CompraArticulo/>
          </Route>
          <Redirect to="/Inicio" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
