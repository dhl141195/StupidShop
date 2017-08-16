import React, { Component } from 'react';
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

class SearchNavWrapper extends Component {
    render() {
        return (
            <SearchNav screenProps={this.props.screenProps} />
        );
    }
}

export default SearchNavWrapper;
