import { SELECCIONA_SERVICIO_PUBLICO } from '../../types'

// eslint-disable-next-line
export default (state, action) =>{

    

    switch(action.type) {

      case SELECCIONA_SERVICIO_PUBLICO: 

      return{
      ...state,
      imgResumen: action.payload.classImg,
      empresa:action.payload.empresa,
      servicio:action.payload.nombre_servicio
      }

      default: 
      
      return state; 
    }

}