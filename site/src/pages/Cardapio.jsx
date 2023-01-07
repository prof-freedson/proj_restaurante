import React from 'react';
import { Outlet } from 'react-router-dom';

function Cardapio() {
    return(
        <section id="cardapio">
            <div id="options">
                <Outlet />
            </div>
        </section>
    );
}

export default Cardapio;