import './App.css';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart';
import { CartContextProvider } from './context/CartContext';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home greeting={'COMPRAR'} />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
