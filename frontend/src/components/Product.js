import React, { useEffect } from 'react'

import './Product.css'

import { Link } from 'react-router-dom'

const Product = ({ product }) => {

    const { imageUrl, name, price, description, _id } = product

    return (
        <div className="product">
            <div className="product__image">
                <img
                    src={imageUrl}
                    alt={name}
                />
            </div>
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__description">{description.substring(0, 100)}...</p>
                <p className="info__price">${price}</p>
                <Link to={`/product/${_id}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product
