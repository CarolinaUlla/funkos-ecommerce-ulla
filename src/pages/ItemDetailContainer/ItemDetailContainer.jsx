import React, { useEffect , useState , useContext} from "react"
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

  function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
            {
                id: 1,
                title: 'Harry potter',
                image: 'https://m.media-amazon.com/images/I/71n40hBlR4L._AC_SL1500_.jpg',
                detail:'Funko medium',
                category: 'FunkoMedium',
                price: '$2700',
                moreInfo: '9 x 10 cm',
                stock: 5
              },
          
              {
                id: 2,
                title: 'Breaking bad- Walter White',
                image: 'https://m.media-amazon.com/images/I/41S1lN96GHL._AC_.jpg',
                detail:'Funko medium',
                category: 'FunkoMedium',
                price: '$2900',
                moreInfo: '9 x 10 cm',
                stock: 3
              },
          
              {
                id: 3,
                title: 'The Walking dead- Daryl',
                image: 'https://m.media-amazon.com/images/I/61IjS-2zasL._AC_SY606_.jpg',
                detail:'Funko key chain',
                category: 'FunkoKeyChain',
                price: '$1500',
                moreInfo: '5 x 5 cm',
                stock: 12
              },
          
              {
                id: 4,
                title: 'Stranger things- Eleven',
                image: 'https://m.media-amazon.com/images/I/61nEyJzOMDL._AC_SY606_.jpg',
                detail:'Funko large',
                category: 'FunkoLarge',
                price: '$3100',
                moreInfo: '15 x 15 cm',
                stock: 8
              }
        ];
        const item = productsList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 1000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItems] = useState([])  
    const { id } = useParams();
        
        useEffect( () => {
            getItem(id)
            .then((res)=>{
                setItems(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

        return (
            <div>
                <ItemDetail item={item}/>
            </div>
        )
    }

export default ItemDetailContainer;
