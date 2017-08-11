import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

import backIcon from '../../../../images/appIcon/backList.png';
import sp1 from '../../../../images/temp/sp1.jpeg';

class ListProduct extends Component {

    gotoProductDetail = () => {
        this.props.navigation.navigate('ProductDetail');
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const {
            container,
            wrapper,
            header,
            backStyle,
            titleStyle,
            productContainer,
            productImage,
            productInfo,
            lastRow,
            textName,
            textPrice,
            textMaterial,
            textColor,
            textShowDetail,
            colorIcon
        } = styles;

        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image source={backIcon} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>117$</Text>
                            <Text style={textMaterial}>Material silk</Text>
                            <View style={lastRow}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={colorIcon} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>117$</Text>
                            <Text style={textMaterial}>Material silk</Text>
                            <View style={lastRow}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={colorIcon} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>117$</Text>
                            <Text style={textMaterial}>Material silk</Text>
                            <View style={lastRow}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={colorIcon} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>117$</Text>
                            <Text style={textMaterial}>Material silk</Text>
                            <View style={lastRow}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={colorIcon} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8D9D5',
        padding: 10
    },

    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#352D32',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.2,
        paddingHorizontal: 10
    },

    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },

    backStyle: {
        height: 30,
        width: 30
    },

    titleStyle: {
        fontFamily: 'Avenir',
        color: '#C02270',
        fontSize: 20
    },

    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F4F4F4',
        borderTopWidth: 1
    },

    productInfo: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 15
    },

    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },

    lastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textName: {
        fontFamily: 'Avenir',
        color: '#B8B8B8',
        fontSize: 20,
        fontWeight: '600'
    },

    textPrice: {
        fontFamily: 'Avenir',
        color: '#C02270',
        fontWeight: '600'
    },

    textMaterial: {
        fontFamily: 'Avenir',
        fontWeight: '600'
    },

    textColor: {
        fontFamily: 'Avenir',
        fontWeight: '600'
    },

    textShowDetail: {
        fontFamily: 'Avenir',
        color: '#C02270',
        fontSize: 10,
        fontWeight: '600'
    },

    colorIcon: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'red'
    }
});

export default ListProduct;
