import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../images/temp/sp1.jpeg';
import sp2 from '../../../../images/temp/sp2.jpeg';
import sp3 from '../../../../images/temp/sp3.jpeg';
import sp4 from '../../../../images/temp/sp4.jpeg';

class TopProduct extends Component {

    moveToProductDetail = () => {
        this.props.navigation.navigate('ProductDetail');
    }

    render() {
        const {
            container,
            titleContainer,
            title,
            body,
            productContainer,
            productImage,
            productName,
            productPrice,
            divider
        } = styles;

        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>
                        Top Product
                    </Text>
                </View>
                <View style={body}>
                    <TouchableOpacity
                        style={productContainer}
                        onPress={this.moveToProductDetail}
                    >
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={productContainer}
                        onPress={this.moveToProductDetail}
                    >
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>300$</Text>
                    </TouchableOpacity>
                    <View style={divider} />
                    <TouchableOpacity
                        style={productContainer}
                        onPress={this.moveToProductDetail}
                    >
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={productContainer}
                        onPress={this.moveToProductDetail}
                    >
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>300$</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const productImageWidth = (width - 60) / 2;
const productImageHeight = (productImageWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#352D32',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.2
    },

    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },

    title: {
        color: '#BABABA',
        fontSize: 20
    },

    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },

    productContainer: {
        width: productImageWidth,
        shadowColor: '#352D32',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.2
    },

    productImage: {
        width: productImageWidth,
        height: productImageHeight
    },

    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#BABABA',
        fontWeight: '500',
        marginVertical: 5
    },

    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#4A3D6C',
        fontWeight: '500',
        marginBottom: 5
    },

    divider: {
        height: 15,
        width
    }
});

export default TopProduct;
