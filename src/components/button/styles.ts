import styled from "styled-components/native";
import { StyleSheet } from 'react-native';
import { themeColors } from "../../core/utils";

const { black2, white } = themeColors;

const ButtonContainer = styled.TouchableOpacity`
    /* background-color: ${black2}; */
    padding: 15px 30px;
    border-radius: 10px;
`;
const ButtonText = styled.Text`
    font-size: 18px;
    text-align: center;
    color: #FFFC;
    font-family: font1;
    text-transform: uppercase;
`;

export { ButtonText, ButtonContainer };