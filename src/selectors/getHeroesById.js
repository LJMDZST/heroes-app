import { heroes } from '../data/heroes.js'

/** devuelve un heroe por el id */
export const getHeroeById = ( id ) =>{

    return heroes.find( hero => hero.id === id);


}