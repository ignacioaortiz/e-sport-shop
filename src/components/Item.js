const Item = ({ product }) => {
  return (
    <div class='card w-80 bg-base-100 shadow-xl mt-8'>
      <figure>
        <img src={product.images} alt='' />
      </figure>
      <div class='card-body'>
        <h2 class='card-title justify-center'>{product.price}</h2>
        <p>{product.name}</p>
      </div>
    </div>
  );
};

export { Item };
