import React, {  useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import {AuthContext} from './auth/AuthContext.js';
import {authReducer} from './auth/authReducer.js';


/** Componente Mas alto de Heroes App
 * 
 *  Asigna y mantiene la informacion del usuario que se loguea
 *  Revisar AuthContext y authReducer
 * 
 *  Los componentes hijos pueden acceder a esta informacion por
 *  localStorage
 */

// Revisa al inicio el localStorage si hay un usuario y devuelve el estado.
// Si no false.
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}; 
}


export const HeroesApp = () => {  

    const [user, dispatch] = useReducer(authReducer, {}, init)
    
    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));
    }, [user])


    return (
        <AuthContext.Provider value = {{user, dispatch}} >
            <AppRouter />
        </AuthContext.Provider>
    )
}
