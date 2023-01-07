import React from 'react';
import { Link } from 'react-router-dom';

function Bebidas({pratos}) {
    console.log(pratos.filter((prato) => prato.categoria === 'bebidas').map((prato) => console.log(prato.image)))
    return(
        <>
            <ul className="pratos">
                {pratos
                .filter((prato) => prato.categoria === 'bebidas')
                .map((prato) => 
                (
                    <li className="prato" key={prato.id}>
                        <div className="imagem">
                            <img src={prato.image} alt="" />
                        </div>
                        <div className="text">
                            <h3>{prato.name}</h3>
                            <p>{prato.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/cardapio">Voltar Página</Link>
        </>
    )
}

export default Bebidas;