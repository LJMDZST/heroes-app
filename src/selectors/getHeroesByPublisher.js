import {heroes} from '../data/heroes.js';

/** filtra heroes por la editorial  */
export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    // si el argumento recibido no es valido retornar error.
    if( !validPublishers.includes(publisher)) {
        throw new Error(`Publisher ${publisher} no es correcto`);
    }
    // filtra el arreglo de heroes con el criterio elegido.
    return heroes.filter( hero => hero.publisher === publisher );


}