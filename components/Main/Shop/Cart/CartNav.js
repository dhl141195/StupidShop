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

export default CartNav;
