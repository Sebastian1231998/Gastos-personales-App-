import servicioPublicosReducer from "./servicioPublicosReducer";
import { useReducer } from "react";
import serviciosPublicosContext from "./serviciosPublicosContext";

import { SELECCIONA_SERVICIO_PUBLICO } from "../../types";

const ServiosPublicosState = (props) => {
  const stateInicial = {
    servicio: "Agua",
    nombre: "",
    fecha_pago: "",
    mes_curso: "",
    valor_pagado: 0,
    estado: "pendiente",
    empresa: "Acueducto",
    estrato: "3",
    cantidad_habitantes: "6",
    imgResumen: "hero-info-agua"
  };

  const [state, dispatch] = useReducer(servicioPublicosReducer, stateInicial);

  const seleccionaServicio = (payload) => {
    if (document.querySelector("animate__fadeIn")) {
      document
        .querySelector("animate__fadeIn")
        .classList.remove("animate__fadeIn");
    }

    document
      .querySelector("#resumen-hero-id")
      .classList.add("animate__fadeIn", "animate__animated");

    dispatch({
      type: SELECCIONA_SERVICIO_PUBLICO,
      payload: payload
    });
  };

  return (
    <serviciosPublicosContext.Provider
      value={{
        servicio: state.servicio,
        nombre: state.nombre,
        fecha_pago: state.fecha_pago,
        valor_pagado: state.valor_pagado,
        estado: state.estado,
        empresa: state.empresa,
        estrato: state.estrato,
        cantidad_habitantes: state.cantidad_habitantes,
        imgResumen: state.imgResumen,
        seleccionaServicio: seleccionaServicio
      }}
    >
      {props.children}
    </serviciosPublicosContext.Provider>
  );
};

export default ServiosPublicosState;
