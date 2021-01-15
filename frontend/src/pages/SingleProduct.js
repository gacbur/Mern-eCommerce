import React from 'react'

import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import './SingleProduct.css'

import { getProductDetails as listProduct } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

import { BiCartAlt } from 'react-icons/bi'

const SingleProduct = ({ match, history }) => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const getProductDetails = useSelector(state => state.getProductDetails)
    const { product, loading, error } = getProductDetails

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(listProduct(match.params.id))
        }
    }, [dispatch, product, match])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
    }


    return (
        <div className="single-product">
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                    <div className="single-product__content">
                        <div className="content__image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="content__info">
                            <p className="content__name">{product.name}</p>
                            <p className="content__price"><strong>Price: </strong>${product.price}</p>
                            <p className="content__description">
                                <span><strong>Description:</strong></span>
                                {product.description}
                            </p>
                            <p>
                                <strong>Status:</strong> <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                            </p>
                            <div className="content__cart-add">
                                <label htmlFor="Qty">
                                    <select
                                        id="Qty"
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option
                                                value={x + 1}
                                                key={x + 1}
                                            >{x + 1}</option>
                                        ))}
                                    </select>
                                </label>
                                <button
                                    type="button"
                                    onClick={addToCartHandler}
                                >
                                    Add to Cart
                                    <i><BiCartAlt />+</i></button>
                            </div>

                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default SingleProduct
