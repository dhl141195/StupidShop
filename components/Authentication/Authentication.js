import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';

import backIcon from '../../images/appIcon/back_white.png';
import logoIcon from '../../images/appIcon/ic_logo.png';

class Authentication extends Component {

    state = {
        isSignIn: true
    }

    goBackToMain = () => {
        const { goBack } = this.props.navigation;
        goBack();
    }

    signUp = () => {
        this.setState({
            isSignIn: false
        });
    }

    signIn = () => {
        this.setState({
            isSignIn: true
        });
    }

    render() {
        const {
            container,
            header,
            iconStyle,
            titleStyle,
            controlStyle,
            signInStyle,
            signUpStyle,
            activeStyle,
            inactiveStyle
        } = styles;

        const { isSignIn } = this.state;
        const { onLogin } = this.props.navigation.state.params;

        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity onPress={this.goBackToMain}>
                        <Image style={iconStyle} source={backIcon} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>
                        Wearing a Dress
                    </Text>
                    <Image style={iconStyle} source={logoIcon} />
                </View>
                {isSignIn ?
                    <SignIn
                        onLogin={onLogin}
                        goBackToMain={this.goBackToMain}
                    />
                    :
                    <SignUp signIn={this.signIn} />
                }
                <View />
                <View />
                <View style={controlStyle}>
                    <TouchableOpacity
                        style={signInStyle}
                        onPress={this.signIn}
                        disabled={isSignIn}
                    >
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={signUpStyle}
                        onPress={this.signUp}
                        disabled={!isSignIn}
                    >
                        <Text style={isSignIn ? inactiveStyle : activeStyle}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#42C38D',
        padding: 20,
        justifyContent: 'space-between',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    iconStyle: {
        width: 30,
        height: 30
    },

    titleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 25
    },

    controlStyle: {
        flexDirection: 'row'
    },

    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },

    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },

    activeStyle: {
        color: '#42C38D'
    },

    inactiveStyle: {
        color: '#E3E2E0'
    }
});

export default Authentication;
