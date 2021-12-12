import tabsReducer from "./tabsReducer";
import { useReducer } from "react";
import tabContext from "./tabsContext";
import { CAMBIAR_SECCION, CAMBIA_SPINNER } from "../../types";

const TabsState = (props) => {
  const stateInicial = {
    pagina: 1,
    cargando: false
  };

  const [state, dispatch] = useReducer(tabsReducer, stateInicial);

  const cambiarPagina = (pagina) => {
    dispatch({
      type: CAMBIAR_SECCION,
      payload: pagina
    });
  };

  const guardarCargando = (cargando) => {
    dispatch({
      type: CAMBIA_SPINNER,
      payload: cargando
    });
  };

  return (
    <tabContext.Provider
      value={{
        pagina: state.pagina,
        cargando: state.cargando,
        cambiarPagina: cambiarPagina,
        guardarCargando
      }}
    >
      {props.children}
    </tabContext.Provider>
  );
};

export default TabsState;
