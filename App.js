import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Main from './components/Main/Main';
import Authentication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import OrderHistory from './components/OrderHistory/OrderHistory';

StatusBar.setHidden(true);

const App = StackNavigator(
    {
        Main: { screen: Main },
        Authentication: { screen: Authentication },
        ChangeInfo: { screen: ChangeInfo },
        OrderHistory: { screen: OrderHistory }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
    }
);

export default App;
