import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import profileImage from '../../images/temp/profile.png';

class Menu extends Component {

    state = {
        isLogin: true
    }

    goToOtherScreen = (screenName) => {
        const { navigate } = this.props.navigation;
        navigate(screenName);
    }

    render() {
        const {
            container,
            avatar,
            button,
            buttonText,
            btnSignInStyle,
            btnTextSignIn,
            loginContainer,
            userName,
            logoutContainer
        } = styles;

        const logoutJsx = (
            <View style={logoutContainer}>
                <TouchableOpacity
                    style={button}
                    onPress={() => this.goToOtherScreen('Authentication')}
                >
                    <Text style={buttonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJsx = (
            <View style={loginContainer}>
                <Text style={userName}>
                    Đặng Hoàng Long
                </Text>
                <View>
                    <TouchableOpacity
                        style={btnSignInStyle}
                        onPress={() => this.goToOtherScreen('OrderHistory')}
                    >
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={btnSignInStyle}
                        onPress={() => this.goToOtherScreen('ChangeInfo')}
                    >
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={btnSignInStyle}
                        onPress={() => this.goToOtherScreen('Authentication')}
                    >
                        <Text style={btnTextSignIn}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View />
                <View />
            </View>
        );

        return (
            <View style={container}>
                <Image style={avatar} source={profileImage} />
                {this.state.isLogin ?
                    loginJsx
                    :
                    logoutJsx
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#42C38D',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30,
        backgroundColor: '#D8D9D5'
    },

    button: {
        height: 50,
        width: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    buttonText: {
        color: '#42C38D',
        fontSize: 20,
        fontFamily: 'Avenir',
    },

    btnSignInStyle: {
        height: 50,
        width: 200,
        paddingLeft: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10
    },

    btnTextSignIn: {
        color: '#42C38D',
        fontSize: 15,
        fontFamily: 'Avenir',
    },

    logoutContainter: {
        flex: 1
    },

    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    userName: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20
    }
});

export default Menu;
