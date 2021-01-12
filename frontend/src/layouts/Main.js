import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'
import Cart from '../pages/Cart'

const Main = () => {
    return (
        <div className="main">
            <div className="main__content-cnt">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/product/:id" exact component={SingleProduct} />
                    <Route path="/cart" exact component={Cart} />
                </Switch>
            </div>
        </div>
    )
}

export default Main
