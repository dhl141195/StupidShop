import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import littleImage from '../../../../images/temp/little.jpg';
import maxiImage from '../../../../images/temp/maxi.jpg';
import partyImage from '../../../../images/temp/party.jpg';

class Category extends Component {

    moveToListProduct = () => {
        this.props.navigation.navigate('ListProduct');
    }

    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Swiper
                        activeDotColor={'#4FC18F'}
                        width={imageWidth}
                        height={imageHeight}
                    >
                        <TouchableOpacity onPress={this.moveToListProduct}>
                            <Image
                                style={imageStyle}
                                source={maxiImage}
                            >
                                <Text style={cateTitle}>Maxi Dress </Text>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.moveToListProduct}>
                            <Image
                                style={imageStyle}
                                source={littleImage}
                            >
                                <Text style={cateTitle}>Litte Dress </Text>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.moveToListProduct}>
                            <Image
                                style={imageStyle}
                                source={partyImage}
                            >
                                <Text style={cateTitle}>Party Dress </Text>
                            </Image>
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#fff',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#352D32',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 5
    },

    textStyle: {
        fontSize: 20,
        color: '#BABABA'
    },

    imageStyle: {
        width: imageWidth,
        height: imageHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#BCBBBC'
    }
});

export default Category;
