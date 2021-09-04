import {types} from '../types/types.js';

/** Reducer que modifica el estado del usuario
 *  de acuerdo a la accion recibida
 */

export const authReducer = (state = {}, action)=>{
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}