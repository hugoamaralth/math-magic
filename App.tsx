import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import SplashScreen from './src/components/splash-screen';
import Routes from './src/routes';
import GameProvider from './src/contexts/gameData';
import { AppContainer, BackImage, BackgroundContainer } from './styles'
import BackgroundImage from './assets/images/a.jpg';

export default function App() {
  let [fontLoaded] = useFonts({
    font1: require('./assets/fonts/Audiowide-Regular.ttf'),
    font2: require('./assets/fonts/Play-Regular.ttf'),
    font3: require('./assets/fonts/SpecialElite-Regular.ttf')
  });

  if (!fontLoaded) return null;

  return (
    <AppContainer>
      <StatusBar animated={true} backgroundColor="transparent" hidden />
      <BackgroundContainer>
        <BackImage source={BackgroundImage} />
      </BackgroundContainer>
      <GameProvider>
        <Routes />
      </GameProvider>
    </AppContainer>
  );
}