import {heroes} from '../data/heroes.js'


/** filtro de busqueda de heroes por nombre */
export const getHeroesByName = (name = '') => {
    
    if (name === '') {
       return []; 
    }

    name = name.toLocaleLowerCase();

    /** para cada heroe, compara el nombre del heroe en minuscula con name */
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );
}

