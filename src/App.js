import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart';
import { CartContextProvider } from './context/CartContext';
import { useState, useEffect } from 'react';

//FIREBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

function App() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, 'products'));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductsData();
    };
    getProducts();
  }, []);

  return (
    <Router>
      <CartContextProvider>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'GET STARTED'} />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
