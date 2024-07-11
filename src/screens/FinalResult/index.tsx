import { useGameProvider } from '../../contexts/gameData';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { ButtonsContainer, ResultContainer, gradientStyle, textShadow } from './styles';
import { themeColors } from '../../core/utils';

import { useEffect, useState } from 'react';
import Result from '../../components/result';
import { useAdsProvider } from '../../contexts/adsControl';

type TScreens = 'Home' | 'Game';

const FinalResult: React.FC = () => {
    const { getResult, resetGame } = useGameProvider();
    const { black2, blue2, red2 } = themeColors;
    const navigation = useNavigation<propsStack>();
    const [clickedButton, setClickedButton] = useState<TScreens>("Game");
    const { showInterstitial, isClosed: closedAds } = useAdsProvider();
    useEffect(() => {
        if (closedAds) {
            resetGame();
            navigation.navigate(clickedButton);
        }
    }, [closedAds])

    const handlerButton = (button: TScreens) => {
        setClickedButton(button);
        showInterstitial();
    }

    return (
        <ResultContainer>
            <Result answer={getResult()} />
            <ButtonsContainer>
                <Button click={() => handlerButton('Game')} title='Jogar Novamente' />
                <Button click={() => handlerButton('Home')} title='Inicio' />
            </ButtonsContainer>
        </ResultContainer>
    )
}

export default FinalResult;