import logo from '../assets/imagem-inicial.jpg';

import friends from '../assets/group-friends.jpg';

function Home() {
  return (
    <>
      <div className="App">
        <section className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bem-Vindo ao <br/> Restaurante Escola Senac.</p>
          {/* <a
            className="App-link"
            href="https://www.instagram.com/restaurantesenacma/"
            target=""
      
          >
           <button>Clique Aqui</button>
          </a> */}
        </section>
      </div>
      <section id="button">
        <button id="reservar">Reservar Mesa</button>
      </section>
      <section id="imagem">
        <img src={friends} alt="" />
      </section>
      <section id="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9328739108887!2d-44.306979584885696!3d-2.52881339815734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68eddb42efe1f%3A0x868a1867c867e229!2sRestaurante%20Escola%20Senac!5e0!3m2!1spt-BR!2sbr!4v1671470161916!5m2!1spt-BR!2sbr" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="restaurante escola"></iframe>
      </section>
    </>
  );
}

export default Home;
