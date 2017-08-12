import React, { Component } from 'react';

import ShopNav from './ShopNav';

class Shop extends Component {

    state = {
        types: [],
        topProducts: [],
        cartArray: []
    }

    componentDidMount = () => {
        fetch('http://127.0.0.1/api')
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    types: responseData.type,
                    topProducts: responseData.product
                });
            });
    }

    addToCart = (product) => {
        this.setState(prevState => ({
            cartArray: prevState.cartArray.concat(product)
        }));
    }

    render() {
        const { types, topProducts } = this.state;
        const screenProps = {
            types,
            topProducts,
            addToCart: this.addToCart
        };

        return (
            <ShopNav screenProps={screenProps} />
        );
    }
}

export default Shop;
