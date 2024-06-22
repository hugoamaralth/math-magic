import React from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import LoadingJson from '../../../assets/loading.json';

const SplashScreen: React.FC = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#000E',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <LottieView style={{
                width: '100%',
                height: '100%',
            }} source={LoadingJson} autoPlay />
        </View>
    );
}

export default SplashScreen;