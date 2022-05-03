import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
//import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import getData from '../../services/getData'


function ItemListContainer({greeting}) {
  // function cart (){
  //   console.log('item agregado');
  // };
  const [products, setProducts] = useState ([]);

  useEffect(() => {
    getData
    .then((response) => setProducts(response))
    .catch((err) => console.log('error', err))
  }, []);
 
  return (
  <>
  <div className='box cta' >
    <p>{greeting}</p>
    </div>
    <section class="section container">
    <div class="columns features">
    <ItemList products ={products}></ItemList>
    </div>
    {/* <ItemCount stock={5} initial={0} onAdd={cart}></ItemCount> */}
    </section>
  </>
  )
}

export default ItemListContainer;