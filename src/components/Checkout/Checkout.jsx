import React, { useState, useContext } from 'react';
import CartContext from '../../context/cartContext';
import { collection , addDoc , getFirestore } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom' 


const Checkout = () => {

    const {products, clear, getTotalPrice} =useContext(CartContext)
    const [orderId, setOrderId] = useState();

    const [buyer, setBuyer] = useState ({
        Name: '',
        Email: '',
        Phone:''
    })

    const {Name, Email, Phone} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generateOrder = async(data) => {
        
        const db = getFirestore();
        try {
            const col = await collection(db, "Orders")
            const order = await addDoc (col, data)
            setOrderId(order.id);
            console.log('la order', order.id)
        } catch (error) {
            console.log(error)
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        const date = new Date()

        const items= products.map (e => {return {id:e.id, title:e.title, price:e.price}})
        const total = getTotalPrice();

        const data = {buyer, items, date, total}
        console.log(data)
        await generateOrder(data)
    }
    const handleContinue = () => {
        clear()
    }
    return (
    <div>
        <section className="hero is-info">
            <div className="hero-body">
                <p className="title">Checkout</p>
            </div>
        </section>
        <div className='columns'>
        <div className='column is-half'>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-info" type='text' name='Name' placeholder='Name' value={Name} onChange={handleInputChange} required></input>
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-info" type='email' name='Email' placeholder='Email' value={Email} onChange={handleInputChange} required></input>
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Phone</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-info" type='number' name='Phone' placeholder='Phone' value={Phone} onChange={handleInputChange} required></input>
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faMobile} />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                    <button className='button is-primary is-large'>
                        Finish shopping</button>
                    </div>
                </div>
            </form>
        </div>
        {
                orderId&&(
                    <div className='column is-half'>
                        <h4 className='title is-4'>Purchase Completed Successfully</h4>
                        <h4>{`Your purchase code is: ${orderId}`}</h4>
                        <Link to="/"><span onClick={handleContinue} className='tag is-link is-light is-large'> 
                            Continue shopping</span></Link>
                    </div>
                    )
            }
    </div>
    </div>
    );
};

export default Checkout;

