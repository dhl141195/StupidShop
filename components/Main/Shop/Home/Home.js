import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';


class Home extends Component {
    render() {
        const { navigation } = this.props;
        const { container } = styles;

        return (
            <ScrollView style={container}>
                <Collection navigation={navigation} />
                <Category navigation={navigation} />
                <TopProduct navigation={navigation} />
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
