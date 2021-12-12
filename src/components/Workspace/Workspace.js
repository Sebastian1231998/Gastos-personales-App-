import React, { Fragment } from "react";
import Presupuesto from "../Presupuesto/Presupuesto";
import { Routes, Route } from "react-router-dom";
import ServiciosPublicos from "../Pages/ServiciosPublicos";
import CrearMercado from "../Pages/CrearMercado";
import MisMercados from "../Pages/MisMercados";
import ServiciosExtras from "../Pages/ServiciosExtras";
const Workspace = () => {
  return (
    <Fragment>
      <div className="workspace">
        <nav>
          <div className="nav-wrapper contenedor-header center">
            <a href="#!" className="brand-logo">
              <i className="material-icons blue-text">cloud</i>Logo
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/presupuesto" element={<Presupuesto />}></Route>
          <Route path="servicios-publicos" element={<ServiciosPublicos />}></Route>
          <Route path="/servicios-extras" element={<ServiciosExtras />}></Route>
          <Route path="/mis-mercados" element={<MisMercados />}></Route>
          <Route path="/crear-mercado" element={<CrearMercado />}></Route>
        </Routes>
      </div>
    </Fragment>
  );
};

export default Workspace;
