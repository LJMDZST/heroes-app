import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

/** Componente de pantalla de Logueo.
 *  las props se pueden ver en la pestaña Components de Chrome
 *  en este caso se desestructura para obtener history
 */
export const LoginScreen = ({ history}) => {
    
    
    const {dispatch} = useContext(AuthContext);
    
    const handleLogin = ()=>{
      
      const lastPath = localStorage.getItem('lastPath') || '/';

       /** history hace referencia al historial de navegacion.*/
      // agrega la pagina a la cola del historial. (se puede volver atras)
       //history.push('/');
       dispatch( {
         type: types.login,
         payload : {
           name : 'leax',
         }
       } );
       
       /* elimina de la cola la pagina actual y la reemplaza por la deseada.
         no se puede volver atras*/
       history.replace(lastPath);
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
              Login
            </button>

        </div>
    )
}
