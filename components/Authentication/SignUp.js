import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

import register from '../../api/register';

class SignUp extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    onSuccess = () => {
        Alert.alert(
            'Notice',
            'Sign up successful',
            [
                {
                    text: 'OK',
                    onPress: () => {
                        this.setState({
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        });
                        this.props.signIn();
                    }
                }
            ],
            {
                cancelable: false
            }
        );
    }

    onFail = () => {
        Alert.alert(
            'Notice',
            'Sign up failed',
            [
                {
                    text: 'Retry'
                }
            ],
            {
                cancelable: false
            }
        );
    }

    registerUser = () => {
        const { name, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            this.onFail();
            return;
        }

        register(email, name, password)
            .then(result => {
                if (result === 'THANH_CONG') {
                    this.onSuccess();
                } else {
                    this.onFail();
                }
            });
    }

    render() {
        const { inputStyle, bigButton, bigButtonText } = styles;
        const { name, email, password, confirmPassword } = this.state;

        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={nameTxt => this.setState({ name: nameTxt })}
                />
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
                <TextInput
                    style={inputStyle}
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    secureTextEntry
                    onChangeText={cfPasswordTxt => this.setState({
                        confirmPassword: cfPasswordTxt
                    })}
                />
                <TouchableOpacity
                    style={bigButton}
                    onPress={this.registerUser}
                >
                    <Text style={bigButtonText}>SIGN UP NOW</Text>
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

export default SignUp;
