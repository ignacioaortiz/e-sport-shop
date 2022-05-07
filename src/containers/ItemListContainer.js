import { useState } from 'react';
import { ItemCount } from '../components/ItemCount';

const ItemListContainer = ({ greeting }) => {
  const [count, setCount] = useState(1);

  const onAdd = stock => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md flex flex-col items-center'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className='btn btn-primary mb-4'>{greeting}</button>
          <ItemCount stock={5} count={count} onAdd={onAdd} onSubtract={onSubtract} />
        </div>
      </div>
    </div>
  );
};

export { ItemListContainer };
