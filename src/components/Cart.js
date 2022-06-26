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
        <div className='flex flex-col items-center h-full my-8'>
          {cartList.map(prod => (
            <>
              <div className='card card-body w-60 h-92 bg-primary-focus mb-8'>
                <Link to={`/item/${prod.id}`} key={prod.id}>
                  <img src={prod.img} className='rounded' alt='' />
                  <div className='mx-3'>
                    <h4 className='text-lg my-3'>{prod.name}</h4>
                    <div className='flex flex-col items-start mb-3'>
                      <p>Quantity: {prod.cantidad}</p>
                      <p>Price: US${prod.price}</p>
                      <p>Subtotal: US${prod.price * prod.cantidad}</p>
                    </div>
                  </div>
                </Link>
                <div>
                  <button className='btn bg-primary-content' onClick={() => removeProduct(prod.id)}>
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
              </div>
            </>
          ))}

          <h4 className='text-2xl font-bold pb-8'>Total: US${totalBuy()}</h4>
          <div className='pt-2 pb-4 flex'>
            <button className='btn btn-primary btn-sm mr-1' onClick={emptyCart}>
              Clean Cart
            </button>
            <Link to='/checkout'>
              <button className='btn btn-primary btn-sm ml-1'>Check Out</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
