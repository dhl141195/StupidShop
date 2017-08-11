import { StackNavigator } from 'react-navigation';

import Search from './Search';
import ProductDetail from '../ProductDetail/ProductDetail';

const SearchNav = StackNavigator(
    {
        Search: { screen: Search },
        ProductDetail: { screen: ProductDetail },
    }, {
        initialRouteName: 'Search',
        headerMode: 'none'
    }
);

export default SearchNav;
