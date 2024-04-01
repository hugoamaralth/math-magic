import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './Models';
import Home from '../../screens/Home'
import Game from '../../screens/Game'

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function () {
    return (
        <Navigator initialRouteName='Home' screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' } }} >
            <Screen name="Home" component={Home} />
            <Screen name="Game" component={Game} />
        </Navigator>
    )
}