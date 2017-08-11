import React, { Component } from 'react';
import { View } from 'react-native';
import Drawer from 'react-native-drawer';

import Header from './Header';
import Shop from './Shop/Shop';
import Menu from './Menu';

class Main extends Component {

    openMenu = () => {
        this.drawer.open();
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigation={this.props.navigation} />}
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
