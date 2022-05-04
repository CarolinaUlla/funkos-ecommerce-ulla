import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
//import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';

  // function cart (){
  //   console.log('item agregado');
  // };

  function getProducts(category) {
    const myPromise = new Promise((resolve, reject) => {
  const productsList = [
    {
      id: 1,
      title: 'Harry potter',
      image: 'https://m.media-amazon.com/images/I/71n40hBlR4L._AC_SL1500_.jpg',
      detail:'Funko medium',
      price: '$2700',
      category: 'funkoMedium'
    },

    {
      id: 2,
      title: 'Breaking bad- Walter White',
      image: 'https://m.media-amazon.com/images/I/41S1lN96GHL._AC_.jpg',
      detail:'Funko medium',
      price: '$2900',
      category: 'funkoMedium'
    },

    {
      id: 3,
      title: 'The Walking dead- Daryl',
      image: 'https://m.media-amazon.com/images/I/61IjS-2zasL._AC_SY606_.jpg',
      detail:'Funko key chain',
      price: '$1500',
      category: 'funkoKeyChain'
    },

    {
      id: 4,
      title: 'Stranger things- Eleven',
      image: 'https://m.media-amazon.com/images/I/61nEyJzOMDL._AC_SY606_.jpg',
      detail:'Funko large',
      price: '$5100',
      category: 'funkoLarge'
    }
  ];
  const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList;
  setTimeout(() => {
    resolve(productsFiltered);
  }, 2000);
});
return myPromise;
}


function ItemListContainer({greeting}) {
  const [products, setProducts] = useState ([]);
  const {categoryId} = useParams();

  useEffect(() => {
    getProducts (categoryId)
    .then((response) => setProducts(response))
    .catch((err) => console.log('error', err))
  }, [categoryId]);
 
  return (
    <div>
      <div className='box cta' >
        <p>{greeting}</p>
      </div>
        <ItemList items ={products}></ItemList>
      {/* <ItemCount stock={5} initial={0} onAdd={cart}></ItemCount> */}
    </div>
  )
}

export default ItemListContainer;