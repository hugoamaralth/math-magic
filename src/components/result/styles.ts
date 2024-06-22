import styled from "styled-components/native";
import { StyleSheet } from "react-native";

const ResultText = styled.Text`
    /* padding: 20px; */
    font-size: 200px;
    font-family: font1;
    /* color: #000e; */
    color: #F0Fc;
`;

const textShadow = StyleSheet.create({
    TS: {
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 45,
        shadowOpacity: 1
    }
});


export { ResultText, textShadow }