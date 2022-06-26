const Item = ({ product }) => {
  return (
    <div className='card w-80 bg-primary-focus shadow-xl my-8 mx-2'>
      <figure>
        <img src={product.img} alt='' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title justify-center'>US${product.price}</h2>
        <p>{product.name}</p>
        <div>
          <button className='btn w-24 bg-primary-content mt-4 justify-center'>Details</button>
        </div>
      </div>
    </div>
  );
};

export { Item };
