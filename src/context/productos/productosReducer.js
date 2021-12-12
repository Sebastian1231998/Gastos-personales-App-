import {AGREGA_PRODUCTOS ,LIMPIAR_ESTADO, OBTENER_PRODUCTOS} from "../../types";
  
  
  // eslint-disable-next-line
  export default (state, action) =>{

      switch(action.type) {

        case AGREGA_PRODUCTOS: 
        return{
           ...state,
           estado: action.payload.estado
        }
        case LIMPIAR_ESTADO: 
        return{
          ...state,
          estado: ''
        }

        case OBTENER_PRODUCTOS: 

   
        return{
         ...state,
         productos:action.payload
        }
        default: 
        
        return state; 
      }
  
  }