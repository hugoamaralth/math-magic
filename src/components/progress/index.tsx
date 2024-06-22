import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { useGameProvider } from '../../contexts/gameData';
import { themeColors } from '../../core/utils';
import BackGradient from '../backGradient';
import { ProgressContainer, StepContainer, TextStep, textShadow } from './styles';

const { red, blue } = themeColors;

const Progress: React.FC = () => {
    const { currentStep } = useGameProvider();
    const renderSteps = () => {
        const ret = [];
        for (let i = 0; i <= 5; i++) {
            ret.push(<Step key={i} isCurrent={currentStep === i} value={i + 1} />)
        }
        return ret;
    }
    return (
        <ProgressContainer>
            {renderSteps()}
        </ProgressContainer>
    )
}


const Step: React.FC<{ isCurrent: boolean; value: number }> = ({ isCurrent, value }) => {

    const widthAnim = useRef(new Animated.Value(40)).current;

    const checkCurrent = () => {
        Animated.timing(widthAnim, {
            toValue: isCurrent ? 45 : 40,
            duration: 100,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        checkCurrent();
    }, [isCurrent]);

    return (
        <Animated.View style={{
            width: widthAnim,
            height: widthAnim,
        }}>
            <BackGradient colors={['purple', 'black']}>
                <StepContainer isCurrent={isCurrent}>
                    <TextStep isCurrent={isCurrent} style={textShadow.TS}>
                        {value}
                    </TextStep>
                </StepContainer>
            </BackGradient>
        </Animated.View>
    )
}

export default Progress;