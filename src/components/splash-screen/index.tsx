import React from "react";
import { Text, View } from "react-native";

const SplashScreen: React.FC = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#FF0000',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 50
            }}>CARREGANDO</Text>
        </View>
    );
}

export default SplashScreen;