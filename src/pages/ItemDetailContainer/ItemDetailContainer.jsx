import React, { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc , getDoc , getFirestore } from 'firebase/firestore';

  function getItem(id) {
    const db = getFirestore();

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef)
}

function ItemDetailContainer() {
    const [item, setItem] = useState([])  
    const { id } = useParams();
        
        useEffect( () => {
            getItem (id)
            .then((snapshot) => setItem({...snapshot.data() , id: snapshot.id}))
            .catch((err) => console.log('error', err))
    }, [id]);

        return (
            <div>
                <ItemDetail item={item}/>
            </div>
        )
    }

export default ItemDetailContainer;


