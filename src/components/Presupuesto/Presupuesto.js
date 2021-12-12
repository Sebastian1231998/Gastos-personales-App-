import React, { useContext, useEffect } from "react";
import { tabsServiciosPerfil } from "../../services";
import Tabs from "../Microcomponents/Tabs/Tabs";
import tabsContext from "../../context/tabs/tabsContext";
import presupuestoContexto from "../../context/presupuesto/presupuestoContext";
import Spinner from "../Microcomponents/Spinner/Spinner";
import ComponentTab from "../Microcomponents/Tabs/ComponentTab";
import InfoUser from "./subcomponents/InfoUser";

const Presupuesto = () => {
  useEffect(() => {
    cambiarPagina(5);
    // eslint-disable-next-line

    obtenerPresupuesto();
  }, []);

  let tabs = useContext(tabsContext);
  let { pagina, cambiarPagina, guardarCargando, cargando } = tabs;

  // Presupuesto Context

  let presupuestoContext = useContext(presupuestoContexto);
  let { obtenerPresupuesto } = presupuestoContext;

  return (
    <div className="container">
      <InfoUser />

      <hr />
      <div className="content">
        <div className="tabs-perfil">
          <nav className="tabs-service">
            {tabsServiciosPerfil.map((tab) => (
              <Tabs
                key={tab.id}
                guardarCargando={guardarCargando}
                tab={tab}
                pagina={pagina}
                cambiarPagina={cambiarPagina}
              />
            ))}
          </nav>

          {cargando ? (
            <Spinner />
          ) : (
            tabsServiciosPerfil.map((tabContent) => (
              <ComponentTab 
              content={tabContent} 
              key={tabContent.id}
              
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Presupuesto;
