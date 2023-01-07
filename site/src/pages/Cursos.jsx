import React from 'react';
import clock from '../assets/icon-clock.png';
import calendar from '../assets/icon-calendar.png';
import location from '../assets/icon-location.png';
import hourglass from '../assets/icon-hourglass.png';

function Cursos({cursos}) {
    return(
        <section id="cursos">
            <div id="options">
                <ul>
                    {cursos.map((curso) => 
                    (
                        <li className="cardCurso" key={curso.id}>
                            <div className="imagem">
                                <img src={curso.image} alt="" />
                            </div>
                            <div className="text-icons">
                                <div className="text">
                                    <h2>{curso.name}</h2>
                                    <p>{curso.description}</p>
                                </div>
                                <div className="items">
                                    <div className="icons">
                                        <div className="icon">
                                            <div className="icon-image">
                                                <img src={location} alt="" />
                                            </div>
                                            <p>{curso.location}</p>
                                        </div>
                                        <div className="icon">
                                            <div className="icon-image">
                                                <img src={calendar} alt="" />
                                            </div>
                                            <p>{curso.date}</p>
                                        </div>
                                        <div className="icon">
                                            <div className="icon-image">
                                                <img src={clock} alt="" />
                                            </div>
                                            <p>{curso.hour}</p>
                                        </div>
                                        <div className="icon">
                                            <div className="icon-image">
                                                <img src={hourglass} alt="" />
                                            </div>
                                            <p>300h</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <a href={curso.link} target='_blank' rel="noreferrer">
                                            <button>Matricule-se</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Cursos;