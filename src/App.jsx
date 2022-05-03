import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.min.css';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Funkos available:' />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
