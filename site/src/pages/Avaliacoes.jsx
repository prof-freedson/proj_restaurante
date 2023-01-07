import React from 'react';
import star from '../assets/icon-star.png';

import personImage1 from '../assets/selfie-smiling-woman.jpg';
import personImage2 from '../assets/selfie-happy-girl.jpg';
import personImage3 from '../assets/selfie-pleased-young-couple.jpg'

function Avaliacoes() {
    return(
        <section id="testimonials">
                <h1>O que os clientes dizem sobre nós ?</h1>
            <div id="avaliacoes">
                <div className="testimonialCard">
                    <div className="imagem">
                        <img src={personImage1} alt="" />
                    </div>
                    <div className="text">
                        <h2>Júlia Silva</h2>
                        <p>Nas sextas-feiras no almoço tem um buffet imperdível de frutos do mar.</p>
                    </div>
                    <div id="stars">
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                <div className="testimonialCard">
                    <div className="imagem">
                        <img src={personImage2} alt="" />
                    </div>
                    <div className="text">
                        <h2>Dayane Avelar</h2>
                        <p>Comida de buffet boa e inclui sobremesa, ambiente tranquilo, boa localização.</p>
                    </div>
                    <div id="stars">
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                <div className="testimonialCard">
                    <div className="imagem">
                        <img src={personImage3} alt="" />
                    </div>
                    <div className="text">
                        <h2>Kaio Júnior</h2>
                        <p>Restaurante agradável, comida maravilhosa, fomos muito bem servidos e recebidos! Valor fixo por pessoa que vale muitíssimo a pena.</p>
                    </div>
                    <div id="stars">
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                        <div className="starIcon">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Avaliacoes;