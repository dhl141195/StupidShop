import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import bannerImage from '../../../../images/temp/banner.jpg';

class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Image
                        style={imageStyle}
                        source={bannerImage}
                    />
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        width: width - 20,
        margin: 10,
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
        height: imageHeight
    }
});

export default Collection;
