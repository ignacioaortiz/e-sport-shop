import { Link } from 'react-router-dom';

const ItemCount = ({ stock, count, onAdd, onSubtract, onBuy }) => {
  return (
    <div className='btn-group w-24 justify-center'>
      <button className='btn btn-xs' onClick={onSubtract}>
        -
      </button>
      <button className='btn btn-xs'>{count}</button>
      <button
        className='btn btn-xs'
        onClick={() => {
          onAdd(stock);
        }}
      >
        +
      </button>
      <div className='card-actions'>
        <button className='btn btn-primary mt-4' onClick={onBuy}>
          Buy
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
