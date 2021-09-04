import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { AuthContext } from "../auth/AuthContext";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

/** Componente Raiz del Arbol de rutas de la app 
 *  Redirecciona a dos lugares que tienen diseños distintos:
 *      /login -> pantalla de logueo 
 *      /  -> pantalla de inicio
*/
export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    
    return (
        <Router>
        <div>
          <Switch>
            <PublicRoute 
                isAutenticated = {user.logged}
                exact path="/login" 
                component={ LoginScreen }
            />
            <PrivateRoute 
                isAutenticated = {user.logged}
                path="/" 
                component={ DashboardRouter } 
            /> 
          </Switch>
        </div>
      </Router>
    );
};
