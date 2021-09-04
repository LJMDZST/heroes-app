import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

/** componente que retorna una lista de heroes del listado de 
 * heroes filtrada por la editorial
 */
export const HeroList = ({publisher}) => {

    /** para evitar recargar informacion inecesariamente 
     *  se puede usar el hook useMemo para acelerar el cambio de 
     *  pantalla
    */
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher])
    //const heroes = getHeroesByPublisher( publisher );

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                   
                ))
            }
        </div >   )
}
