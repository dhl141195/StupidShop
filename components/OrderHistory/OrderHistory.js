import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class OrderHistory extends Component {

    goToMain = () => {
        const { goBack } = this.props.navigation;
        goBack();
    }

    render() {
        return (
            <View>
                <Text>Order History</Text>
                <TouchableOpacity onPress={this.goToMain}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default OrderHistory;
