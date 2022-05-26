import { useState, useContext } from 'react';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = () => {
  const [count, setCount] = useState(1);
  const [irCart, setIrCart] = useState(false);
  const [items, setItems, addItem] = useContext(CartContext);

  const onAdd = stock => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onBuy = () => {
    alert(`Su compra de ${count} articulos fue exitosa`);
    setIrCart(true);
    addItem({ items: items, quantity: count });
  };

  return (
    <div className='card card-side w-92 bg-base-100 shadow-xl my-4 mx-2'>
      <figure>
        <img src={items.images} alt='Movie' />
      </figure>
      <div className='card-body justify-center'>
        <h2 className='card-title justify-center'>{items.name}</h2>
        <p>{items.price}</p>
        {irCart ? (
          <button className='btn btn-primary mt-4'>
            <Link to={'/cart'}>Ir al Carrito</Link>
          </button>
        ) : (
          <ItemCount stock={5} count={count} onSubtract={onSubtract} onAdd={onAdd} onBuy={onBuy} />
        )}
      </div>
    </div>
  );
};

export { ItemDetail };
