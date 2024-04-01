import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppContainer } from './styles'
import SplashScreen from './src/components/splash-screen';
import Routes from './src/routes';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, [])
  return (
    <AppContainer>
      <StatusBar animated={true} backgroundColor="transparent" hidden />
      {isLoaded ? <Routes /> : <SplashScreen />}
    </AppContainer>
  );
}