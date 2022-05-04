import React from "react"
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
     <div className="detail-product">
            <div className='card is-shady'>
                <img src={item?.image} className='funkoImage' alt='funko'></img>
                <div>
                    <p className="subtitle">{item?.title}</p>
                    <p>{item?.detail}</p>
                    <p className="tag is-info">{item?.price}</p>
                    <p className="tag is-info is-light is-large" id="more-info">{item?.moreInfo}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail