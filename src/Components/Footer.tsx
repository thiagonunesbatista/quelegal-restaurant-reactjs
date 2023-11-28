import { FaHeart } from 'react-icons/fa6';

export const Footer = () => (
  <footer className='flex justify-center items-center bg-secondary h-20 text-xl'>
    <p className='text-primary flex gap-2 flex-wrap justify-center items-center'>
      Feito com
      <span>
        <FaHeart size={24} />
      </span>
      por Herval Technologies LTDA
    </p>
  </footer>
);
