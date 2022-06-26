import { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handlerAdd = () => {
    count < stock ? setCount(count + 1) : alert('Superaste el stock de productos :(');
  };

  const handlerRm = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <div className=' w-92 justify-center mt-2'>
      <div className='btn-group justify-center'>
        <button className='btn btn-xs' onClick={handlerRm}>
          -
        </button>
        <button className='btn btn-xs'>{count}</button>
        <button className='btn btn-xs' onClick={handlerAdd}>
          +
        </button>
      </div>
      <div className='card-actions justify-center'>
        <button className='btn bg-primary-content mt-4' onClick={() => onAdd(count)}>
          Buy
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
