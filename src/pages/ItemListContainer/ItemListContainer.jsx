import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection , getDocs , getFirestore , query , where } from 'firebase/firestore';

  function getProducts(category) {
    const db = getFirestore();

    const itemCollection = collection(db, 'items');

    const q = category && query (
      itemCollection,
      where ('category' , '==', category)
    );

    return getDocs(q || itemCollection)
}


function ItemListContainer({greeting}) {
  const [products, setProducts] = useState ([]);
  const {categoryId} = useParams();


  useEffect(() => {
    
    getProducts (categoryId)
    .then((snapshot) => setProducts(snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id}})))
    .catch((err) => console.log('error', err))
  }, [categoryId]);
 
  return (
    <div>
      <div className='box cta' >
        <p>{greeting}</p>
      </div>
        <ItemList items ={products}></ItemList>
    </div>
  )
}

export default ItemListContainer;
