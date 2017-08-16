import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native';

const url = 'http://192.168.0.103/api/images/product/';

class TopProduct extends Component {

    moveToProductDetail = (product) => {
        this.props.navigation.navigate('ProductDetail', {
            product
        });
    }

    render() {
        const {
            container,
            titleContainer,
            title,
            columnWrapper,
            productContainer,
            productImage,
            productName,
            productPrice
        } = styles;

        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>
                        Top Product
                    </Text>
                </View>
                <View>
                    <FlatList
                        numColumns={2}
                        keyExtractor={item => item.id}
                        columnWrapperStyle={columnWrapper}
                        data={this.props.topProducts}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={productContainer}
                                onPress={() => this.moveToProductDetail(item)}
                            >
                                <Image
                                    source={{ uri: url + item.images[0] }}
                                    style={productImage}
                                />
                                <Text style={productName}>{item.name.toUpperCase()}</Text>
                                <Text style={productPrice}>{item.price}$</Text>
                            </TouchableOpacity>
                        )}
                    />
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

    columnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    },

    productContainer: {
        width: productImageWidth,
        shadowColor: '#352D32',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.2,
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
