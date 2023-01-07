import React from "react";
import insta from "../assets/instagram.png";
import face from "../assets/facebook.png";
import logo from "../assets/senac_logo_branco.png";

function footer() {
  return (
    <div className="footer">
      <footer className="foo">
        <br />
        <img src={logo} className="senac" alt=""/>
        <h2 className="fema">fecomercio|MA</h2>
        <section className="sociais">
          <a href="https://www.instagram.com/restaurantesenacma/">
            {" "}
            <img src={insta} className="ins" alt=""/>
          </a>
          <a href="https://pt-br.facebook.com/restaurantesenacma/">
            {" "}
            <img src={face} className="face" alt=""/>
          </a>
        </section>
        <br />
        <div className="text">
          <section className="link">
            <a href="https://www.google.com/" className="lin">
              Serviços
            </a>
            <br />
            <br />
            <a href="https://www.google.com/"> Cardapio</a>
            <a href="https://www.google.com/" className="dis">
              {" "}
              Reservas{" "}
            </a>
            <br />
            <br />
            <a href="https://www.google.com/"> Historia/Missão </a>
            <a href="https://www.google.com/" className="dis">
              {" "}
              Cursos{" "}
            </a>
            <br />
            <br />
            <a href="https://www.google.com/"> Localização </a>
            <a href="https://www.google.com/" className="dis">
              {" "}
              Notícias{" "}
            </a>
            <br />
            <br />
          </section>

          <section className="endereco">
            <h3 className="en1">Endereço : </h3>
            <h3 className="en2">
              R. do Passeio, 495 - Centro, São Luís - MA, 65015-350 <br />
              telefone: (98) 3198-1515 <br />
              emal:ouvidoria@ma.senac.br
            </h3>
          </section>
        </div>
        <br />
        <br />
      </footer>
    </div>
  );
}

export default footer;