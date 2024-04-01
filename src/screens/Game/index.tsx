import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { propsStack } from '../../routes/Stack/Models';

const GameScreen: React.FC = () => {
    const navigation = useNavigation<propsStack>();
    const goToHome = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 40
            }}>GAME PAGE</Text>
            <Button title='Voltar' onPress={goToHome} />
        </View>
    )
}

export default GameScreen;