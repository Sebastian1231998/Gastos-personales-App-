import React, { Fragment, useContext } from "react";
import styled from "./SectionsTabs.module.css";
import ReactTooltip from "react-tooltip";
import TablaContent from "../../Microcomponents/Tables/TablaContent";
import presupuestoContext from "../../../context/presupuesto/presupuestoContext";
const PresupuestoTab = () => {

   // Presupuesto Context

   let presupuestoContexto = useContext(presupuestoContext);
   let { presupuesto } = presupuestoContexto;

  return (
    <Fragment>
      <div className={`row ${styled.centerContent} `}>
        <div className="col s12" data-tip data-for="presupuesto">
          <p className={` ${styled["presupuesto-total"]}  z-depth-3`}>
            <span className={styled.presupuesto}> ${presupuesto} </span>
          </p>
        </div>

        <ReactTooltip
          id="presupuesto"
          place="top"
          type="success"
          effect="float"
        >
          Presupuesto
        </ReactTooltip>
      </div>

      <div className="col s12">
        <p className={`${styled.agregar_presupuesto} z-depth-2`}>
          Agregar Presupuesto Mes
        </p>
      </div>

      <div className={styled.grid_buttons}>
        <div
          className={`${styled.option_section} z-depth-2 ${styled.otros_motivos}`}
          data-tip
          data-for="otros-motivos"
        >
          <p>Otros Motivos</p>
        </div>
        <ReactTooltip
          id="otros-motivos"
          place="top"
          type="warning"
          effect="solid"
        >
          Otros Motivos
        </ReactTooltip>
        <div
          className={`${styled.option_section} z-depth-2 ${styled.ingreso_extra}`}
          data-tip
          data-for="ingreso-extra"
        >
          <p>Ingreso Extra</p>
        </div>

        <ReactTooltip
          id="ingreso-extra"
          place="top"
          type="warning"
          effect="solid"
        >
          Ingreso Extra
        </ReactTooltip>
        <div
          className={`${styled.option_section} z-depth-2 ${styled.descuentos_medicamentos}`}
          data-tip
          data-for="descuentos-medicamentos"
        >
          <p>Descuentos Medicamentos</p>
        </div>

        <ReactTooltip
          id="descuentos-medicamentos"
          place="top"
          type="warning"
          effect="solid"
        >
          Descuentos Medicamentos
        </ReactTooltip>
      </div>

      <TablaContent/>
    </Fragment>
  );
};

export default PresupuestoTab;
