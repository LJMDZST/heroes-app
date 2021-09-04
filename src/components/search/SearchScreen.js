
import React, { useMemo } from 'react';
import queryString from 'query-string'

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

/** Componente que filtra la lista de heroes por nombre */
export const SearchScreen = ({history}) => {
    /** Propiedad del componente que obtiene info relacionada
     *  a la url actual
     */
    const location = useLocation();

    /** queryString, libreria para parsear una query GET */
    const { q = ''} = queryString.parse( location.search );

    /** custom hook useForm() */
    const [values,handleInputChange,reset] = useForm({  
        searchText: q
    });

    /** texto del input de busqueda obtenido por useForm */
    const {searchText} = values 

    /** se llama al selector getHeroesByName usando el hook useMemo para 
     *  que no se haga labusqueda mientras se escribe en el input
     */
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q] );

    const handleSearch = (e) =>{
        e.preventDefault();

        history.push(`?q=${searchText}`);
        
        reset();
    }

    return (
        <div>
            <h1>Search Hero</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero.."
                            className="form-control"
                            onChange={handleInputChange}
                            name="searchText"
                            value={searchText}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                           
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-8">
                    <h4>Results</h4>
                    <hr />
                    {
                        heroesFiltered.map( hero => 
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        )
                    }
                </div>


            </div>
        </div>
    )
}
