import { createContext, useState, useContext } from 'react';
import productList from '../mocks/productList';

export const CartContext = createContext([]);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(product) {
    const index = cartList.findIndex(p => p.id === product.id);

    if (index > -1) {
      const oldItem = cartList[index].cantidad;
      cartList.splice(index, 1);
      setCartList([...cartList, { ...product, cantidad: product.cantidad + oldItem }]);
    } else {
      setCartList([...cartList, product]);
    }
  }

  const removeProduct = id => {
    const filteredCart = cartList.filter(product => product.id !== id);
    setCartList(filteredCart);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const cartCounter = () => {
    return cartList.reduce((prev, prod) => (prev = prev + prod.cantidad), 0);
  };

  const totalBuy = () => {
    return cartList.reduce((prev, prod) => prev + prod.cantidad * prod.price, 0);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, removeProduct, emptyCart, cartCounter, totalBuy }}>
      {children}
    </CartContext.Provider>
  );
};
