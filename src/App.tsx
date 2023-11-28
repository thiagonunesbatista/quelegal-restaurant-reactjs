import { createServer } from 'miragejs';
import { useEffect, useState } from 'react';

import { Hero, Footer, Navbar, Loader } from './Components';
import { Menu, Offers, RegisterMenu, Statistics } from './Components/sections';

createServer({
  routes() {
    this.get('/api/menu', () => [
      {
        title: 'Jacaré ao molho madeira - 1KG',
        price: 150,
        description:
          'Delicie-se com a exótica e suculenta iguaria do Jacaré ao Molho Madeira - uma obra-prima culinária que combina a tenra carne de jacaré com o sabor encorpado e levemente adocicado do molho madeira. Este prato de 1kg oferece uma experiência gastronômica única, onde a carne macia do jacaré é cuidadosamente preparada, resultando em uma textura suculenta e um sabor delicadamente selvagem. Banhado em um molho madeira refinado, que harmoniza perfeitamente com os sabores naturais da carne, esta criação culinária é uma festa para os sentidos, capaz de encantar paladares exigentes e apaixonados por novas experiências gastronômicas. Uma mistura equilibrada de sabores, texturas e um toque de exotismo, o Jacaré ao Molho Madeira de 1kg é uma verdadeira celebração da culinária refinada e da ousadia gourmet',
        image: 'https://fakeimg.pl/600x400'
      },
      {
        title: 'Lebre à Moda da casa - 1 Un',
        price: 100,
        description:
          'Uma experiência gastronômica incomparável aguarda os paladares mais refinados com a Lebre à Moda da Casa. Esta criação singular é um tributo à tradição e à sofisticação culinária, apresentando uma lebre meticulosamente preparada e temperada com maestria. Cada mordida revela a suculência e a textura delicada dessa carne nobre, cuidadosamente elaborada para proporcionar uma experiência gastronômica única. Com a receita exclusiva da casa, a lebre é cozida de maneira que preserva seus sabores naturais, realçados por um refinado conjunto de temperos e ervas selecionadas. Esta peça única, servida em sua plenitude, é um convite para apreciar a culinária refinada em sua expressão mais autêntica e saborosa. A Lebre à Moda da Casa é mais que um prato, é uma celebração da arte culinária e uma jornada sensorial para os verdadeiros apreciadores da alta gastronomia.',
        image: 'https://fakeimg.pl/600x400'
      },
      {
        title: 'Tatu na casca - 1KG',
        price: 50,
        description:
          'Descubra uma experiência culinária rica em sabores e tradição com o Tatu na Casca. Este prato excepcional mergulha os sentidos em uma aventura gastronômica única, apresentando a suculenta carne de tatu, delicadamente preparada e servida em sua própria casca. Cada pedaço deste prato de 1kg é uma celebração da natureza, com a carne macia do tatu capturando os aromas e sabores de um cozimento cuidadoso. O sabor naturalmente robusto da carne é acentuado pelos temperos e ervas finas, proporcionando uma experiência gastronômica que é ao mesmo tempo ousada e tradicional. A apresentação na casca adiciona um toque de autenticidade e charme rústico, destacando a essência e a beleza desse prato regional. Prepare-se para uma jornada culinária única, onde a tradição se encontra com a criatividade, e os sabores da natureza são celebrados em cada deliciosa porção do Tatu na Casca.',
        image: 'https://fakeimg.pl/600x400'
      }
    ]);
  }
});

const App = () => {
  const [menuList, setMenuList] = useState([]);
  const [isLoading, setIsLoadig] = useState(false);

  useEffect(() => {
    const loadData = () => {
      setIsLoadig(true);

      fetch('/api/menu')
        .then(response => response.json())
        .then(json => {
          let dataToStore = json;

          const currentSaved = localStorage.getItem('added-menu');

          if (currentSaved) {
            const transformed = JSON.parse(currentSaved);
            console.log('transformed');
            console.log(transformed);
            dataToStore = dataToStore.concat(transformed);
          }

          setMenuList(dataToStore);
        })
        .finally(() => setIsLoadig(false));
    };

    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Statistics />

      <RegisterMenu />

      <Menu items={menuList} />

      <Footer />

      {isLoading && <Loader />}
    </div>
  );
};

export default App;
