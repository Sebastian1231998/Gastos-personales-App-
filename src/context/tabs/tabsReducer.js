import { CAMBIAR_SECCION , CAMBIA_SPINNER } from '../../types'

// eslint-disable-next-line
export default (state, action ) =>{

    switch(action.type){


        case CAMBIAR_SECCION: 

        return{
            ...state,
            pagina:action.payload
        }
        case CAMBIA_SPINNER: 

        return{
            ...state,
            cargando:action.payload
        }
        default: 
        return state; 
  
  
    }

}
