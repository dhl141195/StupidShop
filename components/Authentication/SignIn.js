import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const SignIn = () => {
    const { inputStyle, bigButton, bigButtonText } = styles;
    
    return (
        <View>
            <TextInput
                style={inputStyle}
                placeholder="Enter your email"
            />
            <TextInput
                style={inputStyle}
                placeholder="Enter your password"
            />
            <TouchableOpacity style={bigButton}>
                <Text style={bigButtonText}>SIGN IN NOW</Text>
            </TouchableOpacity>
        </View>
    );
};

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
