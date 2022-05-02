import React from "react"
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
    <>
        <div className="box">
            <div>
                <img src={item.PictureUrl} className='funkoImage' alt='funko'></img>
                <div>
                    <p className="title is-4">{item.name}</p>
                    <p className="subtitle">{item.description}</p>
                    <p className="tag is-info is-light is-large">{item.price}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default ItemDetail