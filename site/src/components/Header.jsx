import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/senac_logo.svg";

function header(){
    return(
        <div className="heade">
            <header className="header">
                <div className="cabe">
                    <div>
                        <img src={logo} className="logo" alt="imagem da logo" />
                    </div>
                    <div id="navLinks">
                        <br />
                        <Link to="/">Início</Link> 
                        <Link to="/sobre">Sobre</Link>
                        <Link to="/cardapio">Cardápio</Link>
                        <Link to="/cursos">Cursos</Link>
                        <Link to="/reservas">Reservas</Link>
                        <Link to="/avaliacoes">Avaliações</Link>
                    </div>
                </div>
            </header>
        </div>
    );
 }
export default header;