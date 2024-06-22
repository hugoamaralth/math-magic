import { ButtonContainer, ButtonText } from './styles';
import { themeColors } from '../../core/utils';
import BackGradient from '../backGradient';
import { textShadow } from '../../screens/FinalResult/styles';
import { Vibration } from 'react-native';

interface IButtonProps {
    click(): void;
    title: string;
    disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ click, title, disabled }) => {
    const { black2, red3 } = themeColors;
    return (
        <BackGradient colors={['black', 'purple', 'purple', 'purple', 'black']} style={{
            borderColor: 'purple',
            borderWidth: 1,
            borderRadius: 10,
        }}>
            <ButtonContainer onPress={() => {
                Vibration.vibrate(100);
                click();
            }}>
                <ButtonText style={{
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 3,
                    textShadowColor: '#0009'
                }}>{title}</ButtonText>
            </ButtonContainer>
        </BackGradient>
    )
}

export default Button;