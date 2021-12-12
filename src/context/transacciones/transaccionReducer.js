
import {OBTENER_TRANSACCIONES} from '../../types'

export default (state, action ) =>{


      switch(action.type){

            case OBTENER_TRANSACCIONES:

            return{
                  ...state, 
                  transacciones: action.payload
            }

        default :
           break;
      }


}