import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

import logoIcon from '../../images/appIcon/ic_logo.png';
import menuIcon from '../../images/appIcon/ic_menu.png';

import global from '../../global';
import searchProduct from '../../api/searchProduct';

class Header extends Component {

    state = {
        txtSearch: ''
    }

    onSearch = () => {
        searchProduct(this.state.txtSearch)
            .then(productArr => this.props.updateListProducts(productArr))
            .catch(error => console.log(error));

        this.setState({
            txtSearch: ''
        });

        global.goToSearch();
    }

    render() {
        const { wrapper, row, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <TouchableOpacity onPress={this.props.openMenu}>
                        <Image style={iconStyle} source={menuIcon} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>
                        Wearing a Dress
                    </Text>
                    <Image style={iconStyle} source={logoIcon} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder="What do  you want to buy?"
                    value={this.state.txtSearch}
                    onChangeText={text => this.setState({ txtSearch: text })}
                    onSubmitEditing={this.onSearch}
                />
            </View>
        );
    }
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#42C38D',
        height: height / 7.5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        justifyContent: 'space-around'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textInput: {
        height: height / 23,
        backgroundColor: '#fff',
        paddingLeft: 10,
        borderRadius: 2
    },

    iconStyle: {
        width: 25,
        height: 25
    },

    titleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20
    }
});

export default Header;
