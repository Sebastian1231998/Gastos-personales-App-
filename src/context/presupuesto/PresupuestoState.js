import presupuestoReducer from "./presupuestoReducer";
import { useReducer } from "react";
import presupuestoContext from "./presupuestoContext";
import contextAxios from "../../config/axios";

import { OBTENER_PRESUPUESTO, ACTUALIZAR_PRESUPUESTO } from "../../types";

const PresupuestoState = (props) => {
  const stateInicial = {
    presupuesto: "",
    id: ""
  };

  const [state, dispatch] = useReducer(presupuestoReducer, stateInicial);

  const obtenerPresupuesto = async () => {
    const respuesta = await contextAxios.get("/api/presupuesto");

    console.log(respuesta.data);

    dispatch({
      type: OBTENER_PRESUPUESTO,
      payload: respuesta.data[0]
    });
  };

  const actualizarPresupuesto = async (id, presupuesto) => {
    await contextAxios.put(`/api/presupuesto/${id}`, { presupuesto });
  };

  return (
    <presupuestoContext.Provider
      value={{
        obtenerPresupuesto: obtenerPresupuesto,
        actualizarPresupuesto: actualizarPresupuesto,
        presupuesto: state.presupuesto,
        id: state.id
      }}
    >
      {props.children}
    </presupuestoContext.Provider>
  );
};

export default PresupuestoState;
