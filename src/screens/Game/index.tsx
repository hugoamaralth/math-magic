import { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import Button from '../../components/button';
import { useGameProvider } from '../../contexts/gameData';
import Progress from '../../components/progress';
import GridNumber from '../../components/gridNumbers';
import { ButtonsContainer, PageContainer } from './styles';


const GameScreen: React.FC = () => {
    const navigation = useNavigation<propsStack>();
    const isVisible = useIsFocused();
    const { currentStep, setStep, resetGame, setAnswer } = useGameProvider();

    useEffect(() => {
        if (isVisible) {
            resetGame();
        }
    }, [isVisible]);

    const handlerAnswer = (answer: boolean) => {
        setAnswer(answer, currentStep);
        if (currentStep < 5) {
            setStep(currentStep + 1);
        } else {
            navigation.navigate('Result');
        }
    }

    return (
        <PageContainer>
            <Progress />
            <GridNumber />
            <ButtonsContainer>
                <Button click={() => { handlerAnswer(false) }} title='não' />
                <Button click={() => { handlerAnswer(true) }} title='sim' />
            </ButtonsContainer>
        </PageContainer>
    )
}

export default GameScreen;