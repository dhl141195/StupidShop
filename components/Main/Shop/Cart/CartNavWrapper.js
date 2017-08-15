import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Cart from './Cart';
import ProductDetail from '../ProductDetail/ProductDetail';

const CartNav = StackNavigator(
    {
        Cart: { screen: Cart },
        ProductDetail: { screen: ProductDetail },
    }, {
        initialRouteName: 'Cart',
        headerMode: 'none'
    }
);

class CartNavWrapper extends Component {
    render() {
        return (
            <CartNav screenProps={this.props.screenProps} />
        );
    }
}

export default CartNavWrapper;
