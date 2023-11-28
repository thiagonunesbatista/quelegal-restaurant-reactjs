import { FidgetSpinner } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black-transparent-80'>
      <FidgetSpinner
        visible={true}
        height='100'
        width='100'
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor='#F4442E'
      />
    </div>
  );
};
