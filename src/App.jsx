import './App.css';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* { <ItemListContainer greeting='Funkos available:'/> } */}
       <ItemDetailContainer></ItemDetailContainer> 
    </div>
  );
}

export default App;
