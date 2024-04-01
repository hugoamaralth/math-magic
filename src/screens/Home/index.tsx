import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { propsStack } from '../../routes/Stack/Models';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<propsStack>();
    const goToGame = () => {
        navigation.navigate('Game');
    }
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 40
            }}>HOME PAGE</Text>
            <Button onPress={goToGame} title='jogar' />
        </View>
    )
}

export default HomeScreen;