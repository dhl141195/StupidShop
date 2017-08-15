import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';

import HomeNav from './Home/HomeNav';
import CartNavWrapper from './Cart/CartNavWrapper';
import SearchNav from './Search/SearchNav';
import Contact from './Contact/Contact';

import homeIcon from '../../../images/appIcon/home0.png';
import cartIcon from '../../../images/appIcon/cart0.png';
import searchIcon from '../../../images/appIcon/search0.png';
import contactIcon from '../../../images/appIcon/contact0.png';

const ShopNav = TabNavigator(
    {
        Home: {
            screen: HomeNav,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={homeIcon}
                        style={[styles.icon, { tintColor }]}
                    />
                )
            }
        },
        Cart: {
            screen: CartNavWrapper,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={cartIcon}
                        style={[styles.icon, { tintColor }]}
                    />
                )
            }
        },
        Search: {
            screen: SearchNav,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={searchIcon}
                        style={[styles.icon, { tintColor }]}
                    />
                )
            }
        },
        Contact: {
            screen: Contact,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={contactIcon}
                        style={[styles.icon, { tintColor }]}
                    />
                )
            }
        }
    }, {
        tabBarOptions: {
            activeTintColor: '#49C28E',
            labelStyle: {
                fontFamily: 'Avenir'
            }
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30
    }
});

export default ShopNav;
