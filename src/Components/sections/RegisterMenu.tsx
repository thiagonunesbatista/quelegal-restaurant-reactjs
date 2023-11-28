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
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[38rem] my-10 gap-4 shadow-2xl p-10 rounded-3xl">
      <p className="text-4xl mb-10">Cadastro de Prato</p>

      <form
        className="flex flex-col gap-6 w-[32rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border border-[#E0E0E0] p-3"
          placeholder="Nome do Prato"
          {...register("title")}
        />
        <input
          className="border border-[#E0E0E0] p-3"
          placeholder="Valor do Prato"
          {...register("price")}
        />
        <input
          className="border border-[#E0E0E0] p-3"
          placeholder="Imagem  do Prato"
          {...register("image")}
        />
        <textarea
          className="border border-[#E0E0E0] p-3 pb-20"
          placeholder="Descrição do Prato"
          {...register("description")}
        />

        <button
          className="bg-[#FF9F0D] text-white p-2 text-lg rounded-2xl w-[32rem]"
          type="submit"
=======
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
>>>>>>> 1bb5013cdc2a16079e8991f9a846f1cd7a5c2c0f
        >
          Cadastrar Prato
        </button>
      </form>
    </div>
  );
};
