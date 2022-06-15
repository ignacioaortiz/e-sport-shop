import { Link } from 'react-router-dom';

export const Home = ({ greeting }) => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md flex flex-col items-center'>
          <h1 className='mb-5 text-4xl font-bold'>e-Sports Shop</h1>
          <Link to='/products'>
            <button className='btn btn-primary mt-4'>{greeting}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
