import { StackNavigator } from 'react-navigation';

import Home from './Home';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

const HomeNav = StackNavigator(
    {
        Home: { screen: Home },
        ListProduct: { screen: ListProduct },
        ProductDetail: { screen: ProductDetail },
    }, {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default HomeNav;
