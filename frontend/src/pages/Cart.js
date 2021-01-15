import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { removeFromCart, addToCart } from '../redux/actions/cartActions'

import { Link } from 'react-router-dom'

import CartItem from '../components/CartItem'

import './Cart.css'

const Cart = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const handleDeleteFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const getTotalItemsNumber = () => {
        return cartItems.reduce((count, item) => count + Number(item.qty), 0)
    }

    const getTotalSumNumber = () => {
        let totalSum = cartItems.reduce((price, item) => {
            return price += item.price * item.qty
        }, 0)

        return totalSum
    }

    return (
        < div className='cart' >
            <div className="cart__content">
                {cartItems.length === 0 ?
                    <div>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                    :
                    cartItems.map(item => (
                        <CartItem
                            item={item}
                            key={item._id}
                            qtyChangeHandler={qtyChangeHandler}
                            handleDeleteFromCart={handleDeleteFromCart}
                        />
                    ))}
                {cartItems.length === 0 ?
                    null
                    :
                    < div className="cart__total">
                        <h3>Total Price: <strong>${getTotalSumNumber().toFixed(2)}</strong></h3>
                        <h4>Number of Items:  <strong>{getTotalItemsNumber()}</strong></h4>
                    </div >
                }
            </div>
        </div >

    )
}

export default Cart
