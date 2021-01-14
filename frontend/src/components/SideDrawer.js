import React from 'react'

import { Link } from 'react-router-dom'

import './SideDrawer.css'

import { BiCartAlt } from 'react-icons/bi'

const SideDrawer = ({ show, hide_menu }) => {

    return (
        <div className={`sidedrawer ${show ? 'show' : ''}`}>
            <ul className="sidedrawer__links" onClick={hide_menu}>
                <li>
                    <Link to="/cart">
                        <span className="sidedrawer__cart-sign">
                            <i><BiCartAlt /></i>
                            <p>Cart </p>
                            <span>0</span>
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
