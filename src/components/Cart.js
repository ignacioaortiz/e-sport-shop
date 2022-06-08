import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { NotFound } from './NotFound';

export const Cart = () => {
  const { cartList, emptyCart, removeProduct, totalBuy } = useCartContext();

  return (
    <div className='h-full'>
      {!cartList.length > 0 ? (
        <>
          <NotFound className='flex justify-center' />
        </>
      ) : (
        <div className='flex flex-col items-center h-full'>
          <h3 className='title'>Cart</h3>

          {cartList.map(prod => (
            <Link to={`/item/${prod.id}`}>
              <div key={prod.id} className='cart w-92 bg-base-100 shadow-xl mt-8'>
                <img src={prod.images} className='rounded h-32 mx-6' alt='' />
                <div className='mx-3'>
                  <h4 className='text-lg my-3'>{prod.name}</h4>
                  <div className='flex flex-col items-start mb-3'>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Price: {prod.price}</p>
                    <p>Subtotal: {prod.price * prod.cantidad}</p>
                  </div>
                </div>
                <button key={prod.id} onClick={() => removeProduct(prod.id)}>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
              </div>
            </Link>
          ))}

          <h4 className='text-2xl font-bold py-8'>Total: {totalBuy()}</h4>
          <div className='pt-8 flex'>
            {/* <Link to='/checkout'>
              <button className='btn btn-primary btn-sm mr-1'>Check-Out</button>
            </Link> */}
            <button className='btn btn-primary btn-sm ml-1' onClick={emptyCart}>
              Limpiar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
