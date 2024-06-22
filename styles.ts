import styled from "styled-components/native";

const AppContainer = styled.View`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const BackImage = styled.Image`
    flex: 1;
    width: undefined;
    opacity: 1;
    height: undefined;
`;

const BackgroundContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export { AppContainer, BackImage, BackgroundContainer }