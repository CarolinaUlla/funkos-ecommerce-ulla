import React, { useEffect , useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from '../ItemCount/ItemCount'


function ItemDetailContainer() {
     function cart (){
    console.log('item agregado');
  };
    const calledItem = [{
    
        name: "The mandalorian",
        description: "Fuko large",
        price: '$5600',
        PictureUrl: "https://m.media-amazon.com/images/I/51+oXX7b0xL._AC_SX569_.jpg",
    }]      
        const [items, setItems] = useState([])
        
        useEffect( () => {
            
            const getItem = new Promise((resolve) => {
                setTimeout (()=>{
                    resolve(calledItem)
            },2000)
            
        })
        getItem
        .then((res)=>{
            setItems(res)
        })
    })
    if(items.length > 0){
        return (
            <>
            <div>
                {items.map((item, i)=>{
                    return <ItemDetail item={item}/>
                })}
                { <ItemCount stock={5} initial={0} onAdd={cart}></ItemCount> }
            </div>
            </>
        );
            }else {
        return (
            <>
            <p>Cargando...</p>
            </>
        )
    }
    }

export default ItemDetailContainer;
