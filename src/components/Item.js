const Item = ({ product }) => {
  return (
    <div className='card w-80 bg-base-100 shadow-xl mt-8'>
      <figure>
        <img src={product.img} alt='' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title justify-center'>{product.price}</h2>
        <p>{product.name}</p>
      </div>
    </div>
  );
};

export { Item };
