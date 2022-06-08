import { useState, useContext } from 'react';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ items }) => {
  const { addToCart } = useContext(CartContext);

  const handlerOnAdd = cantidad => {
    setwasClicked(true);
    addToCart({ ...items, cantidad: cantidad });
  };

  const [wasClicked, setwasClicked] = useState(false);

  return (
    <div className='card card-side w-92 bg-base-100 shadow-xl my-4 mx-2'>
      <figure>
        <img src={items.images} />
      </figure>
      <div className='card-body justify-center'>
        <h2 className='card-title justify-center'>{items.name}</h2>
        <p>{items.price}</p>
        {wasClicked ? (
          <>
            <div className='card-actions justify-center'>
              <Link to='/'>
                {' '}
                <button className='btn btn-primary btn-sm'> Seguir comprando </button>
              </Link>
              <Link to='/cart'>
                {' '}
                <button className='btn btn-primary btn-sm'> Ir al Carrito </button>
              </Link>
            </div>
          </>
        ) : (
          <ItemCount initial={1} stock={5} onAdd={handlerOnAdd} />
        )}
      </div>
    </div>
  );
};

export { ItemDetail };
