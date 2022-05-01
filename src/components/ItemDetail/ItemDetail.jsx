import React from "react"
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
    <>
        <div>
            <div>
                <img src={item.PictureUrl} className='funkoImage' alt='funko'></img>
                <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p >{item.price}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default ItemDetail