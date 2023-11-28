import { useForm } from 'react-hook-form';

// import { Input } from '../Input';

export const RegisterMenu = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    const currentSaved = localStorage.getItem('added-menu');

    if (currentSaved) {
      const transformed = JSON.parse(currentSaved);
      console.log('transformed');
      console.log(transformed);

      transformed.push(data);
      localStorage.setItem('added-menu', JSON.stringify(transformed));
    } else {
      localStorage.setItem('added-menu', JSON.stringify([data]));
    }
  };

  return (
    <div className='flex flex-col mx-auto w-full max-w-[400px] my-10'>
      <p>Cadastro de Prato</p>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Nome do Prato' {...register('title')} />
        <input placeholder='Valor do Prato' {...register('price')} />
        <input placeholder='Imagem  do Prato' {...register('image')} />
        <input placeholder='Descrição do Prato' {...register('description')} />

        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
};
