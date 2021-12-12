import { useReducer } from "react";
import contextAxios from "../../config/axios";

import {
  AGREGA_PRODUCTOS,
  LIMPIAR_ESTADO
} from "../../types";
import productosContext from "./productosContext";
import productosReducer from "./productosReducer";

const ProductosState = (props) => {
  const stateInicial = {
    productos: [],
    producto: null,
    estado: ""
  };

  const [state, dispatch] = useReducer(productosReducer, stateInicial);

  const agregarProductos = async (productos, mercado) => {
    let respuesta = await contextAxios.post("/api/productos", productos, {
      params: { mercado }
    });

    dispatch({
      type: AGREGA_PRODUCTOS,
      payload: respuesta.data
    });
  };

  const limpiarEstado = () => {
    dispatch({
      type: LIMPIAR_ESTADO
    });
  };

  const obtenerProductos = async (mercado) => {
    let respuesta = await contextAxios.get("/api/productos", {
      params: { mercado }
    });
    localStorage.setItem(
      "productosMercado",
      JSON.stringify(respuesta.data.productos)
    );
  };

  return (
    <productosContext.Provider
      value={{
        productos: state.productos,
        producto: state.producto,
        estado: state.estado,
        agregarProductos: agregarProductos,
        limpiarEstado: limpiarEstado,
        obtenerProductos: obtenerProductos
      }}
    >
      {props.children}
    </productosContext.Provider>
  );
};

export default ProductosState;
