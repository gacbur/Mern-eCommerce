import React from 'react'

import { Link } from 'react-router-dom'

import { FaTrash } from 'react-icons/fa'

import './CartItem.css'

const CartItem = () => {
    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt="" />
            </div>
            <div className="cart-item__text">
                <h4><Link to={`/product/${111}`} >ps5</Link></h4>
                <h5>Price: $499.99</h5>
                <button
                    className="cart-item__btn"
                >
                    <FaTrash /></button>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
    )
}

export default CartItem
