import { Text, View } from "react-native";
import { useGameProvider } from "../../contexts/gameData";
import { NUMBERS } from "../../core/utils";
import { GridContainer } from "./styles";
import NumberGrid from "../number";

const GridNumber: React.FC = () => {
    const { currentStep } = useGameProvider();
    const renderNumbers = () => {
        return NUMBERS[currentStep].map((it, i) => {
            return <NumberGrid number={it} key={i} />
        });
    }
    return (
        <GridContainer>
            {renderNumbers()}
        </GridContainer>
    );
}

export default GridNumber;