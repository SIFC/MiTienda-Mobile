import React from 'react';
// import { createStackNavigator, createAppContainer } from 'react-navegation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "./src/components/Home";

const Stack = createStackNavigator({
    Home:{screen:Home},
    //Encuesta: { screen: Encuesta },
    // Menu: { screen: Menu },
    //Sincro: { screen: Sincro }
},{initialRouteName:'Home',headerMode:'none'});

const App = createAppContainer(Stack);
export default App