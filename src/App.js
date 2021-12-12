import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// COMPONENTS
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
// CONTEXT APP
import ServiosPublicosState from "./context/servicios-publicos/serviciosPublicosState";
import TabsState from "./context/tabs/tabsState";
import MercadoState from "./context/mercado/MercadoState";
import ProductosState from "./context/productos/ProductosState";
import PresupuestoState from "./context/presupuesto/PresupuestoState";
import TransaccionState from "./context/transacciones/TransaccionState";
function App() {
  return (
    <div className="App">
      <ServiosPublicosState>
        <PresupuestoState>
          <TransaccionState>
            <MercadoState>
              <ProductosState>
                <TabsState>
                  <div className="workspace-flex">
                    <Router>
                      <Workspace />
                      <Sidebar />
                    </Router>
                  </div>
                </TabsState>
              </ProductosState>
            </MercadoState>
          </TransaccionState>
        </PresupuestoState>
      </ServiosPublicosState>
    </div>
  );
}

export default App;
