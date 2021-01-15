import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { FaTrash } from 'react-icons/fa'

import './CartItem.css'

const CartItem = ({ item, qtyChangeHandler, handleDeleteFromCart }) => {

    const [cartItemQty, setCartItemQty] = useState(item.qty)

    const handleChangeItemQty = (value) => {
        setCartItemQty(value)
        qtyChangeHandler(item.id, Number(value))
    }

    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="cart-item__text">
                <h4><Link to={`/product/${item.id}`} >{item.name}</Link></h4>
                <h5>Price: ${item.price}</h5>
                <button
                    className="cart-item__btn"
                    onClick={() => handleDeleteFromCart(item.id)}
                >
                    <FaTrash /></button>
                <select value={cartItemQty} onChange={(e) => handleChangeItemQty(e.target.value)}>
                    {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}

export default CartItem
