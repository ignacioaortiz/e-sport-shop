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
    <div className='btn-group w-24 justify-center'>
      <button className='btn btn-xs' onClick={handlerRm}>
        -
      </button>
      <button className='btn btn-xs'>{count}</button>
      <button className='btn btn-xs' onClick={handlerAdd}>
        +
      </button>
      <div className='card-actions'>
        <button className='btn btn-primary mt-4' onClick={() => onAdd(count)}>
          Buy
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
