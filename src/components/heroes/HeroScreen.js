import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroesById';

const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({history}) => {

    /** Hook de react-router-dom permite extraer
     *  informacion de la pagina actual.
     */
    const {heroeId} = useParams();
    
    /** Se extraen lso datos del heroe con el selector */
    const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);
    //const hero = getHeroeById(heroeId);

    
    
    /** TECNICA PARA REDIRECCIONAR SI LA URL DE LA PAGINA NO 
     *  ES CORRECTA
     */
    if( !hero ) {
        return <Redirect to="/"/>;
    }
    /** ------------------------------------------------ */

    const handleReturn = ()=>{
        if( history.length <= 2){
            history.push('/');
        } else {
            history.goBack();
        }
    }

    /** RETORNO NORMAL DEL COMPONENTE CON LA INFO DEL HEROE */
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-4 ">
            <div className="col-4">
                <img 
                    //src={`../../assets/heroes/${ heroeId }.jpg`}
                    src={ heroImages(`./${heroeId}.jpg`).default }
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeInDown">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego} </li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher} </li>
                    <li className="list-group-item"><b>First Apareance:</b> {first_appearance} </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
