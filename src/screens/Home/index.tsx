import { useNavigation } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import { propsStack } from '../../routes/Stack/Models';
import Button from '../../components/button';
import Logo from '../../components/logo';
import { PageContainer, TextContainer, WelcomeText, textShadow } from './styles';
import { themeColors } from '../../core/utils';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<propsStack>();
    const goToGame = () => {
        navigation.navigate('Game');
    }
    const { red2, transparent } = themeColors;
    return (
        <PageContainer>
            <Logo />
            <TextContainer>
                <Shadow startColor={'#5e115e'} endColor={transparent} paintInside={false}>
                    <WelcomeText>
                        Escolha mentalmente um número de 1 a 63.{'\n'}{'\n'}
                        6 cards de números diferentes serão mostrados na tela.{'\n'}{'\n'}
                        Responda se o número escolhido aparece neles.
                    </WelcomeText>
                </Shadow>
            </TextContainer>
            <Button click={goToGame} title='jogar' />
        </PageContainer>
    )
}

export default HomeScreen;