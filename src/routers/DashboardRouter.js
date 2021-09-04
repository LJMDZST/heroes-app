import React  from 'react';
import { Redirect, Route, Switch } from 'react-router';


import { NavBar } from '../components/ui/NavBar.js';
import { MarvelScreen } from "../components/marvel/MarvelScreen.js";
import { DcScreen } from '../components/dc/DcScreen.js';
import { HeroScreen } from '../components/heroes/HeroScreen.js';
import { SearchScreen } from '../components/search/SearchScreen.js';

/** Compoente que contiene la barra de navegacion y un 
 *  switch que redirecciona a cada una de las pantallas 
 *  de la app.
 *  DashBoard 
 *         -> /marvel (inicio)
 *         -> /heroe
 *         -> /dc
 */
export const DashboardRouter = ()  => {
    return (
        <>
            {/* 
                El NavBar se visualizara en todas 
                las pantallas que redireccione el switch
            */}
            <NavBar />
            <div className="container mt-2">
                <Switch >
                    <Route path="/marvel" component={ MarvelScreen } />
                    <Route path="/heroe/:heroeId" component={ HeroScreen } />
                    <Route path="/dc" component={ DcScreen } />
                    <Route path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
