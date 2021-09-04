import React from 'react';
import { Link } from 'react-router-dom';


const heroImages = require.context('../../assets/heroes', true);

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title fw-bolder">{superhero}</h5>
                </div>
                <img src={heroImages(`./${id}.jpg`).default } className="card-img-top" alt={superhero}/>
            
                <div className="card-body " >
                    <p className="card-text fw-bold">{alter_ego}</p>
                    {(alter_ego !== characters) && <small className="card-text">{characters}</small>}
                    <p className="card-text">{first_appearance}</p>
                </div>
                <div className="d-flex justify-content-between card-footer">
                    <small className="text-muted">
                        {publisher}  
                    </small>
                    <Link to={`./heroe/${ id }`}>
                            Más...
                    </Link>
                </div> 
            </div>
            
        </div>
    )
}
