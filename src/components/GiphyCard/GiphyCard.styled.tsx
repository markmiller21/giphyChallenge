import styled from 'styled-components';

export const GifContainer = styled.div`
    height: 300px;
    overflow: hidden;
    margin-right: 16px;
    margin-top: 30px;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.75),
        0 8px 10px 0 rgba(0, 0, 0, 0.5), 0 12px 10px 0 rgba(0, 0, 0, 0.25);

    img {
        transition: transform 0.5s ease;
    }

    :hover img {
        transform: scale(1.2);
    }
`;
