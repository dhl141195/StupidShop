import React, { Component } from 'react';
import { View } from 'react-native';
import Drawer from 'react-native-drawer';

import Header from './Header';
import Shop from './Shop/Shop';
import Menu from './Menu';

import getToken from '../../api/getToken';
import saveToken from '../../api/saveToken';
import removeToken from '../../api/removeToken';
import checkLogin from '../../api/checkLogin';

class Main extends Component {

    state = {
        user: null,
        listProducts: []
    }

    componentDidMount() {
        getToken()
            .then(token => checkLogin(token))
            .then(result => {
                if (!result) throw new Error('error');
                saveToken(result.token);
                this.onLogin(result.user);
            })
            .catch(error => console.log(error));
    }

    onLogin = (user) => {
        this.setState({
            user
        });
    }

    onLogout = () => {
        removeToken();
        this.setState({
            user: null
        });
    }

    updateListProducts = (listProducts) => {
        this.setState({
            listProducts
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
                        onLogout={this.onLogout}
                    />
                }
                openDrawerOffset={0.4}
                tapToClose
            >
                <View style={{ flex: 1 }}>
                    <Header
                        openMenu={this.openMenu}
                        updateListProducts={this.updateListProducts}
                    />
                    <Shop listProducts={this.state.listProducts} />
                </View>
            </Drawer>
        );
    }
}

export default Main;
