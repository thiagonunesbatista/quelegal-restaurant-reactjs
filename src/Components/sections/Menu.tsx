import { useState } from 'react';
import { MenuItems } from '../../modules.d.ts';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

type MenuProps = {
  items: MenuItems[];
};
export const Menu = ({ items }: MenuProps) => {
  const [open, setOpen] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');

  const onOpenModal = (description: string) => {
    setOpen(true);
    setCurrentDescription(description);
  };
  const onCloseModal = () => setOpen(false);

  return (
    <section className='flex flex-wrap justify-center my-10 gap-10'>
      {items.map((current: MenuItems, index) => (
        <div
          key={index}
          className='justify-between border border-black gap-5 rounded-xl w-96 h-48 flex p-5 items-center'
        >
          <img
            src={current.image}
            width={150}
            height={150}
            className='rounded-3xl object-cover w-[150px] h-[150px]'
          />
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-medium'>{current.title}</h2>

            <h2 className='font-medium'>Preço: {current.price}</h2>

            <h2 className='text-slate-600'>
              <a onClick={() => onOpenModal(current.description)} href='#'>
                Ver Descrição
              </a>
            </h2>
          </div>
          <Modal open={open} onClose={onCloseModal}>
            <div>
              <h2>{currentDescription}</h2>
            </div>
          </Modal>
        </div>
      ))}
    </section>
  );
};
