import React from 'react';

import restaurantImage1 from '../assets/senac2.jpg';
import restaurantImage2 from '../assets/senac4.jpg';
import restaurantImage3 from '../assets/senac5.jpg';

import premio1 from '../assets/premio1.jpg';
import premio2 from '../assets/premio2.jpg';
import premio3 from '../assets/premio3.jpg';

import prato1 from '../assets/prato-moqueca.jpg';
import prato2 from '../assets/prato-sarapatel.jpg';
import prato3 from '../assets/prato-arroz-de-cuxa.jpg';


function Sobre() {
    return(
        <section id="sobre">
            <section id="project" className="orange">
                <div className="content center">
                    <h1>O que é o Restaurante Escola Senac ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero eaque nostrum. Illo voluptas voluptates eaque libero velit nostrum officiis nesciunt dolore consequuntur, ex eveniet assumenda! Sapiente modi illum alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic tempora earum libero corporis nisi blanditiis dolor sequi, perferendis quia obcaecati, explicabo, consequuntur sunt quo dolorem quaerat optio quidem voluptatem!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error, culpa voluptas itaque optio, deleniti animi beatae unde eius voluptatibus id! Rem temporibus aut sit, exercitationem soluta voluptas doloremque et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error tempore libero dignissimos blanditiis, cum harum sequi aliquam laboriosam, ipsam earum itaque velit nostrum aspernatur accusamus consectetur provident? Animi, mollitia.</p>
                </div>
            </section>
            <section id="history" className="center">
                <div className="separation">
                    <div id="firstContent" className="block-to-right container">
                        <div id="textFirstContent">
                            <h2>Restaurante Escola Senac no Maranhão</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in, soluta voluptatum, repellendus a tempore beatae delectus, culpa ullam ut qui libero rerum facilis harum commodi dicta ad corrupti sequi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit natus necessitatibus. Exercitationem repellendus eos, maxime ea quos laborum, optio ipsam voluptate deleniti error molestiae et. Voluptates explicabo necessitatibus sunt.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in iusto nostrum? Placeat ipsam odio cupiditate at dolor aspernatur error libero animi nemo, modi commodi vel. Velit pariatur numquam quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora eaque voluptatem aspernatur quos in vitae provident nisi voluptas explicabo suscipit voluptates laudantium, repellat architecto reprehenderit maxime ab nesciunt qui a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut. Perferendis recusandae molestias quasi commodi consectetur obcaecati ipsam, rerum incidunt minus, iusto explicabo et voluptates modi. At sapiente facere ex.</p>
                        </div>
                        <div className="imagem">
                            <img src={restaurantImage1} alt="" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, doloremque ex odit, optio dolore ut accusantium perspiciatis, voluptas quas id consectetur molestias? Nam dignissimos libero autem perferendis incidunt soluta nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et modi sapiente suscipit, voluptate explicabo dolorum obcaecati veniam non in eveniet aperiam sequi officia error ratione quasi ut praesentium necessitatibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum recusandae error, eos natus quasi? Praesentium nostrum et illo vero, esse facilis quisquam harum animi quos, similique quasi sapiente natus.</p>
                </div>
                <div className="block-to-left container separation">
                    <div className="imagem">
                        <img src={restaurantImage2} alt="" />
                    </div>
                    <div className="text">
                        <h2>Onde Tudo Começou</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dicta, sunt culpa provident quae ab eum aliquid ducimus assumenda praesentium laudantium ex. Obcaecati aliquid rem, tempore dolore atque exercitationem voluptate!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta ducimus sit neque harum quos fuga accusamus nisi maxime aspernatur natus, cupiditate perspiciatis aliquam itaque, molestias accusantium aut corporis rem?</p>
                    </div>
                </div>
                <div className="block-to-right container separation">     
                    <div className="text">
                        <h2>Equipe Senac</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat corrupti laudantium omnis illo. Veniam tempora iusto ut, amet quia sit, velit provident incidunt repellendus, maiores molestiae assumenda magni!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione quibusdam modi vel officia aliquid sint similique, omnis accusamus. Neque enim similique iure culpa magni ad quas repellendus atque ducimus?</p>
                    </div>
                    <div className="imagem">
                        <img src={restaurantImage3} alt="" />
                    </div>
                </div>
            </section>
            <section id="rewards" className="orange">
                <div className="content center">
                    <h1>Premiações</h1>
                    <div id="cards">
                        <div className="cardNoticia">
                            <div className="imagem">
                                <img src={premio1} alt="" />
                            </div>
                            <h2>Selo Procon</h2>
                            <p>Lorem ipsum dolor metus sit as amet consectetur adipisicing wia elit. Nisi, doloremque est ham pariatur voluptatum perspiciatis iure deleniti totam velit libero quidem ducimus.</p>
                        </div>
                        <div className="cardNoticia">
                            <div className="imagem">
                                <img src={premio2} alt="" />
                            </div>
                            <h2>Certificado de Qualidade</h2>
                            <p>Lorem ipsum dolor metus sit as amet consectetur adipisicing wia elit. Nisi, doloremque est ham pariatur voluptatum perspiciatis iure deleniti totam velit libero quidem ducimus.</p>
                        </div>
                        <div className="cardNoticia">
                            <div className="imagem">
                                <img src={premio3} alt="" />
                            </div>
                            <h2>Melhor Chef</h2>
                            <p>Lorem ipsum dolor metus sit as amet consectetur adipisicing wia elit. Nisi, doloremque est ham pariatur voluptatum perspiciatis iure deleniti totam velit libero quidem ducimus.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="best-plates" className="center">
                <div className="block-to-left container separation">
                    <div className="imagem">
                        <img src={prato1} alt="" />
                    </div>
                    <div className="text">
                        <h2>Moqueca</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur voluptates nemo quis maxime voluptatem nisi illo architecto odio odit repellendus, perspiciatis illum excepturi laborum! Quam doloremque nihil itaque totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas labore minima ratione ab quod laboriosam veniam culpa fuga sunt fugiat, velit eligendi delectus cum quis ea neque inventore consequuntur.</p>
                    </div>
                </div>
                <div className="block-to-right container separation">
                    <div className="text">
                        <h2>Sarapatel</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nulla dignissimos consequuntur voluptatum, a odio corporis. Natus quasi voluptate reprehenderit! Laboriosam quam provident rerum vel eum hic eos, minus reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus eligendi dolores dolorem id numquam cum, assumenda, rerum laborum deleniti inventore, odio quo dignissimos unde dolor minus omnis distinctio reprehenderit.</p>
                    </div>
                    <div className="imagem">
                        <img src={prato2} alt="" />
                    </div>
                </div>
                <div className="block-to-left container separation">
                    <div className="imagem">
                        <img src={prato3} alt="" />
                    </div>
                    <div className="text">
                        <h2>Arroz de Cuxá</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis maxime quos saepe animi tenetur voluptates! Perferendis repellendus velit necessitatibus? Voluptatibus obcaecati repellendus voluptate officiis incidunt praesentium ullam ratione minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ipsum natus neque porro officiis dolorum eum commodi blanditiis aspernatur dignissimos deserunt veniam repudiandae incidunt, itaque dolorem, aperiam, tenetur quisquam quae!</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Sobre;