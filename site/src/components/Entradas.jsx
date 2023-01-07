import React from 'react';
import { Link } from 'react-router-dom';

function Entradas({pratos}) {
    console.log(pratos.filter((prato) => prato.categoria === 'entradas').map((prato) => console.log(prato.image)))
    return(
        <>
            <ul className="pratos">
                {pratos
                .filter((prato) => prato.categoria === 'entradas')
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

export default Entradas;