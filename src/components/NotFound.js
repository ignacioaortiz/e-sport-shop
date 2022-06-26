import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md flex flex-col items-center'>
          <h3>No tienes productos en tu Carro!</h3>
          <Link to='/products' className='mt-4'>
            <button className='btn btn-primary'>Ir a Productos!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
