import React from 'react';
import { BannerWrapper, LogoText } from './Banner.styled';
import giphyLogo from './GiphyIconDarkBackground36.png';

export const Banner = () => (
    <BannerWrapper>
        <img src={giphyLogo} alt="giphy logo" height={36} width={36} />
        <LogoText>GIPHY</LogoText>
    </BannerWrapper>
);
