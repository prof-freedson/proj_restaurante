import React from 'react';
import { Link } from 'react-router-dom';
import IMGentrada from '../assets/entradas.jpg';
import IMGbuffet from '../assets/buffet.jpg';
import IMGsobremesas from '../assets/sobremesas.jpg';
import IMGbebidas from '../assets/bebidas.jpg';

function CardapioPH() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="entradas">
                        <div className="container">
                            <img src={IMGentrada} alt="" />
                            <div className="text">
                                <p>Entradas</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="buffet">
                        <div className="container">
                            <img src={IMGbuffet} alt="" />
                            <div className="text">
                                <p>Buffet</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="sobremesas">
                        <div className="container">
                            <img src={IMGsobremesas} alt="" />
                            <div className="text">
                                <p>Sobremesas</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="bebidas">
                        <div className="container">
                            <img src={IMGbebidas} alt="" />
                            <div className="text">
                                <p>Bebidas</p>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default CardapioPH;