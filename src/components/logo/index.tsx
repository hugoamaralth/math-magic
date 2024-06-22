import React from 'react';
import { LogoContainer, LogoImage } from './styles';


const Logo: React.FC = () => {

    return (
        
        <LogoContainer>
            <LogoImage source={require('../../../assets/images/logo.png')} resizeMode='contain' />
        </LogoContainer>
    )
}

export default Logo;