import React from 'react';
import { GIFObject } from '../../types';
import { GifContainer } from './GiphyCard.styled';

// TODOs: click state, hover state & box shadow
export const GiphyCard = (gif: GIFObject) => (
    <GifContainer key={gif.id}>
        <img
            height={300}
            src={`http://media.giphy.com/media/${gif.id}/giphy.gif`}
            alt={gif.title} // Ideally this is a better alt tag
        />
    </GifContainer>
);
