import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.min.css';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Funkos available:' />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
          </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
