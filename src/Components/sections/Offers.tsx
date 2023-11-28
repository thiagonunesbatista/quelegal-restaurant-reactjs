import { Container } from '..';
import Crocodile from '../../assets/menu/crocodile-menu.png';
import Spider from '../../assets/menu/spider-menu.png';

const currentOffers = [
  {
    price: 200,
    image: Crocodile
  },
  {
    price: 100,
    image: Spider
  }
];

export const Offers = () => {
  return (
    <Container className='flex flex-col justify-center items-center gap-8 lg:flex-row my-40'>
      {currentOffers.map((offer, index) => (
        <div className='w-full max-w-[600px] flex flex-col gap-4' key={index}>
          <img
            src={offer.image}
            className='rounded-2xl object-cover h-[400px]'
            width={600}
            height={400}
          />
          <p className='text-center uppercase font-roadrage text-5xl'>
            por apenas <span className='text-primary'> R$ {offer.price}</span>
          </p>
        </div>
      ))}
    </Container>
  );
};
