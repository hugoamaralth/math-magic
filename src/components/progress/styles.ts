import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { themeColors } from "../../core/utils";

interface IStep {
    isCurrent: boolean;
}

const { black2, white2, white3 } = themeColors;

const ProgressContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StepContainer = styled.View`
    /* width: ${(props: IStep) => props.isCurrent ? '45px' : '40px'};
    height: ${(props: IStep) => props.isCurrent ? '45px' : '40px'}; */
    width: 100%;
    height: 100%;
    background-color: ${(props: IStep) => props.isCurrent ? white2 : black2};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const TextStep = styled.Text`
    color: ${(props: IStep) => props.isCurrent ? 'black' : white3};
    font-family: font1;
    font-size: ${(props: IStep) => props.isCurrent ? '25px' : '15px'};
`;

const textShadow = StyleSheet.create({
    TS: {
        textShadowColor: 'purple',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    }
});

export { ProgressContainer, StepContainer, TextStep, textShadow };