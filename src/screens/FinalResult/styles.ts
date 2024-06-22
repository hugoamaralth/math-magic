import { StyleSheet } from 'react-native';
import styled from "styled-components/native";

const ResultContainer = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    `;

const ButtonsContainer = styled.View`
    flex: .5;
    justify-content: space-evenly;
`;

const gradientStyle = StyleSheet.create({
    back: {
        borderWidth: 1,
        borderRadius: 9,
        borderColor: '#660066',
        // opacity: .7
    }
});

const textShadow = StyleSheet.create({
    TS: {
        textShadowColor: '#fff',
        textShadowOffset: { width: -2, height: 0 },
        textShadowRadius: 20,
    }
});

export { ResultContainer, ButtonsContainer, textShadow, gradientStyle };