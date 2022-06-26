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
    <div className='card w-80 bg-primary-focus shadow-xl my-8 mx-2'>
      <figure>
        <img src={items.img} alt='Imagen del Producto' />
      </figure>
      <div className='card-body justify-center'>
        <h2 className='card-title justify-center'>{items.name}</h2>
        <p>US${items.price}</p>
        <p className='text-xs'>{items.description}</p>
        {wasClicked ? (
          <>
            <div className='card-actions justify-center mt-2'>
              <Link to='/products'>
                {' '}
                <button className='btn bg-primary-content btn-sm'> Seguir comprando </button>
              </Link>
              <Link to='/cart'>
                {' '}
                <button className='btn bg-primary-content btn-sm'> Ir al Carrito </button>
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
