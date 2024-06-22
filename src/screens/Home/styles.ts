import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { themeColors } from '../../core/utils';

const { black2, blue2, red3 } = themeColors;

const PageContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 30px 20px;
`;

const TextContainer = styled.View`
    background-color: #0009;
`;

const WelcomeText = styled.Text`
    padding: 20px;
    /* color: ${blue2}; */
    color: white;
    font-family: font1;
    font-size: 20px;
    text-align: center;
`;

const textShadow = StyleSheet.create({
    TS: {
        textShadowColor: 'yellow',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    }
});



export { PageContainer, TextContainer, WelcomeText, textShadow };