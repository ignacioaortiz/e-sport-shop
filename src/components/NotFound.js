import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='card w-92 justify-center'>
      <h3>Todavia no tienes nada en el Carro!</h3>
      <Link to='/' className='mt-4'>
        <button className='btn btn-primary'>Ir a Productos!</button>
      </Link>
    </div>
  );
};
