import mercadoReducer from "./mercadoReducer";
import { useReducer } from "react";
import mercadoContext from "./mercadoContext";
import contextAxios from "../../config/axios";

import { CREA_MERCADO, VALIDA_ESTADO_MERCADO, LIMPIA_MERCADO, OBTENER_MERCADOS } from "../../types";


const MercadoState = (props) => {
  const stateInicial = {
    NombreMercado: "",
    urlFile: "",
    registro: "",
    valStateMercado: false,
    id:'',
    productos:[],
    mercados:[],
    muestraExitoMercado:false

  };

  const [state, dispatch] = useReducer(mercadoReducer, stateInicial);

  const creaMercado = async (mercado) => {

    let data = new FormData();

    data.append("name", mercado.NombreMercado);
    data.append("file", mercado.urlFile, "form-data");

    let repuesta = await contextAxios.post("/api/mercado", data);


    dispatch({
      type: CREA_MERCADO,
      payload: repuesta.data
    });
  };

  const validaMercado = (mercadoLocal)=>{

    dispatch({
      type:VALIDA_ESTADO_MERCADO,
      payload:mercadoLocal

    })
  }

  const limpiarDataMercado = ()=>{

    dispatch({
      type:LIMPIA_MERCADO,
  
    })
  }

  const obtenerMercados = async()=>{
 
     let respuesta = await contextAxios.get('/api/mercado'); 





    dispatch({
      type: OBTENER_MERCADOS,
      payload: respuesta.data.mercado
    })

  }
  return (
    <mercadoContext.Provider
      value={{
        id:state.id,
        NombreMercado: state.NombreMercado,
        urlFile: state.urlFile,
        registro: state.registro,
        valStateMercado: state.valStateMercado,
        muestraExitoMercado:state.muestraExitoMercado,
        mercados: state.mercados, 
        creaMercado: creaMercado,
        validaMercado:validaMercado,
        limpiarDataMercado: limpiarDataMercado,
        obtenerMercados: obtenerMercados
      }}
    >
      {props.children}
    </mercadoContext.Provider>
  );
};

export default MercadoState;
