import React from 'react'

import CartItem from '../components/CartItem'

import './Cart.css'

const Cart = () => {
    return (
        < div className='cart' >
            <div className="cart__content">
                <CartItem />
            </div>
            <div className="cart__total">
                <h3>Total Price: <strong>0</strong></h3>
                <h4>Number of Items: <strong>0</strong></h4>
            </div>
        </div >
    )
}

export default Cart
