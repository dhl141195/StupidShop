import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput,
    Alert
} from 'react-native';

import getToken from '../../api/getToken';
import changeInfo from '../../api/changeInfo';

import backIcon from '../../images/appIcon/back.png';

export default class ChangeInfo extends Component {

    constructor(props) {
        super(props);

        const { name, address, phone } = this.props.navigation.state.params.user;
        this.state = {
            name,
            address,
            phone
        };
    }

    onChangeInfo = () => {
        const { name, address, phone } = this.state;
        getToken()
            .then(token => changeInfo(token, name, address, phone))
            .then(user => {
                this.onSuccess();
                this.props.navigation.state.params.onLogin(user);
            })
            .catch(error => console.log(error));
    }

    onSuccess = () => {
        Alert.alert(
            'Congratulation',
            'Update info successful',
            [{ text: 'OK', onPress: () => this.goBackToMain() }],
            { cancelable: false }
        );
    }

    goBackToMain() {
        this.props.navigation.goBack();
    }

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;

        const { name, address, phone } = this.state;

        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>User Infomation</Text>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={backIcon} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={name}
                        onChangeText={txtName => this.setState({ name: txtName })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={address}
                        onChangeText={txtAddress => this.setState({ address: txtAddress })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={phone}
                        onChangeText={txtPhone => this.setState({ phone: txtPhone })}
                    />
                    <TouchableOpacity
                        style={signInContainer}
                        onPress={this.onChangeInfo}
                    >
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', marginTop: 100 },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});

