import { createContext, useState } from 'react';
import productList from '../mocks/productList';

export const CartContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(productList);

  const isInCart = id => {
    return items.findIndex(prod => prod.id === id);
  };

  const addItem = items => {
    if (isInCart(items.item.id) === -1) {
      setItems(items);
    } else {
    }
  };

  return <CartContext.Provider value={[items, setItems, addItem]}>{children}</CartContext.Provider>;
};
