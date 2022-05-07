const ItemCount = ({ stock, count, onAdd, onSubtract }) => {
  return (
    <div className='btn-group'>
      <button className='btn' onClick={onSubtract}>
        -
      </button>
      <button className='btn'>{count}</button>
      <button
        className='btn'
        onClick={() => {
          onAdd(stock);
        }}
      >
        +
      </button>
    </div>
  );
};

export { ItemCount };
