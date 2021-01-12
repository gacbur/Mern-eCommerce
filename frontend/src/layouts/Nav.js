import React from 'react'
import { NavLink } from 'react-router-dom'

import { BiCartAlt } from 'react-icons/bi'

const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <NavLink className="navbar__logo-link" to="/">MERN eCommerce</NavLink>
            </div>
            <ul className="navbar__links">
                <li className="navbar__links-item">
                    <NavLink exact className="navbar__links-item__link" activeClassName="navbar__logo-link--active" to="/">Home</NavLink>
                </li>
                <li className="navbar__links-item">
                    <NavLink exact className="navbar__links-item__link" activeClassName="navbar__logo-link--active" to="/cart"><span className="navbar__links-item__link__cart-sign">Cart <BiCartAlt /></span> </NavLink>
                </li>
                <li className="navbar__links-item">
                    <NavLink exact className="navbar__links-item__link" activeClassName="navbar__logo-link--active" to="/login">Login</NavLink>
                </li>
                <li className="navbar__links-item">
                    <NavLink exact className="navbar__links-item__link" activeClassName="navbar__logo-link--active" to="/register">Register</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav
