import React from 'react'

import { BiCartAlt } from 'react-icons/bi'

const SingleProduct = () => {
    return (
        <div className="single-product">
            <div className="single-product__content">
                <div className="content__image">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
                </div>
                <div className="content__info">
                    <p className="content__name">Product 1</p>
                    <p className="content__price"><strong>$499.99</strong></p>
                    <p className="content__description">
                        <span><strong>Description:</strong></span>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus iste consectetur pariatur doloribus quas est magnam. Numquam minima cum dolor facere incidunt fugiat sequi veniam voluptatibus non? Mollitia molestiae, nihil quaerat eaque beatae fuga quas. </p>
                    <p>
                        <strong>Status:</strong> <span>In Stock</span>
                    </p>
                    <div className="content__cart-add">
                        <label htmlFor="Qty">
                            <select id="Qty">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                            </select>
                        </label>
                        <button type="button">Add to Cart <i><BiCartAlt />+</i></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleProduct
