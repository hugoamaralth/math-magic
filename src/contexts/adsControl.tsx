import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads';

interface IAdsContextData {
    showInterstitial(): void;
    isClosed: boolean;
}

const AdsContext = createContext<IAdsContextData>({} as IAdsContextData);

interface AdsProviderData {
    children: ReactNode;
}

const AdsProvider: React.FC<AdsProviderData> = ({ children }) => {
    const adsId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-1372187030454944/7166405811'
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adsId);
    useEffect(() => {
        if (!isLoaded) load();
    }, [isLoaded, load]);

    const showInterstitial = () => {
        if (isLoaded && !isClosed) show();
    }
    return (
        <AdsContext.Provider value={{ showInterstitial, isClosed }}>
            {children}
        </AdsContext.Provider>
    )
}


const useAdsProvider = () => {
    return useContext(AdsContext);
}

export { useAdsProvider };
export default AdsProvider;