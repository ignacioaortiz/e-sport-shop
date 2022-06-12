import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
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
