import { NumberContainer, textShadow } from "./styles";

interface INumberGrid {
    number: number;
}

const NumberGrid: React.FC<INumberGrid> = ({ number }) => {
    return <NumberContainer style={textShadow.TS}>{number}</NumberContainer>
}

export default NumberGrid;