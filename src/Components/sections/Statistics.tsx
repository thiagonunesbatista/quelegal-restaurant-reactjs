import { Container } from '..';
import BeefImage from '../../assets/icons/beef.png';
import BurguerImage from '../../assets/icons/burguer.png';
import PizzaImage from '../../assets/icons/pizza.png';

const items = [
  {
    image: BurguerImage,
    text: 'Mais de 100 Bebidas'
  },
  {
    image: BeefImage,
    text: 'Mais de 1000 Clientes'
  },
  {
    image: PizzaImage,
    text: 'Mais de 100 Pratos'
  }
];

export const Statistics = () => {
  return (
    <section className='bg-beef bg-center bg-cover relative before:bg-black-transparent-80 before:absolute before:top-0 before:left-0 before:w-full before:h-full min-h-[500px] flex items-center py-12'>
      <Container className='z-10 relative w-full'>
        <div className='flex flex-col gap-12 md:flex-row justify-between'>
          {items.map((current, index) => (
            <div
              className='flex flex-col gap-8 items-center justify-center'
              key={index}
            >
              <img src={current.image} height={180} width={180} />
              <p className='text-white text-xl text-center font-extrabold'>
                {current.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
