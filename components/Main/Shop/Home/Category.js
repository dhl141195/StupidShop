import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const url = 'http://127.0.0.1/api/images/type/';

class Category extends Component {

    moveToListProduct = () => {
        this.props.navigation.navigate('ListProduct');
    }

    render() {
        const { types } = this.props;
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
                        {types.map(type => (
                            <TouchableOpacity key={type.id} onPress={this.moveToListProduct}>
                                <Image
                                    style={imageStyle}
                                    source={{ uri: url + type.image }}
                                >
                                    <Text style={cateTitle}>{type.name}</Text>
                                </Image>
                            </TouchableOpacity>
                        ))}
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
