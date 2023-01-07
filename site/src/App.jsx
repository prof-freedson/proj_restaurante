import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cardapio from './pages/Cardapio';
import Cursos from './pages/Cursos';
import Avaliacoes from './pages/Avaliacoes';
import Reserva from './pages/Reserva';
// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import CardapioPH from './components/CardapioPH';
import Entradas from './components/Entradas';
import Buffet from './components/Buffet';
import Sobremesas from './components/Sobremesas';
import Bebidas from './components/Bebidas';
// Imagens para o cardápio
import pratoEntrada1 from './assets/canapes-de-ricota.jpg';
import pratoEntrada2 from './assets/carpaccio-de-abobrinha.jpg';
import pratoEntrada3 from './assets/bruschetta-de-estepe.jpg';
import pratoEntrada4 from './assets/bolinho-cremoso.jpg';
import pratoBuffet1 from './assets/prato-arroz-de-cuxa.jpg';
import pratoBuffet2 from './assets/prato-carne-de-sol-acebolada.jpg';
import pratoBuffet3 from './assets/prato-sarapatel.jpg';
import pratoBuffet4 from './assets/prato-baiao-de-dois.jpg';
import pratoBuffet5 from './assets/prato-moqueca.jpg';
import pratoSobremesa1 from './assets/torta-mousse-de-chocolate.jpg';
import pratoSobremesa2 from './assets/verrine-de-frutas.jpg';
import pratoSobremesa3 from './assets/romeu-e-julieta.jpg';
import bebida1 from './assets/bebida-manhattan.jpg';
import bebida2 from './assets/bebida-negroni.jpg';
import bebida3 from './assets/bebida-sidra.jpg';
// Imagens para os cursos
import cursoPizza from './assets/curso-pizza.jpg';
import cursoConfeitaria from './assets/curso-confeitaria.jpg';


function App() {
  const pratos = [
    {
      id: 1,
      categoria: 'entradas',
      name: 'Canapés de Ricota',
      image: pratoEntrada1,
      description: "Um canapé é um tipo de hors d'œuvre, um alimento pequeno, preparado e frequentemente decorativo, consistindo em um pequeno pedaço de pão, massa folhada ou um biscoito coberto com um pouco de comida salgada, mantido nos dedos e frequentemente comido em uma mordida."
    },
    {
      id: 2,
      categoria: 'entradas',
      name: 'Capaccio de Abobrinha',
      image: pratoEntrada2,
      description: 'O carpaccio de abobrinha é um prato que pode ser utilizado como aperitivo ou acompanhamento. Já os ingredientes que costumam compor a versão com carne do preparo, como as alcaparras e o queijo ralado, aparecem nas receitas. Também há versões low carb e veganas.'
    },
    {
      id: 3,
      categoria: 'entradas',
      name: 'Bruschetta de Estepe',
      image: pratoEntrada3,
      description: 'A bruschetta é um antepasto italiano feito com uma fatia de pão rústico, de farinha escura e grossa, de casca dura, tostada na grelha, esfregada com alho, untada com abundante azeite e polvilhada com sal e eventualmente com pimenta-do-reino. Essa é uma receita típica italiana, que tem sabor familiar e acolhedor.'
    },
    {
      id: 4,
      categoria: 'entradas',
      name: 'Bolinho Cremoso de Arroz e Legumes',
      image: pratoEntrada4,
      description: 'Com ingredientes suaves, a receita consegue unir elementos leves e bem característicos para abrir o apetite. Preparado com arroz integral, a entrada ajuda a diminuir a fome até a próxima refeição, já que o alimento é fonte de fibras alimentares responsáveis por proporcionar maior saciedade.'
    },
    {
      id: 1,
      categoria: 'buffet',
      name: 'Arroz de Cuxa',
      image: pratoBuffet1,
      description: 'O cuxá é uma hortaliça saborosa, um pouquinho azeda e muito usada na culinária do Maranhão. Um dos pratos mais populares da região é o arroz de cuxá. Muito saboroso, ele é perfeito para servir em um almoço com a família e os amigos e, com certeza, vai conquistar diferentes paladares.'
    },
    {
      id: 2,
      categoria: 'buffet',
      name: 'Carne de Sol',
      image: pratoBuffet2,
      description: 'A carne de sol é muito consumida no Mato Grosso do Sul. Diferente do charque e da carne seca, ela possui a cor mais escura e é menos salgada, além disso, é muito macia e saborosa.'
    },
    {
      id: 3,
      categoria: 'buffet',
      name: 'Sarapatel',
      image: pratoBuffet3,
      description: 'O sarapatel, conhecido como “sarrabulho” em algumas regiões, é um prato típico da culinária nordestina, preparado com tripas e outras vísceras de porco, além de sangue coalhado. Tem origem no Alto Alentejo português, onde tradicionalmente o sarapatel alentejano é preparado com borrego ou cabrito.'
    },
    {
      id: 4,
      categoria: 'buffet',
      name: 'Baião de Dois',
      image: pratoBuffet4,
      description: 'Existe dupla mais popular que essa? Arroz com feijão já se completam, combinados com carne-seca, queijo de coalho e bacon então... Vai dar samba, ou melhor, baião!'
    },
    {
      id: 5,
      categoria: 'buffet',
      name: 'Moqueca',
      image: pratoBuffet5,
      description: 'A moqueca, muqueca ou poqueca é um cozido, geralmente de peixe, típico da culinária brasileira e da culinária angolana. '
    },
    {
      id: 1,
      categoria: 'sobremesas',
      name: 'Torta Mousse de Chocolate',
      image: pratoSobremesa1,
      description: 'Muito bem recheada com misturas super cremosas e coberturas que geralmente são de chantili e/ou marshmallow. Os recheios preferencialmente, são feitos com ingredientes frescos como as frutas, que dão um sabor mais delicado à sobremesa.'
    },
    {
      id: 2,
      categoria: 'sobremesas',
      name: 'Verrine de Frutas Vermelhas',
      image: pratoSobremesa2,
      description: 'As sobremesas do tipo verrine são sempre uma atração à parte, já que aparecem em recipientes de vidro revelando seu conteúdo em camadas.'
    },
    {
      id: 3,
      categoria: 'sobremesas',
      name: 'Romeu e Julieta',
      image: pratoSobremesa3,
      description: 'Perfeita para quem gosta de doces mais suaves sem um dulçor forte.',
    },
    {
      id: 1,
      categoria: 'bebidas',
      name: 'Manhattan',
      image: bebida1,
      description: 'Um clássico dos filmes de Hollywood, o drink Manhattan é sofisticado e delicioso.'
    },
    {
      id: 2,
      categoria: 'bebidas',
      name: 'Negroni',
      image: bebida2,
      description: 'De origem italiana, o negroni é prático e saboroso. Ele é feito com gin, campari, vermute tinto, gelo e laranja para decorar.'
    },
    {
      id: 3,
      categoria: 'bebidas',
      name: 'Sidra',
      image: bebida3,
      description: 'A sidra, uma das bebidas mais antigas do mundo, existem registos do seu consumo de há sete mil anos, tem reconquistado públicos em Portugal, como noutros países. '
    },
  ];
  
  const cursos = [
    {
      id: 1,
      name: 'Pizzas',
      image: cursoPizza,
      description: 'Este curso tem como objetivo promover a construção de conhecimentos relativos ao preparo de variados tipos de pizzas, aplicando as regras de higiene pessoal, ambiental e de manipulação de alimentos.',
      location: 'Restaurante Senac',
      date: '26/04 - 30/04',
      hour: '08h-12h',
      link: 'http://www.ma.senac.br/cursos/pizzas/?codigouo=3',
    },
    {
      id: 2,
      name: 'Técnicas Básicas em Confeitaria',
      image: cursoConfeitaria,
      description: 'Este curso tem como objetivo desenvolver o aluno para a aquisição de conhecimentos básicos em confeitaria, adotando os princípios de manipulação e segurança dos alimentos.',
      location: 'Centro de Educação',
      date: '24/05 - 27/05',
      hour: '08h-12h',
      link: 'http://www.ma.senac.br/cursos/tecnicas-basicas-em-confeitaria/?codigouo=3',
    },
  ];
  
return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cursos" element={<Cursos cursos={cursos}/>} />
          <Route path="/cardapio/*" element={<Cardapio pratos={pratos} />} >
            <Route path="" element={<CardapioPH />} />
            <Route path="entradas" element={<Entradas pratos={pratos}/>} />
            <Route path="buffet" element={<Buffet pratos={pratos}/>} />
            <Route path="sobremesas" element={<Sobremesas pratos={pratos}/>} />
            <Route path="bebidas" element={<Bebidas pratos={pratos}/>} />
          </Route>
          <Route path="/reservas" element={<Reserva />} />
          <Route path="/avaliacoes" element={<Avaliacoes />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
