import {
  OBTENER_PRESUPUESTO,
  ACTUALIZAR_PRESUPUESTO
  } from "../../types";
  
  // eslint-disable-next-line
  export default (state, action) =>{
  
      
      switch(action.type) {
  

        case OBTENER_PRESUPUESTO: 
         return{
          ...state,
          presupuesto: action.payload.presupuesto,
          id:action.payload._id
         }
       
        default: 
        
        return state; 
      }
  
  }