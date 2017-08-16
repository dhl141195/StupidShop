import React, { Component } from 'react';

import ShopNav from './ShopNav';
import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';

class Shop extends Component {

    state = {
        types: [],
        topProducts: [],
        cartArray: []
    }

    componentDidMount = () => {
        initData().then(responseData => {
            this.setState({
                types: responseData.type,
                topProducts: responseData.product,
            });
        });

        getCart().then(cartArray => {
            this.setState({
                cartArray
            });
        });
    }

    addToCart = (product) => {
        const isExist = this.state.cartArray.some(item => item.product.id === product.id);
        if (!isExist) {
            this.setState(prevState => ({
                cartArray: prevState.cartArray.concat({ product, quantity: 1 })
            }), () => saveCart(this.state.cartArray));
        }
    }

    increaseQuantity = (productId) => {
        const { cartArray } = this.state;
        const newCartArray = cartArray.map(item => {
            if (item.product.id === productId) {
                return {
                    product: item.product,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });

        this.setState({
            cartArray: newCartArray
        }, () => saveCart(this.state.cartArray));
    }

    decreaseQuantity = (productId) => {
        const { cartArray } = this.state;

        let needToRemove = false;

        const newCartArray = cartArray.map(item => {
            if (item.product.id === productId) {
                if (item.quantity === 1) {
                    needToRemove = true;
                }
                return {
                    product: item.product,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });

        if (needToRemove) {
            this.removeProduct(productId);
            return;
        }

        this.setState({
            cartArray: newCartArray
        }, () => saveCart(this.state.cartArray));
    }

    removeProduct = (productId) => {
        const { cartArray } = this.state;
        const newCartArray = cartArray.filter(item => item.product.id !== productId);

        this.setState({
            cartArray: newCartArray
        }, () => saveCart(this.state.cartArray));
    }

    render() {
        const { types, topProducts, cartArray } = this.state;
        const screenProps = {
            types,
            topProducts,
            cartArray,
            listProducts: this.props.listProducts,
            addToCart: this.addToCart,
            increaseQuantity: this.increaseQuantity,
            decreaseQuantity: this.decreaseQuantity,
            removeProduct: this.removeProduct
        };

        return (
            <ShopNav screenProps={screenProps} />
        );
    }
}

export default Shop;
