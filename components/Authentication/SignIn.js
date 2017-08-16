import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

import saveToken from '../../api/saveToken';
import getToken from '../../api/getToken';
import login from '../../api/login';


class SignIn extends Component {

    state = {
        email: '',
        password: '',
        token: ''
    }

    componentDidMount() {
        getToken()
            .then(token => this.setState({ token }));
    }


    onSignIn = () => {
        const { email, password } = this.state;
        const { onLogin, goBackToMain } = this.props;
        login(email, password)
            .then(result => {
                saveToken(result.token);
                onLogin(result.user);
                goBackToMain();
            })
            .catch(() => {
                Alert.alert(
                    'Oops!',
                    'Sign in failed',
                    [
                        {
                            text: 'Retry',
                            onPress: () => this.setState({ password: '' })
                        }
                    ],
                    { cancelable: false }
                );
            });
    }

    render() {
        const { email, password } = this.state;
        const { inputStyle, bigButton, bigButtonText } = styles;

        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={emailTxt => this.setState({ email: emailTxt })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    value={password}
                    secureTextEntry
                    onChangeText={passwordTxt => this.setState({ password: passwordTxt })}
                />
                <TouchableOpacity
                    style={bigButton}
                    onPress={this.onSignIn}
                >
                    <Text style={bigButtonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingLeft: 30,
        borderRadius: 10
    },

    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bigButtonText: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 17,
        fontWeight: '500'
    }
});

export default SignIn;
