import React, { Fragment, useContext } from "react";
import ReactTooltip from "react-tooltip";
import serviciosPublicosContext from "../../../context/servicios-publicos/serviciosPublicosContext";
const Resumen = () => {
  let servicios = useContext(serviciosPublicosContext);

  let { imgResumen, empresa, estrato, cantidad_habitantes } = servicios;

  return (
    <Fragment>

    
      <div className="parallax-container">
        <div className={imgResumen} id="resumen-hero-id"></div>
      </div>

      <h2 className="text-center negrilla">Resumen</h2>

      <p>
        <span>Empresa:</span> {empresa}
      </p>

      <hr className="hr-resumen" />
      <p>
        <span>Titular:</span> Jesus Rodriguez
      </p>
      <hr className="hr-resumen" />
      <p>
        <span>Estrato:</span> {estrato}
      </p>
      <hr className="hr-resumen" />
      <p>
        <span>Cantidad Habitantes:</span> {cantidad_habitantes}
      </p>
      <hr className="hr-resumen" />
      <p>
        <span>Fecha de Facturacion:</span> 11/10/21
      </p>

      <hr className="hr-resumen" />

      <p>
        <span>Estado:</span> Pagado
      </p>

      <hr className="hr-resumen" />

      <p>
        <span>Fecha de Pago:</span> 22/10/21
      </p>

      <hr className="hr-resumen" />
      <div className="ver-mas">
        <a
           href="#!"
          className="btn-floating btn-large waves-effect waves-light red tooltipped delete-resumen"
          data-tip
          data-for="resumen-tooltip"
        >
          <i className="material-icons">delete_forever</i>{" "}
        </a>
      </div>

      <ReactTooltip
        id="resumen-tooltip"
        place="top"
        type="error"
        effect="solid"
      >
        Borrar Resumen
      </ReactTooltip>

      <p className="valor-factura">
        <span>Total Pagar:</span> $600.000
      </p>
    </Fragment>
  );
};

export default Resumen;
