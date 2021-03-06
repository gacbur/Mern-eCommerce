import React from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

import './Nav.css'

import { BiCartAlt } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = ({ show_menu }) => {

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    const getCartItemsNumber = () => {
        return cartItems.reduce((count, item) => count += Number(item.qty), 0)
    }

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <NavLink className="navbar__logo-link" to="/">MERN eCommerce</NavLink>
            </div>
            <ul className="navbar__links">
                <li className="navbar__links-item">
                    <NavLink exact activeClassName="navbar__logo-link--active" to="/">Home</NavLink>
                </li>
                <li className="navbar__links-item">
                    <NavLink exact activeClassName="navbar__logo-link--active" to="/cart"><span className="navbar__links-item__cart-sign">Cart <p><BiCartAlt /> {getCartItemsNumber()} </p></span> </NavLink>
                </li>
                <li className="navbar__links-item">
                    <NavLink exact activeClassName="navbar__logo-link--active" to="/login">Login</NavLink>
                </li>
                <li className="navbar__links-item">
                    <NavLink exact activeClassName="navbar__logo-link--active" to="/register">Register</NavLink>
                </li>
            </ul>
            <button
                className="navbar__hamburger"
                onClick={show_menu}
            >
                <i><GiHamburgerMenu /></i>
            </button>
        </div >
    )
}

export default Nav
