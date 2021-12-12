import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Options = ({ opcion }) => {
  const [muestraopciones, muestraOpciones] = useState(false);

  const seleccionarDiv = (className) => {
    if (document.querySelector(".servicio-seleccionado")) {
      document
        .querySelector(".servicio-seleccionado")
        .classList.remove("servicio-seleccionado");
    }

    const seleccionado = document.querySelector("." + className);

    if (seleccionado !== null) {
      seleccionado.classList.add("servicio-seleccionado");
    }

    MuestraOpciones(className);
  };

  const MuestraOpciones = (className) => {
    if (className === "mercado") {
      if (muestraopciones) {
        muestraOpciones(false);
        document
          .querySelector(".servicio-seleccionado")
          .classList.remove("servicio-seleccionado");
      } else {
        muestraOpciones(true);
      }
    }
  };

  let className = opcion.route === "" ? opcion.activeSubOptions : opcion.route;
  let valueTo = opcion.route === "" ? false : opcion.route;

  return (
    <Fragment>
      <Link to={valueTo}>
        <div
          className={`collapsible-header ${className}`}
          onClick={() => {
            seleccionarDiv(className);
          }}
        >
          <i className="material-icons ">
            <span className="white-color">{opcion.icon}</span>
          </i>
          <span className="white-color">{opcion.name}</span>
        </div>
      </Link>

      {muestraopciones ? (
        <Fragment>
          {opcion.options.map((opcion) => (
            <li data-tip data-for="presupuesto-tooltip">
              <Options opcion={opcion} key={opcion.cod} />
            </li>
          ))}
        </Fragment>
      ) : null}

      <ReactTooltip id={opcion.tooltip} place="left" type="info" effect="solid">
        {opcion.name}
      </ReactTooltip>
    </Fragment>
  );
};

export default Options;
