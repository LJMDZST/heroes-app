
import { useReducer } from "react";
import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

const user = {
    name : 'leax',
    logged : true
}

describe('Prueas en authreducer', () => {


    test('Debe retornar el estado por defecto', () => {
        
        const state = authReducer({logged:false},{});
        
        expect(state.logged).toBe(false);
       

    })

    test('Debe autenticar y colocar el name del usuario', () => {

        const newAction = {
            type : types.login,
            payload : user
        }
        
        const state = authReducer({},newAction);

        expect(state.logged).toBe(true);
        expect(state.name).toBe(user.name);


    })

    test('debe salir de la app y desloguear al usuario', () => {
        const newAction = {
            type : types.logout,
            payload : user
        }
        const state = authReducer({},newAction);

        expect(state.logged).toBe(false);

    })
    
    
    
    
})
