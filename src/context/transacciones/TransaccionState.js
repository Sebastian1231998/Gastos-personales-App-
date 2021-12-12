import React , {useReducer} from 'react';
import transaccionContext from "./transaccionContext";
import transaccionReducer from "./transaccionReducer";
import contextAxios from '../../config/axios';
import {OBTENER_TRANSACCIONES} from '../../types'

const TransaccionState = (props) => {

    const initialState = {
       transacciones: []
    }


    const [state, dispatch]  = useReducer(transaccionReducer, initialState);



    const crearTransaccion = async(transaccion)=>{

       await contextAxios.post('/api/transacciones', transaccion)
    }

    const obtenerTransacciones = async()=>{

        let respuesta = await contextAxios.get('/api/transacciones'); 
       
        dispatch({
            type:OBTENER_TRANSACCIONES, 
            payload: respuesta.data
        })
        
    }


  return (
    <transaccionContext.Provider
     value={{
        crearTransaccion: crearTransaccion,
        obtenerTransacciones:obtenerTransacciones,
        transacciones: state.transacciones
     }}
    >
    {props.children}
    </transaccionContext.Provider>
  );
};

export default TransaccionState;
