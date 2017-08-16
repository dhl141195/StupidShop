import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ListView,
    RefreshControl
} from 'react-native';

import getListProduct from '../../../../api/getListProduct';

import backIcon from '../../../../images/appIcon/backList.png';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const url = 'http://192.168.0.103/api/images/product/';

class ListProduct extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
            refreshing: false,
            page: 1
        };
        this.arr = [];
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params.category;
        const { listProducts, page } = this.state;
        getListProduct(id, page)
            .then(productArr => {
                this.arr = productArr;
                this.setState({
                    listProducts: listProducts.cloneWithRows(this.arr)
                });
            })
            .catch(error => console.log(error));
    }


    gotoProductDetail = (product) => {
        this.props.navigation.navigate('ProductDetail', { product });
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

        const { category } = this.props.navigation.state.params;
        const { listProducts, refreshing, page } = this.state;

        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image source={backIcon} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ListView
                        removeClippedSubviews={false}
                        dataSource={listProducts}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={() => {
                                    this.setState({ refreshing: true });
                                    getListProduct(category.id, page + 1)
                                        .then(productArr => {
                                            this.arr = productArr.concat(this.arr);
                                            this.setState({
                                                listProducts: listProducts.cloneWithRows(this.arr),
                                                refreshing: false,
                                                page: page + 1
                                            });
                                        })
                                        .catch(error => {
                                            console.log(error);
                                            this.setState({
                                                refreshing: false
                                            });
                                        });
                                }}
                            />
                        }
                        renderRow={product => (
                            <View style={productContainer}>
                                <Image
                                    source={{ uri: url + product.images[0] }}
                                    style={productImage}
                                />
                                <View style={productInfo}>
                                    <Text style={textName}>{toTitleCase(product.name)}</Text>
                                    <Text style={textPrice}>{product.price}$</Text>
                                    <Text style={textMaterial}>
                                        Material {toTitleCase(product.material)}
                                    </Text>
                                    <View style={lastRow}>
                                        <Text style={textColor}>
                                            Color {toTitleCase(product.color)}
                                        </Text>
                                        <View
                                            style={[colorIcon, {
                                                backgroundColor: product.color.toLowerCase()
                                            }]}
                                        />
                                        <TouchableOpacity
                                            onPress={() => this.gotoProductDetail(product)}
                                        >
                                            <Text style={textShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
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
    }
});

export default ListProduct;
