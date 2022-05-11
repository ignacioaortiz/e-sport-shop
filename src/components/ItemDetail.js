const ItemDetail = ({ items }) => {
  return (
    <div class='card card-side w-92 bg-base-100 shadow-xl my-4 mx-2'>
      <figure>
        <img src={items.images} alt='Movie' />
      </figure>
      <div class='card-body justify-center'>
        <h2 class='card-title justify-center'>{items.name}</h2>
        <p>{items.price}</p>
        <p className='text-xs'>{items.description}</p>
        <div class='card-actions justify-end'>
          <button class='btn btn-primary'>Buy</button>
        </div>
      </div>
    </div>
  );
};

export { ItemDetail };
