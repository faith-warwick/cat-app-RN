import React from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import HomeScreen from './pages/general/landing';
import ProfileScreen from './pages/profile';
import SignUpScreen from './pages/general/signUp'

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    SignUp: {screen: SignUpScreen},
});

export default App;

