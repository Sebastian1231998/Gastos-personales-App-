import {
  CREA_MERCADO,
  VALIDA_ESTADO_MERCADO,
  LIMPIA_MERCADO,
  OBTENER_MERCADOS
} from "../../types";


// eslint-disable-next-line
export default (state, action) =>{

    

    switch(action.type) {

      case CREA_MERCADO: 

      let datos = {
        mercado:  action.payload,
        valStateMercado:true
      }
      localStorage.setItem('mercado', JSON.stringify(datos)); 
      return{
        ...state,
        id:action.payload._id,
        NombreMercado: action.payload.NombreMercado,
        urlFile: action.payload.urlFile,
        registro: action.payload.registro,
        valStateMercado:true,
      
      }

      case VALIDA_ESTADO_MERCADO: 

      return{
        ...state,
        id:action.payload.mercado._id,
        NombreMercado: action.payload.mercado.NombreMercado,
        urlFile: action.payload.mercado.urlFile,
        registro: action.payload.mercado.registro,
        valStateMercado: action.payload.valStateMercado
      
      }

      case LIMPIA_MERCADO: 
     
      return{
        ...state,
        NombreMercado: "",
        urlFile: "",
        registro: "",
        valStateMercado: false,
        id:'',
        muestraExitoMercado : true

      }

      case OBTENER_MERCADOS: 

      return{ 
        ...state,
        mercados: action.payload
      }

      default: 
      
      return state; 
    }

}