import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { MessageSuccess } from './MessageSuccess';

// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const initialState = {
  name: '',
  phone: '',
  email: '',
};

export const Checkout = () => {
  const [buyer, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState('');
  const { cartList, totalBuy } = useCartContext();

  const handleOnChange = e => {
    const { value, name } = e.target;
    setValues({ ...buyer, [name]: value });
  };

  const items = cartList.map(prod => {
    const id = prod.id;
    const price = prod.price;
    return { id, price };
  });

  const onSubmit = async e => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'purchases'), {
      buyer,
      items,
      date: new Date(),
      total: totalBuy(),
    });
    /* console.log('Document written with ID: ', docRef.id); */
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div>
      <h1>Check Out</h1>
      <form onSubmit={onSubmit}>
        <input
          className='input w-full max-w-xs mb-4'
          type='text'
          placeholder='Name'
          name='name'
          value={buyer.name}
          onChange={handleOnChange}
        />
        <input
          className='input w-full max-w-xs mb-4'
          type='text'
          placeholder='Phone'
          name='phone'
          value={buyer.phone}
          onChange={handleOnChange}
        />
        <input
          className='input w-full max-w-xs mb-4'
          type='text'
          placeholder='Email'
          name='email'
          value={buyer.email}
          onChange={handleOnChange}
        />
        <button className='btn btn-primary'>Send</button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};
