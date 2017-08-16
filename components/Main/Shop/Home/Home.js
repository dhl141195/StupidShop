import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

import global from '../../../../global';

class Home extends Component {

    constructor(props) {
        super(props);
        global.goToSearch = this.goToSearch;
    }

    goToSearch = () => {
        this.props.navigation.navigate('Search');
    }

    render() {
        const { navigation } = this.props;
        const { types, topProducts } = this.props.screenProps;
        const { container } = styles;

        return (
            <ScrollView style={container}>
                <Collection navigation={navigation} />
                <Category
                    navigation={navigation}
                    types={types}
                />
                <TopProduct
                    navigation={navigation}
                    topProducts={topProducts}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8D9D5'
    }
});

export default Home;
