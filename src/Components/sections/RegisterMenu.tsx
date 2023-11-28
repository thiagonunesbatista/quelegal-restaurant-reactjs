import { useForm } from 'react-hook-form';

// import { Input } from '../Input';
type types = {
  onAdd: () => void;
};

export const RegisterMenu = ({ onAdd }: types) => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const currentSaved = localStorage.getItem('added-menu');

    if (currentSaved) {
      const transformed = JSON.parse(currentSaved);

      transformed.push(data);
      localStorage.setItem('added-menu', JSON.stringify(transformed));
    } else {
      localStorage.setItem('added-menu', JSON.stringify([data]));
    }
    onAdd();
    reset();
  };

  return (
    <div className='flex flex-col items-center mx-auto w-full max-w-[400px] my-10 gap-4 shadow-2xl p-10'>
      <p>Cadastro de Prato</p>

      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='border border-[#E0E0E0]'
          placeholder='Nome do Prato'
          {...register('title')}
        />
        <input
          className='border border-[#E0E0E0]'
          placeholder='Valor do Prato'
          {...register('price')}
        />
        <input
          className='border border-[#E0E0E0]'
          placeholder='Imagem  do Prato'
          {...register('image')}
        />
        <input
          className='border border-[#E0E0E0]'
          placeholder='Descrição do Prato'
          {...register('description')}
        />

        <button
          className='bg-[#FF9F0D] text-white p-2 text-lg rounded-2xl'
          type='submit'
        >
          Cadastrar Prato
        </button>
      </form>
    </div>
  );
};
