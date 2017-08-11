import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Cart extends Component {
    gotoProductDetail = () => {
        this.props.navigation.navigate('ProductDetail');
    }

    render() {
        return (
            <View>
                <Text>Cart</Text>
                <TouchableOpacity onPress={this.gotoProductDetail}>
                    <Text>Go to Product Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
// 
// });

export default Cart;
