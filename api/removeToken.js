import { AsyncStorage } from 'react-native';

const removeToken = async () => {
    await AsyncStorage.removeItem('@token');
};

export default removeToken;
