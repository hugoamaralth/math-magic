import { useGameProvider } from '../../contexts/gameData';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { ButtonsContainer, ResultContainer, gradientStyle, textShadow } from './styles';
import { themeColors } from '../../core/utils';

import { useState } from 'react';
import Result from '../../components/result';

const FinalResult: React.FC = () => {
    const { getResult, resetGame } = useGameProvider();
    const { black2, blue2, red2 } = themeColors;
    const navigation = useNavigation<propsStack>();
    const [result, setResult] = useState(0);    

    return (
        <ResultContainer>
            <Result answer={getResult()} />
            <ButtonsContainer>
                <Button click={() => { resetGame(); navigation.navigate("Game"); }} title='Jogar Novamente' />
                <Button click={() => { navigation.navigate("Home"); }} title='Inicio' />
            </ButtonsContainer>
        </ResultContainer>
    )
}

export default FinalResult;