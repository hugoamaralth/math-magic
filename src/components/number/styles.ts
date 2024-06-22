import styled from "styled-components/native";

import { themeColors } from '../../core/utils';
import { StyleSheet } from "react-native";

const { white, black2, blue } = themeColors;

const NumberContainer = styled.Text`
    /* color: ${white}C; */
    color: #fff;
    width: 24%;
    text-align: center;
    /* background-color: ${black2}; */
    background-color: #f0f1;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    font-family: font1;
    font-size: 25px;
    border: 1px solid #f0f6;
`;

const textShadow = StyleSheet.create({
    TS: {
        textShadowColor: '#000',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 5
    }
});

export { NumberContainer, textShadow };