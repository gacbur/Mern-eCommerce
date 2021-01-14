import React from 'react'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Product from '../components/Product'

import './Home.css'

import { getProducts as listProducts } from '../redux/actions/productActions'

const Home = () => {

    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <div className="home">
            <div className="home__products">
                {loading ? (
                    <h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : products.map(product => <Product
                        key={product._id}
                        product={product} />
                    )}
            </div>
        </div>
    )
}

export default Home
