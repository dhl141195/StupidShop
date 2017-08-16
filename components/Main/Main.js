import React, { Component } from 'react';
import { View } from 'react-native';
import Drawer from 'react-native-drawer';

import Header from './Header';
import Shop from './Shop/Shop';
import Menu from './Menu';

import getToken from '../../api/getToken';
import saveToken from '../../api/saveToken';
import checkLogin from '../../api/checkLogin';

class Main extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        getToken()
            .then(token => checkLogin(token))
            .then(result => {
                saveToken(result.token);
                this.onLogin(result.user);
            });
    }

    onLogin = (user) => {
        this.setState({
            user
        });
    }


    openMenu = () => {
        this.drawer.open();
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={
                    <Menu
                        navigation={this.props.navigation}
                        user={this.state.user}
                        onLogin={this.onLogin}
                    />
                }
                openDrawerOffset={0.4}
                tapToClose
            >
                <View style={{ flex: 1 }}>
                    <Header
                        openMenu={this.openMenu}
                    />
                    <Shop />
                </View>
            </Drawer>
        );
    }
}

export default Main;
