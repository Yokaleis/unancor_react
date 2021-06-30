import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
  HomeAnunciante 
} from "./pages/index"

function App() {
  const [clientType, setClientType] = useState("anunciante"); // editor o anunciante
  
  const selectTypeClient = (clientType) => {
    setClientType(clientType)
  }

  return (
    <Router>
      <div className="h-screen">
        <Switch>
          <Route path="/Inicio">
            <Inicio clientType={clientType}/>
          </Route>
          <Route path="/CuentaVerificada">
            <CuentaVerificada clientType={clientType}/>
          </Route>
          <Route path="/TipoRegistro">
            <TipoRegistro clientType={clientType} selectTypeClient={selectTypeClient}/>
          </Route>
          <Route path="/VerificaTuCuenta">
            <VerificaTuCuenta clientType={clientType}/>
          </Route>
          <Route path="/CrearMedio">
            <CrearMedio clientType={clientType}/>
          </Route>
          <Route path="/RegistroProyecto">
            <RegistroProyecto clientType={clientType}/>
          </Route>
          <Route path="/SeleccionarKeywords">
            <SeleccionarKeywords clientType={clientType}/>
          </Route>
          <Route path="/TipoCliente">
            <TipoCliente/>
          </Route>
          <Route path="/Felicidades">
            <Felicidades clientType={clientType}/>
          </Route>
          <Route path="/HomeAnunciante">
            <HomeAnunciante/>
          </Route>
          <Redirect to="/Inicio"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;