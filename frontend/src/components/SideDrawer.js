import React from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import './SideDrawer.css'

import { BiCartAlt } from 'react-icons/bi'

const SideDrawer = ({ show, hide_menu }) => {

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    const getCartItemsNumber = () => {
        return cartItems.reduce((count, item) => count += Number(item.qty), 0)
    }

    return (
        <div className={`sidedrawer ${show ? 'show' : ''}`}>
            <ul className="sidedrawer__links" onClick={hide_menu}>
                <li>
                    <Link to="/cart">
                        <span className="sidedrawer__cart-sign">
                            <i><BiCartAlt /></i>
                            <p>Cart </p>
                            <span>{getCartItemsNumber()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link exact to="/">Home</Link>
                </li>
                <li>
                    <Link exact to="/login">Login</Link>
                </li>
                <li>
                    <Link exact to="/register">Register</Link>
                </li>
            </ul>
        </div >
    )
}

export default SideDrawer
